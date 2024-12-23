import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import register from "../api/register";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    nickname: "",
    birthDate: "",
    gender: "",
  });

  const navigate = useNavigate();
  const birthdayInputRef = useRef<HTMLInputElement | null>(null);

  // Initialize Flatpickr for birthday input
  useEffect(() => {
    if (birthdayInputRef.current) {
      flatpickr(birthdayInputRef.current, {
        dateFormat: "Y-m-d",
        maxDate: new Date(),
        locale: {
          firstDayOfWeek: 1,
        },
        onChange: (selectedDates) => {
          setFormData((prev) => ({
            ...prev, // Preserve all other previous state's data to only modify birthday
            birthDate: selectedDates[0]
              ? selectedDates[0].toISOString().split("T")[0]
              : "",
          }));
        },
      });
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, type, value } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Register Button Clicked!");

    try {
      const response = await register(formData);
      if (response.message === "register success") {
        navigate("/");
      }
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  return (
    <div className="relative flex-col w-96 rounded-2xl bg-shiro backdrop-filter backdrop-blur-sm bg-shiro/40 p-10 shadow-md">
      <h1 className="text-ao mb-6 text-center font-bold text-2xl md:text-xl">
        建立你的帳號吧！
      </h1>
      <div className="w-full m-2 overflow-y-scroll no-scrollbar h-[300px] mb-6">
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="username"
            className="mb-2 block text-left text-sm font-bold text-font"
          >
            使用者名稱：
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="輸入您的使用者名稱"
            className="mb-4 block w-full rounded-md text-sm border border-gray-300 px-4 py-2 focus:border-blue-400 focus:outline-none"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <label
            htmlFor="nickname"
            className="mb-2 block text-left text-sm font-bold text-font"
          >
            昵稱：
          </label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            placeholder="輸入您的昵稱"
            className="mb-4 block w-full rounded-md text-sm border border-gray-300 px-4 py-2 focus:border-blue-400 focus:outline-none"
            value={formData.nickname}
            onChange={handleChange}
            required
          />

          <label
            htmlFor="password"
            className="mb-2 block text-left text-sm font-bold text-font"
          >
            密碼：
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="輸入您的密碼"
            className="mb-4 block w-full rounded-md text-sm border border-gray-300 px-4 py-2 focus:border-blue-400 focus:outline-none"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {/* Gender Selection */}
          <label
            htmlFor="gender"
            className="mb-2 block text-left text-sm font-bold text-font"
          >
            性別：
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mb-4 block w-full rounded-md text-sm border border-gray-300 px-4 py-2 focus:border-blue-400 focus:outline-none"
            required
          >
            <option value="">選擇性別</option>
            <option value="male">男性</option>
            <option value="female">女性</option>
            <option value="other">其他</option>
          </select>

          {/* Birthday Input */}
          <label
            htmlFor="birthDate"
            className="mb-2 block text-left text-sm font-bold text-font"
          >
            生日：
          </label>
          <input
            ref={birthdayInputRef}
            type="text" // Use text type for Flatpickr to work correctly
            id="birthDate"
            name="birthDate"
            placeholder="選擇你的生日"
            className="mb-8 block w-full rounded-md text-sm border border-gray-300 px-4 py-2 focus:border-blue-400 focus:outline-none"
          />
        </form>
      </div>

      {/* Submit Buttons */}
      <button
        type="submit"
        className="w-full rounded-md bg-ao py-2 font-bold text-white text-sm transition duration-200 hover:bg-blue-500 mb-4"
      >
        註冊
      </button>

      <p className="text-center">
        已經註冊過了嗎？
        <a
          onClick={() => {
            navigate("/");
          }}
          className="text-ao font-bold hover:underline cursor-pointer"
        >
          登入
        </a>
      </p>
    </div>
  );
}

export default Register;
