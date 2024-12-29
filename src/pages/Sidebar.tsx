import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useFriendList from "../hook/useFriendList";
import useProfilePicture from "../hook/useProfilePicture";
import useUserTokenCookie from "../hook/useUserTokenCookie";
import { userInfo } from "../datatype/User";
import UserContext from "../store/user-context.ts";
import { showToast } from "../utils/showtoast";
import Profile_header from "../assets/profile_photo.png";
import useUserInfoCookie from "../hook/useUserInfoCookie";
import getFriendList from "../api/getFriendList";
import { error } from "console";
import JWTdecoder from "../utils/JWTdecoder";
import refresh from "../api/refresh";

function Sidebar() {
  // Navigation
  const navigate = useNavigate();
  const location = useLocation();
  const { refreshAccessCookie, deleteCookies, accessToken, refreshToken, ID } =
    useUserInfoCookie();
  const { data: userFriends, status, error } = useFriendList();
  // Get user info from user context
  const { userInfo } = useContext(UserContext);
  // User profile image
  const {
    data: profileImageUrl,
    error,
    isLoading,
  } = useProfilePicture(userInfo.userId);
  // Show message/friendlist section
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  // Controll buttom line for active button state
  const [activeButton, setActiveButton] = useState("matching");
  const isMatchPage = location.pathname === "/Match";
  const isChatroomPage = location.pathname.includes("/Chat");

  useEffect(() => {
    if (isChatroomPage) {
       setIsMessageVisible(true);
      setActiveButton("message");
    }
  }, [isChatroomPage]);

  useEffect(() => {
    if (status === "error") {
      checkValid();
    }
  }, [status]);

  async function checkValid() {
    if (JWTdecoder(accessToken).exp < Math.floor(new Date().getTime() / 1000)) {
      const newToken = await refresh(ID, refreshToken);
      refreshAccessCookie(newToken);
    }
  }

  const handleButtonBottomLines = (buttonName: string) => {
    setActiveButton(buttonName);
  };


  const slideToMessage = () => {
    setIsMessageVisible(true);
  };

  const slideToMatching = () => {
    setIsMessageVisible(false);
  };

  function logout() {
    deleteCookies();
    navigate("/");
    showToast("success", "登出");
  }

  return (
    <div className="flex flex-col w-[350px]">
      {/* Profile/Editting Section */}
      <div className="flex p-2 border-b w-full min-h-20">
        <button
          className="flex w-3/5 p-2 justify-center items-center hover:-translate-y-0.5 hover:bg-slate-200 rounded-md"
          onClick={() => {
            navigate("/Profile");
          }}
        >
          <div className="relative w-10 left-2 flex items-center justify-center overflow-hidden rounded-full">
            <img src={profileImageUrl} alt="Profile" />
          </div>
          <div className="relative left-2 w-4/5">
            <p className="text-xl">{userInfo.userProfile.nickname}</p>
          </div>
        </button>
      </div>

      {/* Button Section */}
      <div className="flex border-b w-full h-16 gap-2">
        <button
          type="button"
          onClick={() => {
            slideToMatching();
            handleButtonBottomLines("matching");
          }}
          className={`ml-4 text-lg underline-button ${
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
          className={`ml-4 text-lg underline-button ${
            activeButton === "message" ? "active" : ""
          } hover:-translate-y-0.5 rounded-md`}
        >
          訊息
        </button>
      </div>

      {/* Matching/Message Section */}
      <div className="relative overflow-hidden border-b w-full h-full">
        {/* Matching Section */}
        <div className="absolute flex flex-col w-full h-full justify-center items-center">
          <button
            className="text-font text-2xl p-4 rounded-lg mb-2 hover:-translate-y-1 hover:bg-slate-200"
            onClick={() => {
              navigate("/Match");
            }}
          >
            matching!
          </button>
          <p>點擊配對開始尋找你今天的好飯友！</p>
        </div>

        {/* Message Section */}
        <div
          className="flex relative bg-white w-full h-full z-5 transition-all duration-200"
          style={{ right: isMessageVisible ? "0" : "-350px" }} // Use inline style for sliding from the right
        >
          {/* Content of the sliding div */}
          {isMessageVisible && (
            <div className="relative w-full h-full bg-shiro shadow-inner shadow-lg overflow-x-hidden overflow-y-scroll no-scrollbar">
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
