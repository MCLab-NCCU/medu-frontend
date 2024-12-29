import { JWT } from "../datatype/JWT";

async function refresh(id: string, refreshToken: string) {
  const res = await fetch(import.meta.env.VITE_SERVER_URL + "user/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: id, refreshToken: refreshToken }),
  });

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  return res.json() as Promise<JWT>;
}

export default refresh;
