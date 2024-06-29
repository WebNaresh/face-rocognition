//Dependencies
import * as faceapi from "face-api.js";
import React, { useEffect, useState } from "react";

//Material UI
import { Backdrop, Button, CircularProgress } from "@mui/material";

//Imgs
import defaultImg from "../Imgs/user_new.png";

const FacialRecognition = () => {
  const [firstImg, setFirstImg] = useState(defaultImg);
  const [secondImg, setSecondImg] = useState(defaultImg);
  const [noFacesFound, setNoFacesFound] = useState(false);
  const [moreThanOneFace, setMoreThanOneFace] = useState(false);
  const [matchFound, setMatchFound] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadModels();
  }, []);

  const loadModels = async () => {
    try {
      await Promise.all([
        faceapi.nets.faceExpressionNet.loadFromUri("/models"),
        faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
        faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.mtcnn.loadFromUri("/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
        faceapi.nets.faceLandmark68TinyNet.loadFromUri("/models"),
        faceapi.nets.ageGenderNet.loadFromUri("/models"),
      ]);
    } catch (e) {
      console.log("Error loading models:", e);
    }
  };

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
    setLoading(true);
    setMatchFound(null);

    let firstImgElem = document.getElementById("first-img");
    let faces = await faceapi
      .detectAllFaces(firstImgElem, new faceapi.SsdMobilenetv1Options())
      .withFaceLandmarks()
      .withFaceDescriptors()
      .withFaceExpressions()
      .withAgeAndGender();

    faces = faceapi.resizeResults(faces, { height: 300, width: 300 });
    faceapi.draw.drawDetections(document.getElementById("canvas1"), faces);

    switch (faces.length) {
      case 0:
        setNoFacesFound(true);
        setLoading(false);
        break;
      case 1:
        findMatch(faces[0]);
        break;
      default:
        setMoreThanOneFace(true);
        setLoading(false);
        break;
    }
  };

  const findMatch = async (face) => {
    let matchScore = 0.63;
    let secondImgElem = document.getElementById("second-img");
    let faces = await faceapi
      .detectAllFaces(secondImgElem, new faceapi.SsdMobilenetv1Options())
      .withFaceLandmarks()
      .withFaceDescriptors();
    let labeledFace = new faceapi.LabeledFaceDescriptors("Face", [
      face.descriptor,
    ]);
    let faceMatcher = new faceapi.FaceMatcher(labeledFace, matchScore);

    let results = faces.map((f) => faceMatcher.findBestMatch(f.descriptor));
    if (results.findIndex((i) => i._label === "Face") !== -1) {
      let matched = [faces[results.findIndex((i) => i._label === "Face")]];
      matched = faceapi.resizeResults(matched, { height: 300, width: 300 });
      faceapi.draw.drawDetections(document.getElementById("canvas2"), matched, {
        withScore: false,
      });

      setMatchFound("found");
    } else {
      setMatchFound("not found");
    }
    setLoading(false);
  };

  return (
    <div className="main">
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

      <Button
        onClick={checkMatch}
        disabled={!firstImg || !secondImg}
        variant="contained"
        color="primary"
        style={{ margin: "10px auto" }}
      >
        Check Match
      </Button>

      {matchFound === "found" ? (
        <p>Match Found!!</p>
      ) : matchFound === "not found" ? (
        <p>No matches found</p>
      ) : (
        ""
      )}

      {noFacesFound ? (
        <p>No faces found in first image. Please upload image with 1 face</p>
      ) : (
        ""
      )}

      {moreThanOneFace ? (
        <p>
          More than one face found in first image. Please upload photo with only
          one face
        </p>
      ) : (
        ""
      )}

      {loading ? (
        <Backdrop open={loading} style={{ zIndex: 100000, color: "fff" }}>
          <p style={{ color: "#fff", fontSize: 20, fontWeight: 900 }}>
            Analyzing images...
          </p>
          <CircularProgress color="secondary" />
        </Backdrop>
      ) : (
        ""
      )}
    </div>
  );
};

export default FacialRecognition;
