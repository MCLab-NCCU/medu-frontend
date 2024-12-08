import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  function toMatch() {
    navigate("/Match");
  }
  function toChatroom() {
    navigate("/Home");
  }
  return (
    <div className="grid grid-raws-4 text-center h-full">
      <div className="flex grid-cols-3 h-4/5">
        <div className="w-[13%] m-auto">
          <div className="border-[0.125rem] rounded-full m-auto">
            <img src="src\assets\profile_photo.png"></img>
          </div>
        </div>
        <div className="w-1/2 m-auto text-[2.5rem]">姓名</div>
        <IoSettingsOutline className="w-1/4 m-auto text-5xl" />
      </div>
      <div className="mt-4 flex grid-cols-2 text-xl h-1/5 ">
        <button className="w-1/2 m-auto" onClick={toMatch}>
          配對
        </button>
        <button className="w-1/2 m-auto" onClick={toChatroom}>
          訊息
        </button>
      </div>
    </div>
  );
}

export default Navbar;
