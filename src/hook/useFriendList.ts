import { useQuery } from "@tanstack/react-query";
import getFriendList from "../api/getFriendList";
import useUserInfoCookie from "./useUserInfoCookie";

function useFriendList() {
  const { accessToken } = useUserInfoCookie();
  return useQuery({
    queryKey: ["friendList", accessToken],
    queryFn: () => getFriendList(accessToken),
    enabled: false,
  });
}

export default useFriendList;
