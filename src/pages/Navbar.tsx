import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import useFriendList from "../hook/useFriendList";
import useUserTokenCookie from "../hook/useUserTokenCookie";
import { showToast } from "../utils/showtoast";
import Profile_header from "../assets/profile_photo.png";

function Navbar() {
  const navigate = useNavigate();
  const { data } = useFriendList();
  const { deleteUserTokenCookie } = useUserTokenCookie();
  const [isVisible, setIsVisible] = useState(false);

  const slideToMessage = () => {
    setIsVisible(true);
  };

  const slideToMatching = () => {
    setIsVisible(false);
  };

  function toMatch() {
    navigate("/Match");
  }
  function toChatroom() {
    navigate("/Home");
  }
  function logout() {
    deleteUserTokenCookie();
    navigate("/");
    showToast("success", "登出");
  }
  return (
    <div className="flex flex-col border w-[350px] rounded-md p-2">
      <div className="flex p-2 border w-full min-h-20 m-0.5"></div>
      <div className="flex p-2 border w-full h-12 gap-4 m-0.5">
        <button
          type="button"
          onClick={slideToMatching}
          className="bg-sky-500 hover:bg-sky-700 rounded-md"
        >
          新飯友
        </button>
        <button
          type="button"
          onClick={slideToMessage}
          className="bg-sky-500 hover:bg-sky-700 rounded-md"
        >
          訊息
        </button>
      </div>
      <div className="relative overflow-hidden border w-full h-full m-0.5">
        <div
          className="flex absolute w-full h-full z-5 transition-all duration-200"
          style={{ right: isVisible ? "0" : "-350px" }} // Use inline style for sliding from the right
        >
          {/* Content of the sliding div */}
          {isVisible && (
            <div className="w-full overflow-x-hidden overflow-y-scroll no-scrollbar m-0.5">
              <div className="flex flex-col p-2 border w-full h-[1500px]">
                {data?.friendList.map((friend) => (
                  <div
                    key={friend.friendId}
                    className="flex w-full h-[50px] cursor-pointer hover:bg-slate-300"
                    onClick={() => {
                      navigate("?friendID=" + friend.friendId);
                    }}
                  >
                    <div className="w-10 border-2 rounded-full m-auto">
                      <img src={Profile_header} alt="Profile" />
                    </div>
                    <div className="w-3/4 grid-rows-2 text-3xl p-2">
                      <div className="text-2xl">{friend.friendNickname}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

// <div className="grid grid-raws-4 text-center h-full">
//   <div className="flex grid-cols-3 h-4/5">
//     <div className="w-[13%] m-auto">
//       <div className="border-[0.125rem] rounded-full m-auto">
//         <img src={Profile_header}></img>
//       </div>
//     </div>
//     <div className="w-1/2 m-auto text-[2.5rem]">姓名</div>
//     <IoSettingsOutline className="w-1/4 m-auto text-5xl" />
//     <IoIosLogOut className=" my-auto text-5xl" onClick={logout} />
//   </div>
//   <div className="mt-4 flex grid-cols-2 text-xl h-1/5 ">
//     <button className="w-1/2 m-auto">配對</button>
//     <button className="w-1/2 m-auto" onClick={toChatroom}>
//       訊息
//     </button>
//   </div>
// </div>;
