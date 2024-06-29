import React, { useEffect } from "react";
import useAppFunction from "../../hooks/useAppFunction";
import FacialRecognition from "./components/facial-recognition";

const Home = () => {
  const { handleAlert } = useAppFunction();
  useEffect(() => {
    handleAlert(true, "success", "hel ");
  }, []);

  return (
    <div style={{ height: "1222vh" }}>
      <FacialRecognition />
    </div>
  );
};

export default Home;
