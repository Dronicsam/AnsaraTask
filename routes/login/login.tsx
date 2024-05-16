"use client";
import { Input } from "shared/ui";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Login = () => {
  const router = useRouter();
  // This should`nt be at production.
  // Temporary solution to save input data when it is changing (resets at reload)
  const [login, setLogin] = useState("");
  const [psw, setPass] = useState("");

  function SimulateLogin(loginProp: string) {
    localStorage.setItem("Login", loginProp);
    router.push("/");
  }

  return (
    <div className="m-auto">
      <div className="flex m-auto flex-col w-fit gap-y-5">
        <Input
          widthProp={80}
          className="rounded-lg h-11 w-80 bg-white/10 placeholder-white px-3"
          placeholder="Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <Input
          widthProp={80}
          className="rounded-lg h-11 w-80 bg-white/10 placeholder-white px-3"
          placeholder="Password"
          value={psw}
          onChange={(e) => setPass(e.target.value)}
        />
        <button
          onClick={() => SimulateLogin(login)}
          className="rounded-lg h-10 w-80 bg-white text-black"
        >
          Войти
        </button>
      </div>
    </div>
  );
};
