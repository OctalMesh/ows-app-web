import { JSX, SVGProps } from "react";

export function ArrowIcon(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      className="h-full w-full"
      {...props}
    >
      <path
        d="M24 7C24.5523 7 25 7.44772 25 8V22H23V10.4141L8.70703 24.707L7.29297 23.293L21.5859 9H10V7H24Z"
        fill="currentColor"
      />
    </svg>
  );
}
