import { create } from "zustand";

const useAppState = create((set) => ({
  appAlert: {
    alert: true,
    type: "success",
    msg: "this is success alert",
  },
  setAppAlert: (newAlert) => set({ appAlert: { ...newAlert } }),
  appLoading: {
    load: false,
    color: "#fff",
  },
  setAppLoading: (newLoading) => set({ appLoading: { ...newLoading } }),
  progress: 10,
  setProgress: (newProgress) => set({ progress: newProgress }),
}));

export default useAppState;
