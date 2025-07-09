"use client";

import { ClientLayoutApp } from "@/components/layoutapp";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ClientLayoutApp>{children}</ClientLayoutApp>;
}
