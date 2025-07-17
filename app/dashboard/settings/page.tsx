"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/auth-context";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export default function SettingsPage() {
  const { user, loading } = useAuth();
  const [fullName, setFullName] = useState(user?.fullName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [saving, setSaving] = useState(false);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-32">Loading...</div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    // Update user in localStorage (mock update)
    const updatedUser = { ...user, fullName, email };
    if (password) {
      updatedUser.password = password;
    }
    localStorage.setItem("user", JSON.stringify(updatedUser));
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully.",
    });
    setSaving(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-2 md:flex-row md:items-center md:space-y-0">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <span className="text-muted-foreground">
          Manage your account and application settings
        </span>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>
            Update your profile information below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4 max-w-md mx-auto" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">New Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Leave blank to keep current password"
              />
            </div>
            <Button type="submit" disabled={saving} className="w-full mt-4">
              {saving ? "Saving..." : "Save Changes"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
