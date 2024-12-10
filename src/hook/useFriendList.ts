import { useQuery } from "@tanstack/react-query";
import useUserTokenCookie from "./useUserTokenCookie";
import getFriendList from "../api/getFriendList";

function useFriendList() {
  const { tokenCookie } = useUserTokenCookie();
  return useQuery({
    queryKey: ["friendList", tokenCookie],
    queryFn: () => getFriendList(tokenCookie!),
  });
}

export default useFriendList;
