import { useEffect, useState } from "react";

export default function useScrollPos() {

  const [positionY, setPositionY] = useState()
  
  const handleScroll = () => {
    setPositionY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return (() => {
      window.removeEventListener("scroll", handleScroll)
    })
  }, []);

  return { positionY };
}

