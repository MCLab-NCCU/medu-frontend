import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userInfo } from "../datatype/User";
import UserContext from "../store/user-context.ts";
import { IoBuild, IoChevronBack } from "react-icons/io5";
import Logo from "../assets/logos/logo-pre.png";

function UserProfile() {
  const navigate = useNavigate();

  // Get user info from user context
  const { userInfo } = useContext(UserContext);

  return (
    <div className="flex flex-grow min-h-0">
      {/* Account Settings */}
      <div className="flex flex-col w-[350px]">
        <div className="flex items-center w-full min-h-20">
          <button
            className="relative left-8 hover:-translate-y-0.5 hover:bg-slate-200"
            onClick={() => navigate("/Match")}
          >
            <img
              src={Logo}
              alt="返回"
              className="w-auto h-12 pop-logo-animation"
            />
          </button>
        </div>
        <p className="relative left-2 p-2 mt-4 mb-2 text-font text-lg font-bold">
          用戶設定
        </p>
        {/* Nickname Setting */}
        <div className="group flex items-center w-full h-16 p-2 border-t border-b">
          <div className="grow-0 relative left-2 m-0.5">
            <p className="text-font font-bold">暱稱</p>
          </div>
          <div className="flex grow justify-end h-full m-0.5">
            <div className="flex items-center w-1/3 h-full overflow-hidden">
              <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                {userInfo.userProfile.nickname}
              </p>
            </div>
            <div className="invisible flex h-full items-center group-hover:visible">
              <IoChevronBack style={{ fontSize: "2rem" }} />
            </div>
          </div>
        </div>
        {/* Password Setting */}
        <div className="group flex items-center w-full h-16 p-2 border-b">
          <div className="grow-0 relative left-2 m-0.5">
            <p className="text-font font-bold">密碼</p>
          </div>
          <div className="flex grow justify-end h-full m-0.5">
            <div className="flex items-center w-1/3 h-full overflow-hidden">
              <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                *********
              </p>
            </div>
            <div className="invisible flex h-full items-center group-hover:visible">
              <IoChevronBack style={{ fontSize: "2rem" }} />
            </div>
          </div>
        </div>
        {/* Location Setting */}
        <div className="group flex items-center w-full h-16 p-2 border-b">
          <div className="grow-0 relative left-2 m-0.5">
            <p className="text-font font-bold">位置</p>
          </div>
          <div className="flex grow justify-end h-full m-0.5">
            <select
              id="gender"
              name="gender"
              className="block w-1/2 rounded-md text-sm border focus:border-blue-400 focus:outline-none"
              required
            >
              <option value="">選擇位置</option>
              <option value="male">你從</option>
              <option value="female">桃園</option>
              <option value="other">新竹</option>
            </select>
          </div>
        </div>
      </div>

      {/* Profile Picture/Bio Editting */}
      <div className="flex flex-col justify-center items-center border-l grow">
        <div className="flex flex-col w-1/2 h-4/5 border overflow-scroll">
          {/* Display Nickname and Gender */}
          <div className="max-w-full min-h-16 p-2 border m-2"></div>
          {/* Profile Picture */}
          <div className="relative flex max-w-full min-h-80 border m-2">
            <div className="absolute w-12 h-12 bottom-2 right-2 rounded-full">
              <IoBuild style={{ fontSize: "2rem" }} />
            </div>
          </div>
          {/* Bio */}
          <div className="flex max-w-full min-h-40 border m-2"></div>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;
