import { HiOutlinePaperAirplane } from "react-icons/hi2";
function ChatRoom() {
  return (
    <div className="h-screen">
      <div className="flex bg-[#6cb1c9] rounded-md p-2 my-auto md:h-[15%] h-[10%]">
        <div className="rounded-full w-[15%] m-auto">
          <img src="src\assets\profile_photo.png" />
        </div>
        <div className="w-[85%] text-7xl px-10 my-auto">姓名</div>
      </div>

      <div className="grid justify-items-start bg-[#fefefe] md:h-[72%] h-[88%] overflow-y-scroll no-scrollbar">
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

      <div className="bg-[#6cb1c9] rounded-md p-4 my-auto w-full flex absolute bottom-0">
        <input
          type="text"
          placeholder="輸入訊息..."
          className="bg-[#fefefe] rounded-full h-16 w-3/4 text-3xl pl-3 mx-auto block"
        />
        <HiOutlinePaperAirplane className="text-6xl xl:mr-[8rem]" />
      </div>
    </div>
  );
}

export default ChatRoom;
