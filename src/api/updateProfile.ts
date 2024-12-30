import { updateProfileData } from "../datatype/User";

async function updateProfile(data: updateProfileData, token: string) {
  const res = await fetch(import.meta.env.VITE_SERVER_URL + "user/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      nickname: data.nickname,
      bio: data.bio,
      county: data.location.county,
      township: data.location.township,
    }),
  });

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
}

export default updateProfile;
