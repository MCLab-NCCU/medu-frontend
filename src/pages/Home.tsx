import ChatRoom from "./ChatRoom";
import Navbar from "./Navbar";
import useFriendList from "../hook/useFriendList";
import { useNavigate } from "react-router-dom";
import Profile_header from "../assets/profile_photo.png";
import FriendList from "./FriendList";

function Home() {
  const navigate = useNavigate();

  //ws.onmessage()

  return (
    <div className="flex h-[94vh]">
      <div className="w-1/4 border-black rounded-lg">
        <div className="h-[15%]">
          <Navbar />
        </div>
<<<<<<< HEAD
        <div className="border-black border-2"></div>
        <div className="mt-5 h-[80%] ">
          <FriendList />
        </div>
      </div>

      <div className="w-3/4 bg-[#fefefe] rounded-lg border-black border-2 relative h-fit">
        <ChatRoom />
=======
>>>>>>> b42f2b91ca2cd14f3b83ceec41f2158d5a0e5cbf
      </div>
    </div>
  );
}
export default Home;
