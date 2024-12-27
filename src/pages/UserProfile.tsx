import { useNavigate } from "react-router-dom";
import { IoBuild, IoChevronBack } from "react-icons/io5";
import Logo from "../assets/logos/logo-pre.png";

function UserProfile() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-grow min-h-0 p-2 gap-2 border-4 border-black m-2">
      {/* Account Settings */}
      <div className="flex flex-col border w-[350px] rounded-md p-2">
        <div className="flex items-center p-2 border w-full min-h-20 m-0.5">
          <button
            className="hover:-translate-y-0.5 hover:bg-slate-200"
            onClick={() => navigate("/Match")}
          >
            <img
              src={Logo}
              alt="返回"
              className="relative w-auto h-12 left-2"
            />
          </button>
        </div>
        <p className="p-2 mt-4 text-font font-bold">用戶設定</p>
        {/* Nickname Setting */}
        <div className="group flex items-center w-full h-16 p-2 border m-0.5">
          <div className="grow-0 m-0.5">
            <p className="text-font font-bold">暱稱</p>
          </div>
          <div className="flex grow justify-end h-full m-0.5">
            <div className="flex items-center w-1/3 h-full overflow-hidden">
              <p>yezyez</p>
            </div>
            <div className="invisible flex h-full items-center group-hover:visible">
              <IoChevronBack style={{ fontSize: "2rem" }} />
            </div>
          </div>
        </div>
        {/* Password Setting */}
        <div className="group flex items-center w-full h-16 p-2 border m-0.5">
          <div className="grow-0 m-0.5">
            <p className="text-font font-bold">密碼</p>
          </div>
          <div className="flex grow justify-end h-full m-0.5">
            <div className="flex items-center w-1/3 h-full overflow-hidden">
              <p>yeeeeezz</p>
            </div>
            <div className="invisible flex h-full items-center group-hover:visible">
              <IoChevronBack style={{ fontSize: "2rem" }} />
            </div>
          </div>
        </div>
        {/* Location Setting */}
        <div className="group flex items-center w-full h-16 p-2 border m-0.5">
          <div className="grow-0 m-0.5">
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
      <div className="flex flex-col justify-center items-center border grow">
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
