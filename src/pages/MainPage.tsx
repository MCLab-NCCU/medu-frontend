import { useNavigate } from "react-router-dom";
import Login from "./Login.tsx";
import Logo from "../assets/logos/logo-pre.png";
import Background1 from "../assets/backgrounds/main-page-bg-1.png";
import Background2 from "../assets/backgrounds/main-page-bg-2.png";

function MainPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute flex inset-0 z-1 w-[1500px*4] blur-md brightness-75 opacity-80 animate-slide">
          {/* Filter attributes to the background images*/}
          <div className="bg-image1 w-[1500px] h-full" />{" "}
          {/* bg-image defined in index.css */}
          <div className="bg-image2 w-[1500px] h-full" />
          <div className="bg-image1 w-[1500px] h-full" />
          <div className="bg-image2 w-[1500px] h-full" />
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <Login />
        </div>
      </div>
    </>
  );
}

export default MainPage;
