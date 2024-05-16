"use client";

import { ActionButton } from "shared/ui";
import { Calendar } from "shared/icons/calendar";
import { User } from "shared/icons/user";
import { Download } from "shared/icons/download";
import { useEffect, useState } from "react";

export const ActionButtons = () => {
  const [login, setLogin] = useState("anon");
  useEffect(() => {
    const login = localStorage.getItem("Login");
    if (login) {
      setLogin(login);
    }
  }, []);
  return (
    <div className="flex gap-8 mt-10">
      <ActionButton icon={Download} buttonText="Загрузить ещё" />
      <ActionButton icon={Calendar} buttonText="Только сегодня" />
      <ActionButton icon={User} buttonText={login} />
    </div>
  );
};
