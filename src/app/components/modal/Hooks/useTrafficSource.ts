import { useEffect, useState } from "react";

interface UseTrafficSourceProps {
  domain: string;
}

const useTrafficSource = ({ domain }: UseTrafficSourceProps): boolean => {
  const [domainControl, setDomainControl] = useState(true);

  useEffect(() => {
    const referrer = document.referrer;

    if (!referrer.includes(domain)) {
      setDomainControl(false);
    } else {
      setDomainControl(true);
    }
  }, [domain]);

  return domainControl;
};

export default useTrafficSource;
