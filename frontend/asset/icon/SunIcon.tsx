import * as React from "react";

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M3.55 19.09l1.41 1.41 1.8-1.79-1.42-1.42M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.71l1.8 1.79 1.41-1.41-1.79-1.8M20.45 5l-1.41-1.4-1.8 1.79 1.42 1.42M13 1h-2v3h2M6.76 5.39L4.96 3.6 3.55 5l1.79 1.81 1.42-1.42M1 13h3v-2H1m12 9h-2v3h2" />
    </svg>
  );
}

export default SunIcon;
