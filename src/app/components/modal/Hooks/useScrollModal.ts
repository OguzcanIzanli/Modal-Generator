import { useEffect, useState } from "react";

interface UseScrollModalProps {
  percentage: number;
}

const useScrollModal = ({ percentage }: UseScrollModalProps): boolean => {
  const [isTriggered, setIsTriggered] = useState(false);

  const calculateScrollPosition = (): number => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    return (scrollPosition * 100) / (documentHeight - windowHeight);
  };

  useEffect(() => {
    const initialScrollPosition = calculateScrollPosition();
    if (initialScrollPosition >= percentage && !isTriggered) {
      setIsTriggered(true);
    }

    const handleScroll = () => {
      const scrollPositionPercentage = calculateScrollPosition();
      if (scrollPositionPercentage >= percentage && !isTriggered) {
        setIsTriggered(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTriggered, percentage]);

  return isTriggered;
};

export default useScrollModal;
