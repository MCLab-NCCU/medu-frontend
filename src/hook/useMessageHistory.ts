import { useQuery } from "@tanstack/react-query";
import useUserTokenCookie from "./useUserTokenCookie";
import getMessageHistory from "../api/getMessageHistory";

function useMessageHistory(id: string) {
  const { tokenCookie } = useUserTokenCookie();
  return useQuery({
    queryKey: ["message", id],
    queryFn: () => getMessageHistory(tokenCookie!, id),
  });
}

export default useMessageHistory;
