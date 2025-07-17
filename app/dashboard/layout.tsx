"use client";

import type React from "react";
import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";
import { Toaster } from "@/components/ui/toaster";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="flex-1 max-w-64">
        <DashboardSidebar />
      </div>

      <main className="flex-1  overflow-y-auto p-4 md:p-6">{children}</main>

      <Toaster />
    </div>
  );
}
