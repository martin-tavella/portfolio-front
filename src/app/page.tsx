"use client";

import { TerminalLoader } from "@/components/terminal-loader";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      redirect("/landing");
    }
  }, [loading]);

  return (
    <>{loading && <TerminalLoader onComplete={() => setLoading(false)} />})</>
  );
}
