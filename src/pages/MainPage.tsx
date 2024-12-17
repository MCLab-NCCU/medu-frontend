import { useNavigate } from "react-router-dom";
import Login from "./Login.tsx";
import Logo from "../assets/logos/logo-pre.png";
import Background1 from "../assets/backgrounds/main-page-bg-1.png";
import Background2 from "../assets/backgrounds/main-page-bg-2.png";

function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen border-2 m-2 overflow-hidden">
      <div className="absolute inset-0 w-[1500px*4] flex animate-slide">
        <div className="bg-image1 w-[1500px] h-full" />
        <div className="bg-image2 w-[1500px] h-full" />
        <div className="bg-image1 w-[1500px] h-full" />
        <div className="bg-image2 w-[1500px] h-full" />
      </div>
    </div>
  );
}

export default MainPage;
