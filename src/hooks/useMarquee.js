import { useState, useEffect } from "react";
import useScroll from "./useScrollPos";

export default function useMarquee() {

  const { positionY } = useScroll()
  const [forwardStyle, setForwardStyle] = useState({});
  const [backwardStyle, setBackwardStyle] = useState({});
  
  const template = {
    fwd: {
      'left': `${positionY}px`,
      'transition': 'cubic-bezier(0,0.57,0.56,1) 2s' 
    },
    back: {
      'right': `${positionY}px`,
      'transition': 'cubic-bezier(0,0.57,0.56,1) 2s' 
    }
  }
  useEffect(() => {
    setForwardStyle(template.fwd)
    setBackwardStyle(template.back)
  }, [positionY]);
  
  return { forwardStyle, backwardStyle }
}
