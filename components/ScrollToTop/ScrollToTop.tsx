'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import { useEffect } from 'react';

function ScrollToTop() {
  const segment = useSelectedLayoutSegment();

  useEffect(() => {
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }, 0);
  }, [segment]);

  return null;
}

export default ScrollToTop;
