import React from "react";
function IconMoon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M21 11c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4 9 4v6m-9 10c3.75-1 7-5.46 7-9.78V6.3l-7-3.12L5 6.3v4.92C5 15.54 8.25 20 12 21m-3-6.67c1.76 2.17 5.13 2.24 6.97.07.23-.27.08-.68-.26-.74a4.491 4.491 0 01-3.18-2.2 4.503 4.503 0 01-.32-3.86.453.453 0 00-.51-.6c-3.34.62-4.89 4.61-2.7 7.33" />
    </svg>
  );
}

export default IconMoon;
