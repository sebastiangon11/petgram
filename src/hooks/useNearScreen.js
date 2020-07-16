import React, { useState, useEffect, useRef } from 'react';

export const useNearScreen = () => {
  const element = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const whenIntersectionObserver = Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer'),
    );

    whenIntersectionObserver.then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(element.current);
    });
  }, [element]);

  return [show, element];
};
