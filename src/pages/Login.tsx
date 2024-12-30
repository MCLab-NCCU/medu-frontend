import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import login from "../api/login";
import { showToast } from "../utils/showtoast";
import { useWebSocketStore } from "../store/useWebsocket";
import useUserInfoCookie from "../hook/useUserInfoCookie";
import UserContext from "../store/user-context.ts";

function Login() {
  // Login form data
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Connect to websocket
  const connect = useWebSocketStore((state) => state.connect);

  const { setCookies } = useUserInfoCookie();
  // Set user info to global user context after login
  const { setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login Button Clicked!");

    try {
      const userInfo = await login(formData);
      setCookies(userInfo);
      connect(import.meta.env.VITE_WEBSOCKET_URL + userInfo.accessToken);
      setUserInfo(userInfo.userProfile);
      showToast("success", "登入成功");
      // Navigate to match page
      navigate("/Match");
    } catch (error) {
      showToast("error", "帳密有誤");
      console.error(error); // Handle error
    }
  };

  return (
    <div className="relative w-96 rounded-2xl bg-shiro backdrop-filter backdrop-blur-sm bg-shiro/40 p-10 shadow-md">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="username"
          className="mb-2 block text-left font-bold text-font"
        >
          使用者名稱：
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="輸入您的使用者名稱"
          className="mb-4 block w-full rounded-2xl border border-gray-300 px-4 py-2 backdrop-filter backdrop-blur-sm bg-white/40 focus:border-ao focus:outline-none"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <label
          htmlFor="password"
          className="mb-2 block text-left font-bold text-gray-700"
        >
          密碼：
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="輸入您的密碼"
          className="mb-8 block w-full rounded-2xl border border-gray-300 px-4 py-2 backdrop-filter backdrop-blur-sm bg-white/40 focus:border-ao focus:outline-none"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full rounded-2xl bg-ao py-2 mb-4 font-bold text-white 
          backdrop-filter backdrop-blur-sm bg-ao/70 
          transition duration-200 hover:bg-blue-400"
        >
          登入
        </button>
        <span className="cursor-default">註冊嗎? </span>
        <button onClick={() => navigate("/Register")}>註冊！</button>
      </form>
    </div>
  );
}

export default Login;
