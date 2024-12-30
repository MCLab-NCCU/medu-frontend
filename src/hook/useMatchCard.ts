import { useState } from "react";
import getMatchCard from "../api/getMatchCard";
import { userMatch } from "../datatype/User";
import useUserInfoCookie from "./useUserInfoCookie";
import JWTdecoder from "../utils/JWTdecoder";
import refresh from "../api/refresh";

function useMatchCard() {
  const [data, setData] = useState<userMatch | null>(null); // State to hold the fetched data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling
  const { refreshAccessCookie, accessToken, refreshToken, ID } =
    useUserInfoCookie();

  async function checkValid() {
    if (JWTdecoder(accessToken).exp < Math.floor(new Date().getTime() / 1000)) {
      const newToken = await refresh(ID, refreshToken);
      refreshAccessCookie(newToken);
    }
  }

  const fetchMatchCard = async () => {
    /*if (!accessToken) {
      console.error("No token available");
      return;
    }*/

    setLoading(true); // Set loading to true before fetching
    setError(null); // Set error to null before fetching
    try {
      const res = await getMatchCard(accessToken!);
      setData(res); // Store the fetched data in state
    } catch (error) {
      checkValid();
      const res = await getMatchCard(accessToken!);
      setData(res);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  return { fetchMatchCard, data, loading, error }; // Return the fetched data, loading state, and error
}

export default useMatchCard;
