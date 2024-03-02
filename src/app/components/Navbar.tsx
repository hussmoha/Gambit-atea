"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react"; 

export default function Navbar() {
  const { data: session, status } = useSession();

  const handleSignOut = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    await signOut({ callbackUrl: "/" });
  };

  return (
    <nav className="bg-zinc-900 text-white/50 p-4">
      <ul className="flex justify-evenly text-2xl font-bold">
        <li>
          <Link href="/data">Data</Link>
        </li>

        {session && (
          <li>
            <a href="/api/auth/signout" onClick={handleSignOut}>
              Sign Out
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
