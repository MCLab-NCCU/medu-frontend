import { nicknameResponse } from "../datatype/User";

async function getNickname(id: string) {
  const res = await fetch(
    "http://140.119.164.16:3000/api/user/nickname/" + id,
    {
      method: "GET",
    }
  );

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  return res.json() as Promise<nicknameResponse>;
}

export default getNickname;
