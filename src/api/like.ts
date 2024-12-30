async function like(target: string, token: string) {
  const res = await fetch(import.meta.env.VITE_SERVER_URL + "match/like", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ targetUserId: target }),
  });

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
}

export default like;
