function Login() {
  return (
    <div className="bg-main-white flex min-h-screen items-center justify-center">
      <div className="relative w-96 rounded-lg bg-white p-10 shadow-md">
        <h1 className="text-ao mb-4 text-center text-3xl">建立你的帳號吧！</h1>
        <form action="#" method="POST">
          <label
            htmlFor="first-name"
            className="mb-2 block text-left font-bold text-font"
          >
            姓氏：
          </label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            placeholder="輸入您的姓氏"
            className="mb-4 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-400 focus:outline-none"
            required
          />
          <label
            htmlFor="last-name"
            className="mb-2 block text-left font-bold text-gray-700"
          >
            名字：
          </label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            placeholder="輸入您的名字"
            className="mb-4 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-400 focus:outline-none"
            required
          />
          <label
            htmlFor="email"
            className="mb-2 block text-left font-bold text-gray-700"
          >
            電子郵件：
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="輸入您的電子郵件"
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
            className="mb-4 block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-400 focus:outline-none"
            required
          />
          <div className="mb-4 flex items-center justify-between">
            <div>
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="mr-2 leading-tight"
              />
              <label htmlFor="terms" className="text-sm">
                同意啦哪次不同意
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-ao py-2 font-bold text-white transition duration-200 hover:bg-blue-500"
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
      </div>
    </div>
  );
}

export default Login;
