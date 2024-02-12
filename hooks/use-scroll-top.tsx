import {useState , useEffect} from 'react';

export const useScrollTop = (threshold = 10) => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > threshold) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scroll;
};
