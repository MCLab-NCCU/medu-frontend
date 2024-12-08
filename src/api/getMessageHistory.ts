import { messageHistory } from "../datatype/User";

async function getMessageHistory(token: string, id: string) {
  const res = await fetch(
    "http://140.119.164.16:3000/api/message/messagehistory/" + id,
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

  return res.json() as Promise<messageHistory>;
}

export default getMessageHistory;
