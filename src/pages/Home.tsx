import connect from "../api/websocket";
import useUserTokenCookie from "../hook/useUserTokenCookie";
import ChatRoom from "./ChatRoom";
import Navbar from "./Navbar";
import useFriendList from "../hook/useFriendList";
import { useNavigate } from "react-router-dom";

function Home() {
  const { tokenCookie } = useUserTokenCookie();
  const ws = connect(tokenCookie!);
  const { data } = useFriendList();
  const navigate = useNavigate();

  return (
    <div className="flex">
      <div className="w-1/4 border-black rounded-lg">
        <div className="h-[15%]">
          <Navbar />
        </div>
        <div className="border-black border-2"></div>
        <div className="mt-5 h-[80%] ">
          <div>
            {data?.friendList.map((friend) => (
              <div
                key={friend.friendId}
                className="flex grid-cols-2 my-2 cursor-pointer hover:bg-slate-300"
                onClick={() => {
                  navigate("?friendID=" + friend.friendId);
                }}
              >
                <div className="w-20 border-2 rounded-full m-auto">
                  <img src="src/assets/profile_photo.png" alt="Profile" />
                </div>
                <div className="w-3/4 grid-rows-2 text-3xl p-2">
                  <div className="text-3xl">{friend.friendNickname}</div>
                  <div className="text-lg text-gray-400">
                    {friend.friendLatestMessage.message}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-3/4 bg-[#fefefe] rounded-lg border-black border-2 relative h-fit">
        <ChatRoom websocket={ws} />
      </div>
    </div>
  );
}
export default Home;
