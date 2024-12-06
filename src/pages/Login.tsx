import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission

    // Here you can add your login logic (e.g., API call)
    // For this example, we'll assume login is always successful

    // Navigate to Home page after successful login
    navigate("/home");
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
