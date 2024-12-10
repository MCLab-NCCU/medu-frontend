import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import useUserTokenCookie from "../hook/useUserTokenCookie";
import { showToast } from "../utils/showtoast";
import Profile_header from "../assets/profile_photo.png"
function Navbar() {
  const navigate = useNavigate();
  const { deleteUserTokenCookie } = useUserTokenCookie();
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
    <div className="grid grid-raws-4 text-center h-full">
      <div className="flex grid-cols-3 h-4/5">
        <div className="w-[13%] m-auto">
          <div className="border-[0.125rem] rounded-full m-auto">
            <img src={Profile_header}></img>
          </div>
        </div>
        <div className="w-1/2 m-auto text-[2.5rem]">姓名</div>
        <IoSettingsOutline className="w-1/4 m-auto text-5xl" />
        <IoIosLogOut className=" my-auto text-5xl" onClick={logout} />
      </div>
      <div className="mt-4 flex grid-cols-2 text-xl h-1/5 ">
        <button className="w-1/2 m-auto">配對</button>
        <button className="w-1/2 m-auto" onClick={toChatroom}>
          訊息
        </button>
      </div>
    </div>
  );
}

export default Navbar;
