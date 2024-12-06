import { Navigate, useNavigate } from "react-router-dom";
import Login from "./Login.tsx";
import useUserTokenCookie from "../hook/useUserTokenCookie.ts";

function MainPage() {
  const navigate = useNavigate();
  const { tokenCookie } = useUserTokenCookie();

  if (tokenCookie) return <Navigate to="/home" />;

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row h-screen">
        <div className="flex-1 flex flex-col shrink-0 items-center justify-center bg-white">
          <div className="relative left-48">
            <Login />
          </div>
        </div>
        <div className="flex-1 flex flex-col shrink-0 items-center justify-center bg-white">
          <div className="relative right-20">
            <img
              src="/src/assets/logos/logo-pre.png"
              alt=""
              className="w-60 mb-10 min-w-60"
            />
            <button
              type="submit"
              onClick={() => navigate("/register")}
              className="w-60 rounded-md bg-ao py-2 font-bold text-white transition duration-200 hover:bg-blue-500 mb-2"
            >
              註冊嗎？註冊！
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
