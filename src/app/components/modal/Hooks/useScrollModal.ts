import { useEffect, useState } from "react";

interface UseScrollModalProps {
  percentage: number;
}

const useScrollModal = ({ percentage }: UseScrollModalProps): boolean => {
  const [isTriggered, setIsTriggered] = useState(false); // Modalı tetikleyecek durumu oluştur

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPositionPercentage =
        (scrollPosition * 100) / (documentHeight - windowHeight);

      if (scrollPositionPercentage >= percentage && !isTriggered) {
        setIsTriggered(true); // Modal tetikleme durumunu güncelle
        console.log("Sınır aşıldı");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Bileşen kaldırıldığında dinleyiciyi kaldır
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [percentage, isTriggered]); // Dependency array'e percentage ve isTriggered ekle

  return isTriggered; // Hook, tetikleme durumunu döndürüyor
};

export default useScrollModal;
