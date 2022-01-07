import { useEffect } from 'react';

export const useWindowWidth = (callback: React.Dispatch<React.SetStateAction<number>>) => {
  const setWidth = () => {
    callback(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', setWidth);
    return () => window.removeEventListener('resize', setWidth);
  });
};
