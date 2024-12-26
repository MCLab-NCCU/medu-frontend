import React, { useEffect, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";
import useFriendList from "../hook/useFriendList";
import useUserTokenCookie from "../hook/useUserTokenCookie";
import { showToast } from "../utils/showtoast";
import Profile_header from "../assets/profile_photo.png";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { data: userFriends } = useFriendList();
  const { deleteUserTokenCookie } = useUserTokenCookie();
  const [isVisible, setIsVisible] = useState(false);
  const [activeButton, setActiveButton] = useState("matching");

  const isMatchPage = location.pathname === "/Match";
  const isChatroomPage = location.pathname.includes("/Chat");

  useEffect(() => {
    if (isChatroomPage) {
      setIsVisible(true);
    }
  }, [isChatroomPage]);

  const handleButtonBottomLines = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const slideToMessage = () => {
    setIsVisible(true);
  };

  const slideToMatching = () => {
    setIsVisible(false);
  };

  function logout() {
    deleteUserTokenCookie();
    navigate("/");
    showToast("success", "登出");
  }

  return (
    <div className="flex flex-col border w-[350px] rounded-md p-2">
      {/* Profile/Editting Section */}
      <div className="flex p-2 items-center border w-full min-h-20 m-0.5">
        <div className="w-10 border rounded-full m-auto">
          <img src={Profile_header} alt="Profile" />
        </div>
        <div className="relative w-4/5">
          <p className="text-xl">Nickname</p>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex p-2 border w-full h-16 gap-4 m-0.5">
        <button
          type="button"
          onClick={() => {
            slideToMatching();
            handleButtonBottomLines("matching");
          }}
          className={`text-lg underline-button ${
            activeButton === "matching" ? "active" : ""
          } hover:-translate-y-0.5 rounded-md`}
        >
          新飯友
        </button>
        <button
          type="button"
          onClick={() => {
            slideToMessage();
            handleButtonBottomLines("message");
          }}
          className={`text-lg underline-button ${
            activeButton === "message" ? "active" : ""
          } hover:-translate-y-0.5 rounded-md`}
        >
          訊息
        </button>
      </div>

      {/* Matching/Message Section */}
      <div className="relative overflow-hidden border w-full h-full m-0.5">
        {/* Matching Section */}
        <div className="absolute flex w-full h-full justify-center items-center">
          <button
            className="text-font text-2xl p-4 rounded-full hover:-translate-y-1 hover:bg-slate-200"
            onClick={() => {
              navigate("/Match");
            }}
          >
            matching!
          </button>
        </div>

        {/* Message Section */}
        <div
          className="flex relative bg-white w-full h-full z-5 transition-all duration-200"
          style={{ right: isVisible ? "0" : "-350px" }} // Use inline style for sliding from the right
        >
          {/* Content of the sliding div */}
          {isVisible && (
            <div className="w-full h-full bg-shiro overflow-x-hidden overflow-y-scroll no-scrollbar m-0.5">
              <div className="flex flex-col p-2 gap-0.5 border w-full">
                {userFriends?.friendList.map((friend) => (
                  <div
                    key={friend.friendId}
                    className="flex w-full h-[60px] rounded-3xl items-center cursor-pointer hover:translate-x-0.5 hover:bg-slate-200"
                    onClick={() => {
                      if (isMatchPage) {
                        navigate("/Chat/?friendID=" + friend.friendId);
                      }
                      if (isChatroomPage) {
                        navigate("?friendID=" + friend.friendId);
                      }
                    }}
                  >
                    <div className="w-10 border-2 rounded-full m-auto">
                      <img src={Profile_header} alt="Profile" />
                    </div>
                    <div className="relative w-4/5">
                      <p className="text-2xl">{friend.friendNickname}</p>
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

export default Sidebar;

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
