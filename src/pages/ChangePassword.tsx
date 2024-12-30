import { useEffect, useRef, useState } from "react";
import { showToast } from "../utils/showtoast";
import updatePassword from "../api/updatePassword";
import JWTdecoder from "../utils/JWTdecoder";
import useUserInfoCookie from "../hook/useUserInfoCookie";
import refresh from "../api/refresh";

function ChangePassword() {
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const checkNewpasswordRef = useRef<HTMLInputElement>(null);
  const [isSending, setIsSending] = useState(false);
  const { refreshAccessCookie, accessToken, refreshToken, ID } =
    useUserInfoCookie();

  async function checkValid() {
    if (JWTdecoder(accessToken).exp < Math.floor(new Date().getTime() / 1000)) {
      const newToken = await refresh(ID, refreshToken);
      refreshAccessCookie(newToken);
    }
  }

  useEffect(() => {
    checkValid();
  }, []);

  async function submit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsSending(true);
    const newPassword = newPasswordRef.current?.value;
    const checkNewpassword = checkNewpasswordRef.current?.value;

    try {
      if (newPassword !== checkNewpassword) {
        throw new Error("修改密碼不一致!");
      }

      if (newPassword.length < 6) {
        throw new Error("密碼長度應至少為6個字符!");
      }
      await updatePassword(newPassword, accessToken);
      showToast("success", "修改成功");
    } catch (error) {
      if (error.status === 401) {
        try {
          checkValid();
          await updatePassword(newPassword, accessToken);
          showToast("success", "修改成功");
        } catch (error) {
          showToast("error", "修改失敗");
        }
      } else {
        if (error instanceof Error) {
          showToast("error", error.message);
        }
      }
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className="border square border-dark relative h-full">
      <table className="table-auto m-5 w-full">
        <thead>
          <tr>
            <th className="text-left text-5xl">修改密碼</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="text-center text-3xl py-10">請輸入新密碼</th>
            <td>
              <input
                type="password"
                className="w-full max-w-xs input  border-black border-2 rounded-md text-2xl"
                ref={newPasswordRef}
              />
            </td>
          </tr>
          <tr>
            <th className="text-center text-3xl py-10">再次輸入密碼</th>
            <td>
              <input
                type="password"
                className="w-full max-w-xs input  border-black border-2 rounded-md text-2xl"
                ref={checkNewpasswordRef}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <p className="text-center absolute bottom-0 right-0">
        <button
          className="p-4 m-5 bg-slate-400 rounded-lg"
          disabled={isSending}
          onClick={submit}
        >
          確認
        </button>
      </p>
    </form>
  );
}

export default ChangePassword;
