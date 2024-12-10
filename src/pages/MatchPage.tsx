import FriendList from "./FriendList";
import Match from "./Match";
import Navbar from "./Navbar";

function MatchPage() {
  return (
    <div className="flex">
      <div className="w-1/4 border-black rounded-lg">
        <div className="h-[15%]">
          <Navbar />
        </div>
        <div className="border-black border-2"></div>
        <div className="mt-5 h-[80%] ">
          <FriendList />
        </div>
      </div>

      <div className="w-3/4 bg-[#fefefe] rounded-lg m-2 border-black border-2 h-[93vh]">
        <Match />
      </div>
    </div>
  );
}

export default MatchPage;
