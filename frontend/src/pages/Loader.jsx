import React from "react";
import { Oval } from "react-loader-spinner";

// Loader component with a centered Oval loader
function Loader() {
  return (
    // Container for centering the loader using Flexbox
    <div style={styles.loaderContainer}>
      {/* Oval loader with specified properties */}
      <Oval
        visible={true}
        height="70"
        width="70"
        color="#4B49AC"
        ariaLabel="oval-loading"
      />
    </div>
  );
}

// Styles for the Loader component
const styles = {
  loaderContainer: {
    width: "97vw", // Set container width to almost full viewport width
    display: "flex", // Use Flexbox for layout
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
    height: "calc(100vh - 135px)", // Set container height to full viewport height
    margin:"auto"
  },
};

export default Loader;
