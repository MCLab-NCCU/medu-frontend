import ChatRoom from "./ChatRoom";
import Sidebar from "./Sidebar";
import MatchPage from "./MatchPage";
import FriendList from "./FriendList";

function Home() {
  return (
    <div className="flex flex-col border-2 justify-end max-w-screen min-h-screen">
      <div className="relative bottom-4 flex w-full h-[90vh]">
        <div className="flex p-2 gap-2 border-4 border-black grow min-h-full m-2">
          <Sidebar />
          <MatchPage />
        </div>

        <div className="border-black border-2"></div>
        <div className="mt-5 h-[80%] ">
          <FriendList />
        </div>
      </div>

      <div className="w-3/4 bg-[#fefefe] rounded-lg border-black border-2 relative h-fit">
        <ChatRoom />
      </div>
    </div>
  );
}
export default Home;

// <div className="relative flex inset-0 top-12 border m-4 max-w-screen h-[92vh] overflow-hidden">
//   <div className="flex h-full">
//     <div className="w-1/4 border m-4 border-black rounded-lg">
//       <div className="h-[15%]">
//         <Navbar />
//       </div>
//       <div className="border-black border-2"></div>
//       <div className="mt-5 h-[80%] ">
//         <div>
//           {data?.friendList.map((friend) => (
//             <div
//               key={friend.friendId}
//               className="flex grid-cols-2 my-2 cursor-pointer hover:bg-slate-300"
//               onClick={() => {
//                 navigate("?friendID=" + friend.friendId);
//               }}
//             >
//               <div className="w-20 border-2 rounded-full m-auto">
//                 <img src={Profile_header} alt="Profile" />
//               </div>
//               <div className="w-3/4 grid-rows-2 text-3xl p-2">
//                 <div className="text-3xl">{friend.friendNickname}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>

//     <div className="w-3/4 bg-[#fefefe] rounded-lg border-black border-2 relative h-fit">
//       <ChatRoom />
//     </div>
//   </div>
// </div>;
