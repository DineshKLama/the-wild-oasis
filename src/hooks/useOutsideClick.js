import { useEffect, useRef } from 'react';

export function useOutsideClick(handler, linstenCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }

    document.addEventListener('click', handleClick, linstenCapturing);

    return () =>
      document.removeEventListener('click', handleClick, linstenCapturing);
  }, [handler]);

  return ref;
}
