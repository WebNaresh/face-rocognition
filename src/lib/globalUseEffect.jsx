import React, { createContext, useEffect } from "react";
import useAppState from "../hooks/useAppState";

const UseEffectContext = createContext();

const UseEffectState = (props) => {
  const { setProgress, location } = useAppState();

  useEffect(() => {
    setProgress(10);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    // eslint-disable-next-line
  }, [location]);

  return (
    <UseEffectContext.Provider value={{}}>
      {props.children}
    </UseEffectContext.Provider>
  );
};

export { UseEffectContext, UseEffectState as default };
