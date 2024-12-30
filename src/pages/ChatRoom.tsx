import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import useMessageHistory from "../hook/useMessageHistory";
import useNickname from "../hook/useNickname";
import { useEffect, useRef, useState } from "react";
import { useWebSocketStore } from "../store/useWebsocket";
import Sidebar from "./Sidebar";
import refresh from "../api/refresh";
import JWTdecoder from "../utils/JWTdecoder";
import useUserInfoCookie from "../hook/useUserInfoCookie";
import useProfilePicture from "../hook/useProfilePicture";

type content = {
  id: string;
  sender: string;
  content: string;
};

function ChatRoom() {
  const [searchParams] = useSearchParams();
  const target = searchParams.get("friendID");
  const {
    data: historyMessages,
    status: historyMessagesStatus,
    refetch,
  } = useMessageHistory(target!);
  const { data: picture } = useProfilePicture(target!);

  const { data: nickname, status: nicknameStatus } = useNickname(target!);
  const [sendContent, setSendContent] = useState<content[]>([]);
  const chatroomRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);
  const ws = useWebSocketStore().socket;
  const connect = useWebSocketStore((state) => state.connect);
  const { refreshAccessCookie, accessToken, refreshToken, ID } =
    useUserInfoCookie();

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);
        console.log("收到服務器消息:", data);

        // 確保消息來自當前聊天對象
        if (data.fromUserId === target) {
          setSendContent((prev) => [
            {
              id: new Date().toISOString(),
              sender: data.fromUserId,
              content: data.message,
            },
            ...prev,
          ]);
        }
      } catch (err) {
        console.error("無法解析服務器消息:", event.data, err);
      }
    };

    ws!.addEventListener("message", handleMessage);

    return () => {
      ws!.removeEventListener("message", handleMessage);
    };
  }, [ws, target]);

  useEffect(() => {
    refetch();
    checkValid();
    return () => {
      setSendContent([]);
    };
  }, [target]);

  useEffect(() => {
    if (chatroomRef.current) {
      chatroomRef.current.scrollTop = chatroomRef.current.scrollHeight;
    }
  }, [sendContent, historyMessages]);

  useEffect(() => {
    if (historyMessagesStatus === "error") {
      checkValid();
    }
  }, [historyMessagesStatus]);

  async function checkValid() {
    if (JWTdecoder(accessToken).exp < Math.floor(new Date().getTime() / 1000)) {
      const newToken = await refresh(ID, refreshToken);
      refreshAccessCookie(newToken);
      refetch();
      ws.close();
      connect(import.meta.env.VITE_WEBSOCKET_URL + newToken.accessToken);
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (contentRef.current?.value.trim()) {
      const value = contentRef.current.value.trim();
      ws!.send(
        JSON.stringify({
          message: value,
          targetUserId: target,
        })
      );
      setSendContent((prev) => [
        { id: new Date().toISOString(), sender: "me", content: value },
        ...prev,
      ]);
      contentRef.current.value = "";
    }
  };

  if (historyMessagesStatus === "pending" || nicknameStatus === "pending") {
    return <div>loading...</div>;
  }

  if (target === null) {
    return (
      <div className="text-center text-5xl h-[94vh] m-auto w-1/2 content-center">
        選擇聊天對象
      </div>
    );
  }

  return (
    <div className="flex h-[90vh] ">
      <Sidebar />
      <div className="flex flex-col  grow rounded-md relative ">
        {/* Message Target Info Section */}
        <div className="flex p-2 border w-full min-h-24 m-0.5">
          <div className="rounded-full w-[8%] m-auto">
            <img
              src={picture}
              alt="Profile"
              className="w-20 h-20 flex items-center justify-center overflow-hidden rounded-full"
            />
          </div>
          <div className="w-[85%] text-5xl px-10 my-auto">
            {nickname?.nickname}
          </div>
        </div>

        {/* Chatbox Section */}
        <div
          className="w-full h-4/5 overflow-y-scroll no-scrollbar m-0.5"
          ref={chatroomRef}
        >
          <div className="flex space-y-2 flex-col-reverse">
            {historyMessages?.messageHistory.map((message) => (
              <div
                key={message._id}
                className={`flex ${
                  message.fromUserId === target
                    ? "justify-start"
                    : "justify-end"
                } m-2`}
              >
                <div
                  className={`${
                    message.fromUserId === target
                      ? "bg-[#bf8e68]"
                      : "bg-[#ffdeaa]"
                  } text-4xl text-black p-4 rounded-full max-w-5xl`}
                >
                  {message.message}
                </div>
              </div>
            ))}
          </div>
          <div className="flex space-y-2 flex-col-reverse">
            {sendContent?.map((content) => (
              <div
                key={content.id}
                className={`flex ${
                  content.sender === target ? "justify-start" : "justify-end"
                } m-2`}
              >
                <div
                  className={`${
                    content.sender === target ? "bg-[#bf8e68]" : "bg-[#ffdeaa]"
                  } text-4xl text-black p-4 rounded-full max-w-5xl`}
                >
                  {content.content}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Message Input Section */}
        <div className="flex p-2 w-full min-h-12 m-0.5 absolute bottom-0 bg-white">
          <input
            type="text"
            placeholder="輸入訊息..."
            className="bg-[#fefefe] rounded-full h-16 w-[90%] text-3xl px-3 block"
            ref={contentRef}
            onKeyDown={handleKeyDown}
          />
          <HiOutlinePaperAirplane
            className="text-6xl w-[10%] text-left cursor-pointer"
            onClick={sendMessage}
          />
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;

// <div className="h-[94vh]">
//   <div className="flex rounded-md p-2 my-auto h-[15%] border-gray-400 border-b-2">
//     <div className="rounded-full w-[8%] m-auto">
//       <img src={Profile_header} alt="Profile" />
//     </div>
//     <div className="w-[85%] text-5xl px-10 my-auto">
//       {nickname?.nickname}
//     </div>
//   </div>

//   <div className="flex-1 overflow-y-scroll h-[74%] p-4" ref={chatroomRef}>
// <div className="flex space-y-2 flex-col-reverse">
//   {messages?.messageHistory.map((message) => (
//     <div
//       key={message._id}
//       className={`flex ${
//         message.fromUserId === target ? "justify-start" : "justify-end"
//       } m-2`}
//     >
//       <div
//         className={`${
//           message.fromUserId === target
//             ? "bg-[#bf8e68]"
//             : "bg-[#ffdeaa]"
//         } text-4xl text-black p-4 rounded-full max-w-5xl`}
//       >
//         {message.message}
//       </div>
//     </div>
//   ))}
// </div>
// <div className="flex space-y-2 flex-col-reverse">
//   {sendcontent?.map((message) => (
//     <div
//       key={message.id}
//       className={`flex ${
//         message.sender === target ? "justify-start" : "justify-end"
//       } m-2`}
//     >
//       <div
//         className={`${
//           message.sender === target ? "bg-[#bf8e68]" : "bg-[#ffdeaa]"
//         } text-4xl text-black p-4 rounded-full max-w-5xl`}
//       >
//         {message.content}
//       </div>
//     </div>
//   ))}
// </div>
//   </div>

//   <div className="bg-gray-50 rounded-md p-4 my-auto w-full flex absolute bottom-0">
//     <div className="w-full m-auto flex">
// <input
//   type="text"
//   placeholder="輸入訊息..."
//   className="bg-[#fefefe] rounded-full h-16 w-[90%] text-3xl px-3 block"
//   ref={contentRef}
// />
// <HiOutlinePaperAirplane
//   className="text-6xl w-[10%] text-left cursor-pointer"
//   onClick={sendMessage}
// />
//     </div>
//   </div>
// </div>;
