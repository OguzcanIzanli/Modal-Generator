import { useEffect, useState } from "react";

interface UseTrafficSourceProps {
  domain: string;
}

const useTrafficSource = ({ domain }: UseTrafficSourceProps): boolean => {
  const [domainControl, setDomainControl] = useState(true);

  useEffect(() => {
    const referrer = document.referrer;
    if (
      process.env.NEXT_PUBLIC_API_URL?.includes("modal-generator") ||
      process.env.NEXT_PUBLIC_API_URL?.includes("localhost")
    ) {
      setDomainControl(true);
    } else if (!referrer.includes(domain)) {
      setDomainControl(false);
    } else {
      setDomainControl(true);
    }
  }, [domain]);

  return domainControl;
};

export default useTrafficSource;
