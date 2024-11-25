import ChatRoom from "./ChatRoom";
import FriendList from "./FriendList";
import Navbar from "./Navbar";

function MainPage() {
  return (
    <div className="flex h-screen">
      <div className="w-1/4 border-black bg-[#6cb1c9] rounded-lg  m-2">
        <Navbar />
        <FriendList />
      </div>
      <div className="w-3/4 bg-[#fefefe] rounded-lg m-2 border-black border-2 relative">
        <ChatRoom />
      </div>
    </div>
  );
}
export default MainPage;
