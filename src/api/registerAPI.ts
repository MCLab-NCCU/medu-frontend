// src/api/registerAPI.ts

export const registerUser = async (formData: any) => {
  const response = await fetch("http://140.119.164.16:3000/api/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Registration failed");
  }

  return response;
};
