import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="bg-zinc-900 text-white/50 p-4">
            <ul className="flex justify-evenly text-2xl font-bold">
                <li><Link href="/data">Data</Link></li>
                <li><Link href="/api/auth/signin">Sign In</Link></li>
                <li><Link href="/api/auth/signout">Sign Out</Link></li>
                
            </ul>
        </nav>
    )
}

//min-h-screen min-w-[300px] bg-zinc-900 text-white/50"