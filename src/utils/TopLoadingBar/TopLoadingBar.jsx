import React from "react";
import LoadingBar from "react-top-loading-bar";
import useAppState from "../../hooks/useAppState";

const TopLoadingBar = () => {
  const { setProgress, progress } = useAppState();
  return (
    <LoadingBar
      color="#01d293"
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
  );
};

export default TopLoadingBar;
