import React, { useState, useRef, useEffect } from "react";
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

  const [successMessage, setSuccessMessage] = useState(""); // State for success message
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
    console.log("Button Clicked!");

    try {
      const response = await fetch(
        "http://140.119.164.16:3000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage("Registration was successful!"); // Set success message
        setFormData({
          username: "",
          password: "",
          nickname: "",
          birthDate: "",
          gender: "",
        });
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  return (
    <div className="flex flex-row h-screen">
      <div className="flex-1 flex flex-col shrink-0 items-center justify-center bg-white">
        <img
          src="/src/assets/logos/logo.png"
          alt=""
          className="w-60 mb-10 ml-20 min-w-60"
        />
        <p className="ml-20 font-mono text-6xl text-font">Medu</p>
      </div>
      <div className="flex-1 bg-white">
        <div className="bg-main-white relative flex min-h-screen flex-col overflow-hidden items-center justify-center">
          <div className="relative w-96 rounded-lg bg-shiro p-10 shadow-md mr-40">
            <h1 className="text-ao mb-6 text-center text-3xl mt-4">
              建立你的帳號吧！
            </h1>
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
                htmlFor="nickname"
                className="mb-2 block text-left font-bold text-gray-700"
              >
                昵稱：
              </label>
              <input
                type="text"
                id="nickname"
                name="nickname"
                placeholder="輸入您的昵稱"
                className="mb-4 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-400 focus:outline-none"
                value={formData.nickname}
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
                className="mb-4 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-400 focus:outline-none"
                value={formData.password}
                onChange={handleChange}
                required
              />

              {/* Gender Selection */}
              <label
                htmlFor="gender"
                className="mb-2 block text-left font-bold text-gray-700"
              >
                性別：
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mb-4 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-400 focus:outline-none"
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
                className="mb-2 block text-left font-bold text-gray-700"
              >
                生日：
              </label>
              <input
                ref={birthdayInputRef}
                type="text" // Use text type for Flatpickr to work correctly
                id="birthDate"
                name="birthDate"
                placeholder="選擇你的生日"
                className="mb-8 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-400 focus:outline-none"
              />

              {/* Submit Buttons */}
              <button
                type="submit"
                className="w-full rounded-md bg-ao py-2 font-bold text-white transition duration-200 hover:bg-blue-500 mb-2"
              >
                註冊
              </button>
            </form>
            <p className="mt-4 text-center">
              已經註冊過了嗎？
              <a href="#" className="text-ao hover:underline">
                登入
              </a>
            </p>
            {/* Conditionally render the success message */}
            {successMessage && (
              <div
                className="success-message"
                style={{ color: "green", marginTop: "10px" }}
              >
                {successMessage}
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Register;
