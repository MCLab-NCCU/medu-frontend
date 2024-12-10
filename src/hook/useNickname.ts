import { useQuery } from "@tanstack/react-query";
import getNickname from "../api/getNickname";

function useNickname(id: string) {
  return useQuery({
    queryKey: ["nickname", id],
    queryFn: () => getNickname(id!),
  });
}

export default useNickname;
