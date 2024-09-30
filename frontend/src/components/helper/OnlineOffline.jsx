// Toast.js
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify'; // Make sure to install react-toastify

const ToastNotification = () => {
  const [online, setOnline] = useState(true); // Assuming online by default

  useEffect(() => {
    const handleOnlineStatus = () => {
      const isOnline = navigator.onLine;
      setOnline(isOnline);
      // Check localStorage for previous state
      const showOnlineMessage = localStorage.getItem('showOnline');
      if (isOnline && showOnlineMessage !== 'true') {
        toast.success("Internet connected.");
        localStorage.setItem('showOnline', 'true');
      } else if (!isOnline) {
        toast.error("Internet disconnected.");
        localStorage.setItem('showOnline', 'false');
      }
    };

    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    // Initial check
    handleOnlineStatus();

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
    };
  }, []);

  return null; // This component does not render anything
};

export default ToastNotification;
