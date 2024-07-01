//Dependencies
import React, { useState } from "react";

//Material UI
import { Button, TextField } from "@mui/material";

//Imgs
import useLoadModel from "../About/useLoadModel";

const FacialRecognition = () => {
  const [firstImg, setFirstImg] = useState("");
  const [secondImg, setSecondImg] = useState("");

  const { data, matchFacesMutation, isLoading, detectFacesMutation } =
    useLoadModel();

  const handleFirstImageUpload = (e) => {
    setFirstImg(e.target.value);
    let canvas = document.getElementById("canvas1");

    const context = canvas.getContext("2d", { willReadFrequently: true });
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleSecondImageUpload = (e) => {
    setSecondImg(e.target.value);
    let canvas = document.getElementById("canvas2");
    const context = canvas.getContext("2d", { willReadFrequently: true });
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  const checkMatch = async () => {
    let firstImgElem = document.getElementById("first-img");
    let faces = await detectFacesMutation({
      img: firstImgElem,
      canvasId: "canvas1",
    });
    console.log(`🚀 ~ file: facial-recognition.jsx:51 ~ faces:`, faces);
    const result = await matchFacesMutation(faces[0]);
    console.log(`🚀 ~ file: facial-recognition.jsx:42 ~ result:`, result);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-around">
        <div className="flex flex-col gap-4">
          <TextField
            type="text"
            accept="image/png, image/jpeg, image/jpg"
            onChange={handleFirstImageUpload}
          />

          <div className="img-container" style={{ position: "relative" }}>
            <img
              id="first-img"
              src={firstImg}
              style={{ height: 300, width: 300 }}
              crossOrigin="anonymous"
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
          <TextField
            type="text"
            accept="image/png, image/jpeg, image/jpg"
            onChange={handleSecondImageUpload}
          />
          <div className="img-container" style={{ position: "relative" }}>
            <img
              id="second-img"
              src={secondImg}
              style={{ height: 300, width: 300 }}
              crossOrigin="anonymous"
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
