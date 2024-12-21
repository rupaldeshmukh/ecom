import { useState, useEffect } from "react";

const useIsTextOverflowing = (ref, maxLines) => {
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (ref.current) {
        const lineHeight = parseFloat(getComputedStyle(ref.current).lineHeight);
        const isOverflow = ref.current.scrollHeight > lineHeight * maxLines;
        setIsOverflowing(isOverflow);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, [ref, maxLines]);

  return isOverflowing;
};

export default useIsTextOverflowing;
