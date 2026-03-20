import { prisma } from "@/src/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/src/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const history = await prisma.vibeStatus.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
    take: 5, // Ambil 5 terakhir saja biar gak keberatan
  });

  return NextResponse.json(history);
}