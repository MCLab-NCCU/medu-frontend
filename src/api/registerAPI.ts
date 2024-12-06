// src/api/registerAPI.ts

export const registerUser = (formData: any) => {
  return fetch("http://140.119.164.16:3000/api/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.log("Registration failed!"), console.log(e);
    });
};
