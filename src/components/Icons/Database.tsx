import * as React from "react";
import type { SVGProps } from "react";
const SvgDatabase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={2}
      d="M20 7c0 2.21-3.582 4-8 4S4 9.21 4 7s3.582-4 8-4 8 1.79 8 4ZM20 12c0 2.21-3.582 4-8 4s-8-1.79-8-4"
    />
    <path
      stroke="currentColor"
      strokeWidth={2}
      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7"
    />
  </svg>
);
export default SvgDatabase;
