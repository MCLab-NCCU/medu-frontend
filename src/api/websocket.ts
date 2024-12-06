function connect(token: string) {
  const ws = new WebSocket("ws://140.119.164.16:3000/socket?token=" + token);
  // 在開啟連線時執行
  ws.onopen = () => console.log("[open connection]");
}

export default connect;
