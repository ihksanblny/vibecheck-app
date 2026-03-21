import { prisma } from "@/src/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Ambil User yang punya paling tidak 1 Vibe Status
        const activeUsers = await prisma.user.findMany({
            include: {
                vibes: {
                    orderBy: { createdAt: "desc" },
                    take: 1,
                },
            },
            where: {
                vibes: {
                    some: {} // Hanya ambil yang sudah pernah update vibe
                }
            },
            take: 12, // Ambil 12 orang teratas dulu
            orderBy: {
                // Biar yang paling baru update ada di atas
                vibes: {
                    _count: 'desc'
                }
            }
        });

        return NextResponse.json(activeUsers);
    } catch (error) {
        console.error("Discovery Error:", error);
        return NextResponse.json({ error: "Failed to fetch vibes" }, { status: 500 });
    }
}
