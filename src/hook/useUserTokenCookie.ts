import { useCookies } from "react-cookie";
import { JWT } from "../datatype/JWT";

const userTokenName = "userToken";

function useUserTokenCookie() {
  const [cookies, setCookie, removeCookie] = useCookies([userTokenName]);

  const tokenCookie = cookies.userToken as string | undefined;

  function setUserTokenCookie(jwt: string) {
    setCookie(userTokenName, jwt);
  }

  function deleteUserTokenCookie() {
    removeCookie(userTokenName);
  }

  return {
    tokenCookie,
    setUserTokenCookie,
    deleteUserTokenCookie,
  };
}

export default useUserTokenCookie;
