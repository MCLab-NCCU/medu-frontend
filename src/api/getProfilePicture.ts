async function getProfilePicture(id: string) {
  const res = await fetch(
    import.meta.env.VITE_SERVER_URL + "user/profilepicture/" + id,
    {
      method: "GET",
    }
  );

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  const imageBlob = await res.blob();
  const imageUrl = URL.createObjectURL(imageBlob);
  return imageUrl;
}

export default getProfilePicture;
