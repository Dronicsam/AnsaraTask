"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Login = () => {
  const router = useRouter();
  // This should`nt be at production.
  // Temporary solution to save input data when it is changing (resets at reload)
  const [login, setLogin] = useState("");
  const [psw, setPass] = useState("");

  return (
    <div className="flex h-screen">
      <div className="flex flex-col m-auto gap-y-5">
        <input
          className="rounded-lg h-11 w-80 bg-white/10 placeholder-white px-3"
          placeholder="Login"
          value={login}
          onChange={() => setLogin(login)}
        />
        <input
          className="rounded-lg h-11 w-80 bg-white/10 placeholder-white px-3"
          placeholder="Password"
          value={psw}
          onChange={() => setPass(psw)}
        />
        <button
          onClick={() => router.push("/")}
          className="rounded-lg h-10 w-80 bg-white text-black"
        >
          Войти
        </button>
      </div>
    </div>
  );
};
