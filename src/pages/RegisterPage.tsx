import { useNavigate } from "react-router-dom";
import Register from "./Register.tsx";

function MainPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-row w-full h-screen overflow-hidden">
        <div className="relative flex flex-1">
          <div className="absolute flex inset-0 bottom-16">
            <div className="logo w-full h-full pop-animation opacity-80" />
            <div className="absolute bottom-60 left-0 w-full text-center">
              <h2 className="text-font text-lg font-bold">
                拯救找不到飯友的人於水火之中
              </h2>
            </div>
          </div>
        </div>
        <div className="relative flex flex-1 top-8 justify-center items-center">
          <div className="absolute inset-0 z-1 blur-md brightness-75 opacity-80 overflow-hidden">
            <div className="bg-image3 w-full h-full" />
          </div>
          <Register />
        </div>
      </div>
    </>
  );
}

export default MainPage;
