import React from "react";
function IconBell(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 003 16v2a1 1 0 001 1h16a1 1 0 001-1v-2a.996.996 0 00-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 007 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 002.818-2H9.182A2.98 2.98 0 0012 22z" />
    </svg>
  );
}

export default IconBell;
