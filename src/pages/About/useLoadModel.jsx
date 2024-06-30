import { useQuery } from "@tanstack/react-query";

const useLoadModel = () => {
  const loadModels = async () => {
    await faceapi.nets.faceExpressionNet.loadFromUri("/models");

    await faceapi.nets.faceRecognitionNet.loadFromUri("/models");
    await faceapi.nets.ssdMobilenetv1.loadFromUri("/models");
    await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
    await faceapi.nets.mtcnn.loadFromUri("/models");
    await faceapi.nets.faceLandmark68Net.loadFromUri("/models");

    await faceapi.nets.faceLandmark68TinyNet.loadFromUri("/models");
    await faceapi.nets.ageGenderNet.loadFromUri("/models");
    return {
      faceExpressionNet,
      faceRecognitionNet,
      ssdMobilenetv1,
      tinyFaceDetector,
      mtcnn,
      faceLandmark68Net,
      faceLandmark68TinyNet,
      ageGenderNet,
    };
  };

  const { data, isLoading, isFetched } = useQuery({
    queryKey: ["load-model"],
    queryFn: loadModels,
  });

  return { data, isLoading, isFetched };
};

export default useLoadModel;
