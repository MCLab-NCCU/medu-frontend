import { friendlist } from "../datatype/User";

async function getFriendList(token: string) {
  const res = await fetch("http://140.119.164.16:3000/api/match/friendlist", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  return res.json() as Promise<friendlist>;
}

export default getFriendList;
