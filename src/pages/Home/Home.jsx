import React, { useEffect } from "react";
import useAppFunction from "../../hooks/useAppFunction";
import Component1 from "./components/component1";

const Home = () => {
  const { handleAlert } = useAppFunction();
  useEffect(() => {
    handleAlert(true, "success", "hel ");
  }, []);

  return (
    <div style={{ height: "1222vh" }}>
      <Component1 />
    </div>
  );
};

export default Home;
