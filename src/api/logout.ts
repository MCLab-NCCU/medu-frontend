async function logout(refreshToken: string) {
  const res = await fetch(import.meta.env.VITE_SERVER_URL + "user/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refreshToken: refreshToken }),
  });

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
}

export default logout;
