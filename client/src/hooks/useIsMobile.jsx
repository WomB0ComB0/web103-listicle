import { useEffect, useState } from 'react';

export const useIsMobile = (width) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(
        window.innerWidth < (width || 1280) || window.innerHeight < 720,
      );
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  return isMobile;
};