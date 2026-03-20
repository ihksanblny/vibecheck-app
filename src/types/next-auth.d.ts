import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Mengatur ulang bentuk data Session agar TypeScript kenal field baru kita
   */
  interface Session {
    user: {
      id?: string | null;
      username?: string | null;
    } & DefaultSession["user"];
  }

  /**
   * Mengatur ulang bentuk data User dari provider manual
   */
  interface User {
    id: string;
    username?: string | null;
  }
}

declare module "next-auth/jwt" {
  /**
   * Mengatur bentuk isi Token JWT kita
   */
  interface JWT {
    username?: string | null;
  }
}
