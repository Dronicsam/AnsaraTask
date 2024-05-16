"use client";

import { SVGProps, useState } from "react";

interface ActionButtonProps {
  buttonText: string;
  icon: React.FunctionComponent<SVGProps<SVGSVGElement>>;
}

export const ActionButton = (props: ActionButtonProps) => {
  const [color, setColor] = useState("#7A7A7A");
  return (
    <div
      className="flex items-center w-fit"
      onMouseEnter={() => setColor("#FFFFFF")}
      onMouseLeave={() => setColor("#7A7A7A")}
    >
      <div>
        <props.icon stroke={color} />
      </div>
      <p className={`text-[${color}] text-sm`}>{props.buttonText}</p>
    </div>
  );
};
