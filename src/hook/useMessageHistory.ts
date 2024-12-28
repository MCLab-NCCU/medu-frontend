import { useQuery } from "@tanstack/react-query";
import getMessageHistory from "../api/getMessageHistory";
import useUserInfoCookie from "./useUserInfoCookie";

function useMessageHistory(id: string) {
  const { accessToken } = useUserInfoCookie();
  return useQuery({
    queryKey: ["message", id],
    queryFn: () => getMessageHistory(id, accessToken),
    enabled: false,
  });
}

export default useMessageHistory;
