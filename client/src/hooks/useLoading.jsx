import { useEffect, useState } from 'react';

const UsePageLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Store the original title
    const originalTitle = document.title;

    const handleContentLoaded = () => {
      setIsLoading(false);
      // Set the title back to the original title when content has loaded
      document.title = originalTitle;
    };

    // If the document is already loaded, we should avoid changing the title and directly set isLoading to false
    if (document.readyState === "complete" || document.readyState === "interactive") {
      setIsLoading(false);
    } else {
      // Update the title to 'loading....' when the component mounts (before content is loaded)
      document.title = 'loading....';
      window.addEventListener('DOMContentLoaded', handleContentLoaded);
    }

    return () => {
      window.removeEventListener('DOMContentLoaded', handleContentLoaded);
      // Reset the title to the original one when the component is unmounted
      document.title = originalTitle;
    };
  }, []);

  return isLoading;
};

export default UsePageLoading