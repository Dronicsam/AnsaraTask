import { SVGProps } from "react";

export const Download = (props: SVGProps<SVGSVGElement>, color?: string) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 14H14M8 2V11.3333M8 11.3333L12.6667 6.66667M8 11.3333L3.33333 6.66667"
      stroke="current"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
