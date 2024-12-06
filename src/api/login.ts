import { loginInfo } from "../datatype/User";
import { JWT } from "../datatype/Jwt";

// src/api/loginAPI.ts
async function login(formData: loginInfo) {
  const res = await fetch("http://140.119.164.16:3000/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  return res.json() as Promise<JWT>;
}

export default login;
