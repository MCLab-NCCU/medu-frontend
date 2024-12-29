import { useState } from "react";
import getMatchCard from "../api/getMatchCard";
import { userMatch } from "../datatype/User";
import useUserInfoCookie from "./useUserInfoCookie";

function useMatchCard() {
  const { accessToken } = useUserInfoCookie();
  const [data, setData] = useState<userMatch | null>(null); // State to hold the fetched data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  const fetchMatchCard = async () => {
    if (!accessToken) {
      console.error("No token available");
      return;
    }

    setLoading(true); // Set loading to true before fetching
    setError(null); // Set error to null before fetching
    try {
      const res = await getMatchCard(accessToken!);
      console.log(res);
      setData(res); // Store the fetched data in state
    } catch (error) {
      console.error("Error fetching match card", error);
      setError(error); // Set error if fetching fails
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  return { fetchMatchCard, data, loading, error }; // Return the fetched data, loading state, and error
}

export default useMatchCard;
