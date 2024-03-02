"use client";

import { signIn } from "next-auth/react";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-2 text-center">
        Welcome to <br /> <span className="text-6xl">Gambit Challenge</span>
      </h1>
      <p className="text-xl mb-5">Sign in to see the data</p>
      <div className="flex gap-10 mt-10">
        <button
          className="bg-zinc-900 text-white py-2 px-5 rounded-md space-x-4 "
          onClick={() =>
            signIn("google", { callbackUrl: "https://gambit-atea.vercel.app/data" })
          }
        >
          Sign in with Google
        </button>
        <button
          className="bg-zinc-900 text-white py-2 px-5 rounded-md space-x-4 "
          onClick={() =>
            signIn("github", { callbackUrl: "https://gambit-atea.vercel.app/data" })
          }
        >
          Sign in with Github
        </button>
      </div>
    </div>
  );
}

export default Home;
