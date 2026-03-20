"use client";

import { useSession } from "next-auth/react";
import { Loader2 } from "lucide-react";
import { useVibe } from "@/src/hooks/useVibe";
import DashboardView from "@/src/components/DashboardView";
import GuestView from "@/src/components/GuestView";

export default function Home() {
  const { data: session, status } = useSession();
  const vibeLogic = useVibe();

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <Loader2 className="animate-spin text-white w-8 h-8 opacity-20" />
      </div>
    );
  }

  // Router Tampilan
  return session ? (
    <DashboardView session={session} {...vibeLogic} />
  ) : (
    <GuestView />
  );
}