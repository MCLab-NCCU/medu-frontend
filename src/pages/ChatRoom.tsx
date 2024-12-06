import { HiOutlinePaperAirplane } from "react-icons/hi2";

function ChatRoom() {
  return (
    <div className="h-screen">
      <div className="flex  rounded-md p-2 my-auto h-[16%] border-gray-400 border-b-2">
        <div className="rounded-full w-[8%] m-auto">
          <img src="src\assets\profile_photo.png" />
        </div>
        <div className="w-[85%] text-5xl px-10 my-auto">姓名</div>
        <div className=""></div>
      </div>

      <div className="mx-5 grid justify-items-start bg-[#fefefe] h-[74%] overflow-y-scroll no-scrollbar">
        <div className="justify-self-end w-auto bg-[#ffdeaa] text-4xl m-3 border-2 rounded-full p-4">
          我是本人
        </div>
        <div className="bg-[#bf8e68] w-auto text-4xl m-3 border-2 rounded-full p-4">
          我是聊天對象
        </div>
        <div className="justify-self-end w-auto bg-[#ffdeaa] text-4xl m-3 border-2 rounded-full p-4">
          我是本人
        </div>
        <div className="bg-[#bf8e68] w-auto text-4xl m-3 border-2 rounded-full p-4">
          我是聊天對象
        </div>
        <div className="justify-self-end w-auto bg-[#ffdeaa] text-4xl m-3 border-2 rounded-full p-4">
          我是本人
        </div>
        <div className="bg-[#bf8e68] w-auto text-4xl m-3 border-2 rounded-full p-4">
          我是聊天對象
        </div>
        <div className="justify-self-end w-auto bg-[#ffdeaa] text-4xl m-3 border-2 rounded-full p-4">
          我是本人
        </div>
        <div className="bg-[#bf8e68] w-auto text-4xl m-3 border-2 rounded-full p-4">
          我是聊天對象
        </div>
        <div className="justify-self-end w-auto bg-[#ffdeaa] text-4xl m-3 border-2 rounded-full p-4">
          我是本人
        </div>
        <div className="bg-[#bf8e68] w-auto text-4xl m-3 border-2 rounded-full p-4">
          我是聊天對象
        </div>
        <div className="justify-self-end w-auto bg-[#ffdeaa] text-4xl m-3 border-2 rounded-full p-4">
          我是本人
        </div>
        <div className="bg-[#bf8e68] w-auto text-4xl m-3 border-2 rounded-full p-4">
          我是聊天對象
        </div>
        <div className="justify-self-end w-auto bg-[#ffdeaa] text-4xl m-3 border-2 rounded-full p-4">
          我是本人
        </div>
        <div className="bg-[#bf8e68] w-auto text-4xl m-3 border-2 rounded-full p-4">
          我是聊天對象
        </div>
        <div className="justify-self-end w-auto bg-[#ffdeaa] text-4xl m-3 border-2 rounded-full p-4">
          我是本人
        </div>
        <div className="bg-[#bf8e68] w-auto text-4xl m-3 border-2 rounded-full p-4">
          我是聊天對象
        </div>
        <div className="justify-self-end w-auto bg-[#ffdeaa] text-4xl m-3 border-2 rounded-full p-4">
          我是本人
        </div>
        <div className="bg-[#bf8e68] w-auto text-4xl m-3 border-2 rounded-full p-4">
          我是聊天對象
        </div>
        <div className="justify-self-end w-auto bg-[#ffdeaa] text-4xl m-3 border-2 rounded-full p-4">
          我是本人
        </div>
        <div className="bg-[#bf8e68] w-auto text-4xl m-3 border-2 rounded-full p-4">
          我是聊天對象
        </div>
        <div className="justify-self-end w-auto bg-[#ffdeaa] text-4xl m-3 border-2 rounded-full p-4">
          我是本人
        </div>
        <div className="bg-[#bf8e68] w-auto text-4xl m-3 border-2 rounded-full p-4">
          我是聊天對象
        </div>
        <div className="justify-self-end w-auto bg-[#ffdeaa] text-4xl m-3 border-2 rounded-full p-4">
          我是本人
        </div>
        <div className="bg-[#bf8e68] w-auto text-4xl m-3 border-2 rounded-full p-4">
          我是聊天對象
        </div>
        <div className="justify-self-end w-auto bg-[#ffdeaa] text-4xl m-3 border-2 rounded-full p-4">
          我是本人
        </div>
        <div className="bg-[#bf8e68] w-auto text-4xl m-3 border-2 rounded-full p-4">
          我是聊天對象
        </div>
        <div className="justify-self-end w-auto bg-[#ffdeaa] text-4xl m-3 border-2 rounded-full p-4">
          我是本人
        </div>
        <div className="bg-[#bf8e68] w-auto text-4xl m-3 border-2 rounded-full p-4">
          我是聊天對象
        </div>
      </div>

      <div className="bg-gray-50 rounded-md p-4 my-auto w-full flex absolute bottom-0">
        <div className="w-full m-auto flex">
          <input
            type="text"
            placeholder="輸入訊息..."
            className="bg-[#fefefe] rounded-full h-16 w-[90%] text-3xl px-3 block"
          />
          <HiOutlinePaperAirplane className="text-6xl w-[10%] text-left" />
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
