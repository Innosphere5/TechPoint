
"use client"
import React, { useState } from 'react';
import SplashScreen from './SplashScreen/SplashScreen';

const ClientLayout = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      <div className={showSplash ? 'hidden' : 'block'}>
        {children}
      </div>
    </>
  );
};

export default ClientLayout;
