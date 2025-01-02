import { useContext, useEffect, useRef, useState } from "react";
import UserContext from "../store/user-context";
import JWTdecoder from "../utils/JWTdecoder";
import useUserInfoCookie from "../hook/useUserInfoCookie";
import refresh from "../api/refresh";
import { showToast } from "../utils/showtoast";
import updateProfile from "../api/updateProfile";
import postProfilePicture from "../api/postProfilePicture";

function UserSetting() {
  const nickNameRef = useRef<HTMLInputElement>(null);
  const bioRef = useRef<HTMLTextAreaElement>(null);
  const [file, setFile] = useState<File>(null);
  const {
    refreshAccessCookie,
    accessToken,
    refreshToken,
    ID,
    userInfo,
    updateUserInfo,
  } = useUserInfoCookie();
  const [isSending, setIsSending] = useState(false);
  const [defaultcounty, setdefaultcounty] = useState("");
  const [defaultDistrict, setdefaultDistrict] = useState("");
  const [selectedCity, setSelectedCity] = useState(defaultcounty);
  const [selectedDistrict, setSelectedDistrict] = useState(defaultDistrict);

  async function checkValid() {
    if (JWTdecoder(accessToken).exp < Math.floor(new Date().getTime() / 1000)) {
      const newToken = await refresh(ID, refreshToken);
      refreshAccessCookie(newToken);
    }
  }

  useEffect(() => {
    checkValid();
    if (userInfo.location.county === null) {
      setdefaultcounty("");
    } else {
      setdefaultcounty(userInfo.location.county);
    }

    if (userInfo.location.township === null) {
      setdefaultDistrict("");
    } else {
      setdefaultDistrict(userInfo.location.township);
    }
  }, []);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setSelectedDistrict(""); // 重置地区选择
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };
  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      if (e.target.files[0].size > 1048576) {
        alert("檔案太大，請選擇小於 1MB 的檔案。");
      }
      setFile(e.target.files[0]);
    }
  }

  const COUNTY_TOWNSHIPS = {
    台北市: [
      "中正區",
      "大同區",
      "中山區",
      "松山區",
      "大安區",
      "萬華區",
      "信義區",
      "士林區",
      "北投區",
      "內湖區",
      "南港區",
      "文山區",
    ],
    新北市: [
      "板橋區",
      "三重區",
      "中和區",
      "永和區",
      "新莊區",
      "新店區",
      "樹林區",
      "鶯歌區",
      "三峽區",
      "淡水區",
      "汐止區",
      "瑞芳區",
      "土城區",
      "蘆洲區",
      "五股區",
      "泰山區",
      "林口區",
      "深坑區",
      "石碇區",
      "坪林區",
      "三芝區",
      "石門區",
      "八里區",
      "平溪區",
      "雙溪區",
      "貢寮區",
      "金山區",
      "萬里區",
      "烏來區",
    ],
    桃園市: [
      "桃園區",
      "中壢區",
      "平鎮區",
      "八德區",
      "楊梅區",
      "蘆竹區",
      "大溪區",
      "龜山區",
      "大園區",
      "觀音區",
      "新屋區",
      "龍潭區",
      "復興區",
    ],
    台中市: [
      "中區",
      "東區",
      "南區",
      "西區",
      "北區",
      "北屯區",
      "西屯區",
      "南屯區",
      "太平區",
      "大里區",
      "霧峰區",
      "烏日區",
      "豐原區",
      "后里區",
      "石岡區",
      "東勢區",
      "新社區",
      "潭子區",
      "大雅區",
      "神岡區",
      "大肚區",
      "沙鹿區",
      "龍井區",
      "梧棲區",
      "清水區",
      "大甲區",
      "外埔區",
      "大安區",
      "和平區",
    ],
    台南市: [
      "中西區",
      "東區",
      "南區",
      "北區",
      "安平區",
      "安南區",
      "永康區",
      "歸仁區",
      "新化區",
      "左鎮區",
      "玉井區",
      "楠西區",
      "南化區",
      "仁德區",
      "關廟區",
      "龍崎區",
      "官田區",
      "麻豆區",
      "佳里區",
      "西港區",
      "七股區",
      "將軍區",
      "學甲區",
      "北門區",
      "新營區",
      "後壁區",
      "白河區",
      "東山區",
      "六甲區",
      "下營區",
      "柳營區",
      "鹽水區",
      "善化區",
      "大內區",
      "山上區",
      "新市區",
      "安定區",
    ],
    高雄市: [
      "楠梓區",
      "左營區",
      "鼓山區",
      "三民區",
      "鹽埕區",
      "前金區",
      "新興區",
      "苓雅區",
      "前鎮區",
      "旗津區",
      "小港區",
      "鳳山區",
      "林園區",
      "大寮區",
      "大樹區",
      "大社區",
      "仁武區",
      "鳥松區",
      "岡山區",
      "橋頭區",
      "燕巢區",
      "田寮區",
      "阿蓮區",
      "路竹區",
      "湖內區",
      "茄萣區",
      "永安區",
      "彌陀區",
      "梓官區",
      "旗山區",
      "美濃區",
      "六龜區",
      "甲仙區",
      "杉林區",
      "內門區",
      "茂林區",
      "桃源區",
      "那瑪夏區",
    ],
    基隆市: [
      "仁愛區",
      "信義區",
      "中正區",
      "中山區",
      "安樂區",
      "暖暖區",
      "七堵區",
    ],
    新竹市: ["東區", "北區", "香山區"],
    嘉義市: ["東區", "西區"],
    新竹縣: [
      "竹北市",
      "竹東鎮",
      "新埔鎮",
      "關西鎮",
      "湖口鄉",
      "新豐鄉",
      "峨眉鄉",
      "寶山鄉",
      "北埔鄉",
      "芎林鄉",
      "橫山鄉",
      "尖石鄉",
      "五峰鄉",
    ],
    苗栗縣: [
      "苗栗市",
      "頭份市",
      "竹南鎮",
      "後龍鎮",
      "通霄鎮",
      "苑裡鎮",
      "卓蘭鎮",
      "造橋鄉",
      "西湖鄉",
      "頭屋鄉",
      "公館鄉",
      "銅鑼鄉",
      "三義鄉",
      "大湖鄉",
      "獅潭鄉",
      "三灣鄉",
      "南庄鄉",
      "泰安鄉",
    ],
    彰化縣: [
      "彰化市",
      "員林市",
      "和美鎮",
      "鹿港鎮",
      "溪湖鎮",
      "二林鎮",
      "田中鎮",
      "北斗鎮",
      "花壇鄉",
      "芬園鄉",
      "大村鄉",
      "永靖鄉",
      "伸港鄉",
      "線西鄉",
      "福興鄉",
      "秀水鄉",
      "埔心鄉",
      "埔鹽鄉",
      "大城鄉",
      "芳苑鄉",
      "竹塘鄉",
      "社頭鄉",
      "二水鄉",
      "田尾鄉",
      "埤頭鄉",
      "溪州鄉",
    ],
    南投縣: [
      "南投市",
      "埔里鎮",
      "草屯鎮",
      "竹山鎮",
      "集集鎮",
      "名間鄉",
      "鹿谷鄉",
      "中寮鄉",
      "魚池鄉",
      "國姓鄉",
      "水里鄉",
      "信義鄉",
      "仁愛鄉",
    ],
    雲林縣: [
      "斗六市",
      "斗南鎮",
      "虎尾鎮",
      "西螺鎮",
      "土庫鎮",
      "北港鎮",
      "古坑鄉",
      "大埤鄉",
      "莿桐鄉",
      "林內鄉",
      "二崙鄉",
      "崙背鄉",
      "麥寮鄉",
      "東勢鄉",
      "褒忠鄉",
      "台西鄉",
      "元長鄉",
      "四湖鄉",
      "口湖鄉",
      "水林鄉",
    ],
    嘉義縣: [
      "太保市",
      "朴子市",
      "布袋鎮",
      "大林鎮",
      "民雄鄉",
      "溪口鄉",
      "新港鄉",
      "六腳鄉",
      "東石鄉",
      "義竹鄉",
      "鹿草鄉",
      "水上鄉",
      "中埔鄉",
      "竹崎鄉",
      "梅山鄉",
      "番路鄉",
      "大埔鄉",
      "阿里山鄉",
    ],
    屏東縣: [
      "屏東市",
      "潮州鎮",
      "東港鎮",
      "恆春鎮",
      "萬丹鄉",
      "長治鄉",
      "麟洛鄉",
      "九如鄉",
      "里港鄉",
      "鹽埔鄉",
      "高樹鄉",
      "萬巒鄉",
      "內埔鄉",
      "泰武鄉",
      "來義鄉",
      "春日鄉",
      "獅子鄉",
      "牡丹鄉",
      "車城鄉",
      "三地門鄉",
      "霧台鄉",
      "瑪家鄉",
    ],
    宜蘭縣: [
      "宜蘭市",
      "羅東鎮",
      "蘇澳鎮",
      "頭城鎮",
      "礁溪鄉",
      "壯圍鄉",
      "員山鄉",
      "冬山鄉",
      "五結鄉",
      "三星鄉",
      "大同鄉",
      "南澳鄉",
    ],
    花蓮縣: [
      "花蓮市",
      "鳳林鎮",
      "玉里鎮",
      "新城鄉",
      "吉安鄉",
      "壽豐鄉",
      "光復鄉",
      "豐濱鄉",
      "瑞穗鄉",
      "富里鄉",
      "秀林鄉",
      "萬榮鄉",
      "卓溪鄉",
    ],
    台東縣: [
      "台東市",
      "成功鎮",
      "關山鎮",
      "卑南鄉",
      "鹿野鄉",
      "池上鄉",
      "東河鄉",
      "長濱鄉",
      "太麻里鄉",
      "金峰鄉",
      "大武鄉",
      "達仁鄉",
      "綠島鄉",
      "蘭嶼鄉",
      "延平鄉",
      "海端鄉",
    ],
    澎湖縣: ["馬公市", "湖西鄉", "白沙鄉", "西嶼鄉", "望安鄉", "七美鄉"],
    金門縣: ["金城鎮", "金沙鎮", "金湖鎮", "金寧鄉", "烈嶼鄉", "烏坵鄉"],
    連江縣: ["南竿鄉", "北竿鄉", "莒光鄉", "東引鄉"],
  };
  async function submit(e: React.MouseEvent<HTMLButtonElement>) {
    try {
      e.preventDefault();
      setIsSending(true);
      const name = nickNameRef.current?.value;
      const bio = bioRef.current?.value;
      if (!name.length) {
        throw new Error("請填寫暱稱!");
      }
      if (!bio.length) {
        throw new Error("請填寫自介!");
      }
      if (file.size > 1048576) {
        throw new Error("檔案太大，請選擇小於 1MB 的檔案。");
      }

      await updateProfile(
        {
          nickname: name,
          bio: bio,
          location: { county: selectedCity, township: selectedDistrict },
        },
        accessToken
      );
      if (file !== null) {
        await postProfilePicture(accessToken, file);
      }

      updateUserInfo({
        birthDate: userInfo.birthDate,
        gender: userInfo.gender,
        location: { county: selectedCity, township: selectedDistrict },
        nickname: name,
        preference: userInfo.preference,
        profilePicturePath: userInfo.profilePicturePath,
        bio: bio,
      });
      showToast("success", "修改成功");
    } catch (error) {
      if (error.status === 401) {
        try {
          checkValid();
          const name = nickNameRef.current?.value;
          const bio = bioRef.current?.value;
          await updateProfile(
            {
              nickname: name,
              bio: bio,
              location: { county: selectedCity, township: selectedDistrict },
            },
            accessToken
          );
          updateUserInfo({
            birthDate: userInfo.birthDate,
            gender: userInfo.gender,
            location: { county: selectedCity, township: selectedDistrict },
            nickname: name,
            preference: userInfo.preference,
            profilePicturePath: userInfo.profilePicturePath,
            bio: bio,
          });
          if (file !== null) {
            await postProfilePicture(accessToken, file);
          }
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
      <table className="table-auto w-full m-5">
        <thead>
          <tr>
            <th className="text-left text-5xl">基本設定</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="text-center text-3xl py-10">暱稱</th>
            <td>
              <input
                type="text"
                defaultValue={userInfo.nickname}
                className="w-full max-w-xs input  border-black border-2 rounded-md text-2xl"
                ref={nickNameRef}
              />
            </td>
          </tr>
          <tr>
            <th className="text-center text-3xl py-10">自介</th>
            <td>
              <textarea
                defaultValue={userInfo.bio}
                className="w-full max-w-xs input border-black border-2 rounded-md h-48 text-2xl"
                ref={bioRef}
              />
            </td>
          </tr>
          <tr>
            <th className="text-center text-3xl py-10">所在地區</th>
            <td>
              <select
                id="city-select"
                value={selectedCity}
                onChange={handleCityChange}
                className="text-2xl"
              >
                <option value="" disabled>
                  請選擇城市
                </option>
                {Object.keys(COUNTY_TOWNSHIPS).map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <select
                id="district-select"
                value={selectedDistrict}
                onChange={handleDistrictChange}
                disabled={!selectedCity}
                className="text-2xl"
              >
                <option value="" disabled>
                  請選擇地區
                </option>
                {selectedCity &&
                  COUNTY_TOWNSHIPS[selectedCity].map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
              </select>
            </td>
          </tr>
          <tr>
            <th className="text-center text-3xl py-10">大頭貼</th>
            <td>
              <input
                type="file"
                accept="image/png, image/jpeg"
                className="w-full max-w-xs input  border-black border-2 rounded-md text-2xl"
                onChange={handleFileChange}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <p className="text-center absolute bottom-0 right-0">
        <button className="p-4 m-5 bg-slate-400 rounded-lg" onClick={submit}>
          確認
        </button>
      </p>
    </form>
  );
}

export default UserSetting;
