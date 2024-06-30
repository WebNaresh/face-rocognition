//Dependencies
import React, { useState } from "react";

//Material UI
import { Button } from "@mui/material";

//Imgs
import defaultImg from "../Imgs/user_new.png";
import useLoadModel from "../useLoadModel";

const FacialRecognition = () => {
  const [firstImg, setFirstImg] = useState(defaultImg);
  const [secondImg, setSecondImg] = useState(defaultImg);

  const {
    data,
    isFetched,
    isLoading,
    detectFacesMutation,
    matchFacesMutation,
  } = useLoadModel();
  console.log(
    `🚀 ~ file: facial-recognition.jsx:21 ~ data, isFetched, isLoading :`,
    { data, isFetched, isLoading }
  );

  const handleFirstImageUpload = (e) => {
    let img = e.target.files[0];
    let canvas = document.getElementById("canvas1");
    const context = canvas.getContext("2d", { willReadFrequently: true });
    context.clearRect(0, 0, canvas.width, canvas.height);
    setFirstImg(URL.createObjectURL(img));
  };

  const handleSecondImageUpload = (e) => {
    let img = e.target.files[0];
    let canvas = document.getElementById("canvas2");
    const context = canvas.getContext("2d", { willReadFrequently: true });
    context.clearRect(0, 0, canvas.width, canvas.height);
    setSecondImg(URL.createObjectURL(img));
  };

  const checkMatch = async () => {
    let firstImgElem = document.getElementById("first-img");
    let faces = await detectFacesMutation({
      img: firstImgElem,
      canvasId: "canvas1",
    });
    // let checkFaced = await matchFacesMutation(faces[0]);
    // console.log(
    //   `🚀 ~ file: facial-recognition.jsx:48 ~ checkFaced:`,
    //   checkFaced
    // );
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-around">
        <div className="flex flex-col gap-4">
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            onChange={handleFirstImageUpload}
          />

          <div className="img-container" style={{ position: "relative" }}>
            <img
              id="first-img"
              src={firstImg}
              style={{ height: 300, width: 300 }}
            />
            <canvas
              className="absolute top-0"
              id="canvas1"
              width="300px"
              height="300px"
            ></canvas>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            onChange={handleSecondImageUpload}
          />
          <div className="img-container" style={{ position: "relative" }}>
            <img
              id="second-img"
              src={secondImg}
              style={{ height: 300, width: 300 }}
            />
            <canvas
              className="absolute top-0"
              id="canvas2"
              width="300px"
              height="300px"
            ></canvas>
          </div>
        </div>
      </div>

      <Button
        onClick={checkMatch}
        disabled={!firstImg || !secondImg || isLoading}
        variant="contained"
        color="primary"
        style={{ margin: "10px auto" }}
      >
        Check Match
      </Button>
    </div>
  );
};

export default FacialRecognition;
