async function postProfilePicture(token: string, picture: File) {
  const fd = new FormData();
  fd.append("profilePicture", picture);
  const res = await fetch(
    import.meta.env.VITE_SERVER_URL + "user/profilepicture",
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: fd,
    }
  );

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  return res.ok;
}

export default postProfilePicture;
