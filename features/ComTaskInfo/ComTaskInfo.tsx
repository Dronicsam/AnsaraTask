"use client";

import { useState, useEffect } from "react";
import { PlusIcon } from "shared/icons";

interface CompletedTaskInfoProps {
  date: string;
  time?: string;
}

export const CompletedTaskInfo = (props: CompletedTaskInfoProps) => {
  const [plusVisibility, setPlusVisibility] = useState("hidden");
  useEffect(() => {
    if (props.date === "Сегодня") {
      setPlusVisibility("block");
    }
  }, [props.date]);
  return (
    <div className="flex gap justify-between mb-3 mt-28">
      <div className="flex items-center gap-5">
        <p className="text-2xl font-bold">{props.date}</p>
        <PlusIcon className={plusVisibility} />
      </div>
      <p className="text-2xl text-[#547CFB]">{props.time}</p>
    </div>
  );
};
