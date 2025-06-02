import { useEffect } from 'react';

const useScrollToTop = () => {
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, []);
};

export default useScrollToTop; 