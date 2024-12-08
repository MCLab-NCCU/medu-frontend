import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../api/login";
import useUserTokenCookie from "../hook/useUserTokenCookie";
import { showToast } from "../utils/showtoast";
import connect from "../api/websocket";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { setUserTokenCookie } = useUserTokenCookie();
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
      const jwt = await login(formData);
      setUserTokenCookie(jwt);
      showToast("success", "登入成功");
      navigate("/home");
    } catch (error) {
      showToast("error", "帳密有誤");
      console.error(error); // Handle error
    }
  };

  return (
    <div className="relative w-96 rounded-lg bg-shiro p-10 shadow-md">
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
          className="mb-4 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-400 focus:outline-none"
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
          className="mb-8 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-400 focus:outline-none"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full rounded-md bg-ao py-2 font-bold text-white transition duration-200 hover:bg-blue-500"
        >
          登入
        </button>
      </form>
    </div>
  );
}

export default Login;
