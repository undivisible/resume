'use client';
import React, { useEffect } from 'react';
import MobilePage from './mobile';
import DesktopPage from './page';

const DetectionComponent = React.memo(() => {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setIsMobile(window.innerWidth < 768);
      }, 150); // Adjust the debounce time according to your needs
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? <MobilePage /> : <DesktopPage />}
    </div>
  );
});

DetectionComponent.displayName = 'DetectionComponent';

export default DetectionComponent;