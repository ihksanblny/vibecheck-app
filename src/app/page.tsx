import { getServerSession } from "next-auth/next";
import { authOptions } from "@/src/lib/auth";
import DashboardWrapper from "@/src/components/DashboardWrapper";
import GuestView from "@/src/components/GuestView";

export default async function Home() {
  // Pengecekan session langsung di server agar tidak ada loading kosong di client
  const session = await getServerSession(authOptions);

  if (!session) {
    return <GuestView />;
  }

  return <DashboardWrapper session={session} />;
}