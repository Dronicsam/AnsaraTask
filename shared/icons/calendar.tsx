import { SVGProps } from "react";

export const Calendar = (
  props: SVGProps<SVGSVGElement>,
  colorProp?: string,
) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 6.66668H2M14 8.33334V5.86668C14 4.74657 14 4.18652 13.782 3.7587C13.5903 3.38237 13.2843 3.07641 12.908 2.88466C12.4802 2.66668 11.9201 2.66668 10.8 2.66668H5.2C4.0799 2.66668 3.51984 2.66668 3.09202 2.88466C2.71569 3.07641 2.40973 3.38237 2.21799 3.7587C2 4.18652 2 4.74657 2 5.86668V11.4667C2 12.5868 2 13.1468 2.21799 13.5747C2.40973 13.951 2.71569 14.2569 3.09202 14.4487C3.51984 14.6667 4.0799 14.6667 5.2 14.6667H8M10.6667 1.33334V4.00001M5.33333 1.33334V4.00001M9.66667 12.6667L11 14L14 11"
      stroke="current"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
