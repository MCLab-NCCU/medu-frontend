import ChatRoom from "./ChatRoom";
import FriendList from "./FriendList";
import Match from "./Match";
import Navbar from "./Navbar";

function Home() {
  /*<div className="w-3/4 bg-[#fefefe] rounded-lg m-2 border-black border-2">
        <Match />
      </div>
      <div className="w-3/4 bg-[#fefefe] rounded-lg m-2 border-black border-2 relative">
        <ChatRoom />
      </div>
      
      */

  return (
    <div className="flex h-screen">
      <div className="w-1/4 border-black rounded-lg mt-4">
        <div className="h-[15%]">
          <Navbar />
        </div>
        <div className="border-black border-2"></div>
        <div className="mt-5 h-[80%] ">
          <FriendList />
        </div>
      </div>

      <div className="w-3/4 bg-[#fefefe] rounded-lg m-2 border-black border-2 relative">
        <ChatRoom />
      </div>
    </div>
  );
}
export default Home;
