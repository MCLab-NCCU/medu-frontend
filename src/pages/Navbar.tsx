import { IoSettingsOutline } from "react-icons/io5";
function Navbar() {
  return (
    <div className="grid grid-raws-4 text-center">
      <div className="flex grid-cols-3 h-[7.5rem] ">
        <div className="w-1/4 m-auto">
          <div className="border-[0.125rem] rounded-full m-auto">
            <img src="src\assets\profile_photo.png"></img>
          </div>
        </div>
        <div className="w-1/2 m-auto text-[3rem]">姓名</div>
        <IoSettingsOutline className="w-1/4 m-auto text-5xl" />
      </div>
      <div className=" border-white border-[0.25rem] h-0"></div>
      <div className="flex grid-cols-2 h-24 text-3xl">
        <div className="w-1/2 m-auto  ">交友邀請</div>
        <div className="w-1/2 m-auto">訊息</div>
      </div>
      <div className=" border-black border-[0.125rem] h-0"></div>
    </div>
  );
}

export default Navbar;
