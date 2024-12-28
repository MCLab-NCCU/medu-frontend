import { useQuery } from "@tanstack/react-query";
import getProfilePicture from "../api/getProfilePicture";

function useProfilePicture(id: string) {
  return useQuery({
    queryKey: ["profilepicture", id],
    queryFn: () => getProfilePicture(id!),
  });
}

export default useProfilePicture;
