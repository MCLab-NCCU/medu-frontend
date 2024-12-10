// src/api/registerAPI.ts

import { registerInfo, registerResponse } from "../datatype/User";

async function register(formData: registerInfo) {
  const res = await fetch(import.meta.env.VITE_SERVER_URL + "user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  return res.json() as Promise<registerResponse>;
}

export default register;
