import { prisma } from "@/src/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/src/lib/auth";
import { NextResponse } from "next/server";

// 1. GET: AMBIL STATUS TERAKHIR
export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const latestVibe = await prisma.vibeStatus.findFirst({
        where: { userId: session.user.id },
        orderBy: { createdAt: "desc" },
    });

    if (!latestVibe) return NextResponse.json({
        batteryLevel: 50,
        moodText: "Lagi Gabut",
        currentActivity: "Ngedit Web",
        musicUrl: ""
    });

    return NextResponse.json(latestVibe);
}

// 2. POST: SIMPAN STATUS BARU
export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { batteryLevel, moodText, currentActivity, musicUrl } = await req.json();

    try {
        const newVibe = await prisma.vibeStatus.create({
            data: {
                batteryLevel: parseInt(batteryLevel) || 50,
                moodText: moodText || "Lagi Gabut",
                currentActivity: currentActivity || "Ngedit Web",
                musicUrl: musicUrl || "",
                userId: session.user.id,
            },
        });
        return NextResponse.json(newVibe);
    } catch (error) {
        console.error("DEBUG VIBE ERROR:", error);
        return NextResponse.json({ error: "Database save failed" }, { status: 500 });
    }
}