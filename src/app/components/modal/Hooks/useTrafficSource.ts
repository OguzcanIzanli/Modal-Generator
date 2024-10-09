import { useEffect, useState } from "react";

interface UseTrafficSourceProps {
  domain: string;
}

const useTrafficSource = ({ domain }: UseTrafficSourceProps): boolean => {
  const [domainControl, setDomainControl] = useState(true);

  useEffect(() => {
    const referrer = document.referrer;

    const isModalGeneratorWebsite =
      process.env.NEXT_PUBLIC_API_URL?.includes("modal-generator");

    setDomainControl(isModalGeneratorWebsite || referrer.includes(domain));
  }, [domain]);

  return domainControl;
};

export default useTrafficSource;
