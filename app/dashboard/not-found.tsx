"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <h1 className="text-5xl font-bold text-primary">404</h1>
      <p className="text-lg text-muted-foreground">
        Sorry, the page you are looking for does not exist in the dashboard.
      </p>
      <Button asChild variant="default">
        <Link href="/dashboard">Go back to Dashboard</Link>
      </Button>
    </div>
  );
}
