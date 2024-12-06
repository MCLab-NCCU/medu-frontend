import { useQueries } from "@tanstack/react-query";
import getNickname from "../api/getNickname";
import { friendlist } from "../datatype/User";

function useNickname(friendlist: friendlist) {
  return (
    useQueries({
      queries: friendlist.friendList.map((id) => ({
        queryKey: ["nickname", id],
        queryFn: () => getNickname(id),
      })),
    }) ?? []
  );
}

export default useNickname;
