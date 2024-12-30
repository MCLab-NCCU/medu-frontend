import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { userInfo } from "../datatype/User";
import UserContext from "../store/user-context.ts";
import { IoBuild, IoChevronBack } from "react-icons/io5";
import Logo from "../assets/logos/logo-pre.png";

function UserProfile() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-grow min-h-0">
      {/* Account Settings */}
      <div className="flex flex-col w-1/4">
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
        <div
          className="group flex items-center w-full h-16 p-2 border-t border-b cursor-pointer"
          onClick={() => navigate("UserSetting")}
        >
          更改資料
        </div>
        {/* Password Setting */}
        <div
          className="group flex items-center w-full h-16 p-2 border-b cursor-pointer"
          onClick={() => navigate("ChangePassword")}
        >
          更改密碼
        </div>
      </div>

      <div className="w-3/4 p-10">
        <Outlet />
      </div>
    </div>
  );
}
export default UserProfile;
