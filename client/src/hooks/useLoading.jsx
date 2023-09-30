import { useEffect, useState } from 'react';

const usePageLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
      const titleElement = document.querySelector('head title');
      titleElement.textContent = 'loading....';
    };

    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return isLoading;
};

export default usePageLoading;
