import { useEffect } from 'react';

const useEvent = (element, event, handler) => {
  useEffect(() => {
    element.addEventListener(event, handler);
    return () => {
      element.removeEventListener(event, handler);
    };
  });
};

export default useEvent;
