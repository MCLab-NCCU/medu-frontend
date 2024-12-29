import { useNavigate } from "react-router-dom";
import Register from "./Register.tsx";
import Logo from "../assets/logos/logo-pre.png";

function MainPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-row w-full h-screen overflow-hidden">
        <div className="relative flex flex-1 flex-col justify-center items-center">
          <img
            src={Logo}
            className="relative mb-8 w-1/3 h-auto pop-logo-animation"
          />
          <h2 className="text-font text-lg text-center font-bold">
            拯救找不到飯友的人於水火之中
          </h2>
        </div>
        <div className="relative flex flex-1 top-8 justify-center items-center">
          <Register />
        </div>
      </div>
    </>
  );
}

export default MainPage;
