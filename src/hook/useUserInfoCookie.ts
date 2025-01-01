import { useCookies } from "react-cookie";
import { userInfo, userProfile } from "../datatype/User";
import { JWT } from "../datatype/JWT";

function useUserInfoCookie() {
  const [userInfoCookie, setUserInfoCookie, removeUserInfoCookie] = useCookies([
    "userInfo",
  ]);
  const [accessTokenCookie, setAccessTokenCookie, removeaccessTokenCookie] =
    useCookies(["accessToken"]);
  const [refreshTokenCookie, setRefreshTokenCookie, removeRefreshTokenCookie] =
    useCookies(["refreshToken"]);

  const [userIdCookie, setUserIdCookies, removeUserIdCookies] = useCookies([
    "ID",
  ]);

  const userInfo = (userInfoCookie.userInfo as userProfile) || undefined;
  const ID = (userIdCookie.ID as string) || undefined;
  const accessToken = (accessTokenCookie.accessToken as string) || undefined;
  const refreshToken = (refreshTokenCookie.refreshToken as string) || undefined;

  function setCookies(info: userInfo) {
    setUserInfoCookie("userInfo", info.userProfile);
    setAccessTokenCookie("accessToken", info.accessToken);
    setRefreshTokenCookie("refreshToken", info.refreshToken);
    setUserIdCookies("ID", info.userId);
  }

  function refreshAccessCookie(token: JWT) {
    setAccessTokenCookie("accessToken", token.accessToken);
  }

  function deleteCookies() {
    removeUserInfoCookie("userInfo");
    removeaccessTokenCookie("accessToken");
    removeRefreshTokenCookie("refreshToken");
    removeUserIdCookies("ID");
  }

  function updateUserInfo(info: userProfile) {
    setUserInfoCookie("userInfo", info);
  }

  return {
    userInfo,
    accessToken,
    refreshToken,
    ID,
    setCookies,
    refreshAccessCookie,
    deleteCookies,
    updateUserInfo,
  };
}

export default useUserInfoCookie;
