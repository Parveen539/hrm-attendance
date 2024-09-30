import React, { useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";

function TopBarLoading() {
  const [progress, setProgress] = useState(0);
  const barColor = "#ff7c05";

  useEffect(() => {
    let interval;

    const simulatePageLoading = () => {
      const startTime = window.performance.timing.navigationStart;
      const endTime = window.performance.timing.loadEventEnd;

      // Calculate the total time the page took to load
      const totalTime = endTime - startTime;

      // Set the interval to adjust progress based on the actual loading time
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 100 / totalTime; // Adjust based on the actual loading time
          return newProgress >= 100 ? 100 : newProgress;
        });
      }, 100);

      // Simulate the completion of page loading after totalTime
      setTimeout(() => {
        clearInterval(interval);
        setProgress(100);
      }, totalTime);
    };

    simulatePageLoading();

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      {/* Your main component content here */}
      <LoadingBar
        color={barColor}
        progress={progress}
        height={5}
        onLoaderFinished={() => setProgress(0)}
      />
    </div>
  );
}

export default TopBarLoading;
