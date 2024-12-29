import { userProfilePicture } from "../datatype/User";

async function postProfilePicture(token: string, picture: userProfilePicture) {
  const res = await fetch(
    import.meta.env.VITE_SERVER_URL + "user/profilepicture",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer" + token,
      },
      body: JSON.stringify(picture),
    }
  );

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  return res.ok;
}

export default postProfilePicture;
