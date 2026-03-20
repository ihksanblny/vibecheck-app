import { NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { username, password, name } = body;

        // 1. Validasi kalau ada yang kosong
        if (!username || !password) {
            return NextResponse.json({ message: "Username & Password wajib diisi!" }, { status: 400 });
        }

        // 2. Cek apakah ada username yang sama menyusup
        const existingUser = await prisma.user.findUnique({
            where: { username }
        });

        if (existingUser) {
            return NextResponse.json({ message: "Waduh, username ini sudah dipakai!" }, { status: 409 });
        }

        // 3. ENKRIPSI PASSWORD (Hacker cuma akan lihat teks acak di database)
        const hashedPassword = await bcrypt.hash(password, 10);

        // 4. Masukkan ke Database!
        const newUser = await prisma.user.create({
            data: {
                username,
                name,
                password: hashedPassword,
            }
        });

        return NextResponse.json({ message: "Akun sukses dibuat!", user: newUser }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Aduh, servernya pusing!" }, { status: 500 });
    }
}