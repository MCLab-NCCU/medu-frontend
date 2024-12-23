import { userFriends } from "../datatype/User";

async function getFriendList(token: string) {
  const res = await fetch(
    import.meta.env.VITE_SERVER_URL + "match/friendlist",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  return res.json() as Promise<userFriends>;
}

export default getFriendList;
