import { useCookies } from "react-cookie";

export const useAppCookies = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["app-cookie"]);
  return { cookies, setCookie, removeCookie };
};

export default useAppCookies;
