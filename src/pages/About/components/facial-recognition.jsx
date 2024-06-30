//Dependencies
import * as faceapi from "face-api.js";
import React, { useState } from "react";

//Material UI
import { Backdrop, Button, CircularProgress, TextField } from "@mui/material";
import useLoadModel from "../useLoadModel";

//Imgs
// https://images.unsplash.com/photo-1677726844064-3ccf77413283
// https://images.unsplash.com/photo-1714951191764-db7876745f01

const FacialRecognition = () => {
  const [firstImg, setFirstImg] = useState(null);
  const [secondImg, setSecondImg] = useState(null);
  const [firstImageLink, setFirstImageLink] = useState("");
  const [secondImageLink, setSecondImageLink] = useState("");
  const [noFacesFound, setNoFacesFound] = useState(false);
  const [moreThanOneFace, setMoreThanOneFace] = useState(false);
  const [matchFound, setMatchFound] = useState(null);
  const [loading, setLoading] = useState(false);

  const { data, isLoading, isFetched } = useLoadModel();

  const checkMatch = async () => {
    setLoading(true);
    setMatchFound(null);

    let firstImgElem = document.getElementById("first-img");
    const tempImage = new Image();
    tempImage.src = firstImg;
    tempImage.onload = async (e) => {
      let faces = await faceapi
        .detectAllFaces(tempImage, new faceapi.SsdMobilenetv1Options())
        .withFaceLandmarks()
        .withFaceDescriptors();
      if (faces.length === 0) {
        setNoFacesFound(true);
        setLoading(false);
        return;
      }
      if (faces.length > 1) {
        setMoreThanOneFace(true);
        setLoading(false);
        return;
      }
      findMatch(faces[0]);
    };
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

  const handleFirstImageLink = (e) => {
    setFirstImg(firstImageLink);
    // also draw image on fist canvas
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    const img = document.getElementById("first-img");
    ctx.drawImage(img, 0, 0, 300, 300);
  };
  const handleSecondImageLink = (e) => {
    setSecondImg(secondImageLink);
    // also draw image on second canvas
    const canvas = document.getElementById("canvas2");
    const ctx = canvas.getContext("2d");
    const img = document.getElementById("second-img");
    ctx.drawImage(img, 0, 0, 300, 300);
  };

  return (
    <div className="main">
      <div className="w-full flex gap-4 items-center justify-center">
        <TextField
          type="text"
          size="small"
          placeholder="Enter image link"
          onChange={(e) => setFirstImageLink(e.target.value)}
        />
        <Button
          onClick={handleFirstImageLink}
          variant="contained"
          color="primary"
          style={{ margin: "10px auto" }}
        >
          Load Image
        </Button>
      </div>

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
      <div className="w-full flex gap-4 items-center justify-center">
        <TextField
          type="text"
          placeholder="Enter image link"
          onChange={(e) => setSecondImageLink(e.target.value)}
        />
        <Button
          onClick={handleSecondImageLink}
          variant="contained"
          color="primary"
          style={{ margin: "10px auto" }}
        >
          Load Image
        </Button>
      </div>

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
