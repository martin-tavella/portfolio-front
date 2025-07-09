"use client"

import { TerminalLoader } from "@/components/terminal-loader";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true); 

  return (
    <div>
   {loading && <TerminalLoader  onComplete={() => setLoading(false)} />}
    <p>hola</p>
    </div>
  );
}
