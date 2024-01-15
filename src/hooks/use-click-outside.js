import { useEffect } from 'react';

const useClickOutside = (reference, callback, enabled = true) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (typeof event.target !== 'object') return;

      if (reference?.current && !reference.current.contains(event.target)) {
        callback();
      }
    };

    if (enabled) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      if (enabled) {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    };
  }, [reference, callback, enabled]);
};

export default useClickOutside;
