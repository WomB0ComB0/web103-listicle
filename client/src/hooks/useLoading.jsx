import { useEffect, useState } from 'react';

const UsePageLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const originalTitle = document.title;

    const handleContentLoaded = () => {
      // Set timeout to ensure a minimum display time for the loading state
      setTimeout(() => {
        setIsLoading(false);
        document.title = originalTitle;
      }, 2000);
    };

    if (document.readyState === "complete" || document.readyState === "interactive") {
      setIsLoading(false);
    } else {
      document.title = 'loading....';
      window.addEventListener('DOMContentLoaded', handleContentLoaded);
    }

    return () => {
      window.removeEventListener('DOMContentLoaded', handleContentLoaded);
      document.title = originalTitle;
    };
  }, []);

  return isLoading;
};

export default UsePageLoading;
