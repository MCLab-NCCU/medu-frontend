function connect(token: string) {
  const ws = new WebSocket("ws://140.119.164.16:3000/socket?token=" + token);
  // 在開啟連線時執行
  ws.onopen = () => console.log("[open connection]");
  ws.onmessage = (event) => {
    console.log("收到服務器消息:", event.data);
  };
  ws.addEventListener("close", function () {
    console.log("連結關閉，咱們下次見~");
  });
  return ws;
}

export default connect;
