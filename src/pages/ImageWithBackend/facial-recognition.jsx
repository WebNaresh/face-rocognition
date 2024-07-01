//Dependencies
import React, { useState } from "react";

//Material UI
import { Button, IconButton, TextField } from "@mui/material";

//Imgs
import { PrintRounded, Upload } from "@mui/icons-material";
import useLoadModel from "../About/useLoadModel";

const FacialRecognition = () => {
  const [firstImg, setFirstImg] = useState("");
  const [secondImg, setSecondImg] = useState("");
  const [user, setUser] = useState("");

  const {
    data,
    matchFacesMutation,
    isLoading,
    detectFacesMutation,
    uploadImageToBackendMutation,
    getImageAndVerifyMutation,
  } = useLoadModel();

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

  const uploadImage = async () => {
    let firstImgElem = document.getElementById("first-img");
    let faces = await detectFacesMutation({
      img: firstImgElem,
      canvasId: "canvas1",
    });

    const response = await uploadImageToBackendMutation({
      label: user,
      descriptor: [...faces[0].descriptor],
    });
  };

  const verifyImage = async () => {
    const result = await getImageAndVerifyMutation({ label: user });
    console.log(`🚀 ~ file: facial-recognition.jsx:68 ~ result:`, result);
  };

  return (
    <div className="flex flex-col mt-5 gap-8">
      <TextField
        type="text"
        placeholder="Name of user"
        label="Name of user"
        name="user"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <div className="flex justify-around">
        <div className="flex flex-col gap-4">
          <div className="flex w-full justify-between items-center">
            <div className="gap-4 flex">
              <TextField
                type="text"
                onChange={handleFirstImageUpload}
                placeholder="Upload first image"
                label="First Image"
              />
            </div>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={uploadImage}
            >
              <Upload />
            </IconButton>
          </div>

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
          <div className="flex w-full justify-between items-center">
            <div className="gap-4 flex">
              <TextField
                type="text"
                onChange={handleSecondImageUpload}
                placeholder="Upload second image"
                label="Second Image"
              />
            </div>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={verifyImage}
            >
              <PrintRounded />
            </IconButton>
          </div>
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
