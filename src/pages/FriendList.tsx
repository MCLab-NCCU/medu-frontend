import { useNavigate } from "react-router-dom";
import { friendDetail } from "../datatype/User";
import Profile_header from "../assets/profile_photo.png"

type FriendListProps = {
  friends?: friendDetail[]; // `friends` 可以是陣列或未定義
};

function FriendList({ friends }: FriendListProps) {
  const navigate = useNavigate();

  return (
    <div>
      {friends!.map((friend) => (
        <div
          key={friend.friendId}
          className="flex grid-cols-2 my-2 cursor-pointer hover:bg-slate-300"
          onClick={() => {
            navigate("?friendID=" + friend.friendId);
          }}
        >
          <div className="w-20 border-2 rounded-full m-auto">
            <img src={Profile_header} alt="Profile" />
          </div>
          <div className="w-3/4 grid-rows-2 text-3xl p-2">
            <div className="text-3xl">{friend.friendNickname}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FriendList;
/*<div className="text-lg text-gray-400">
              {friend.friendLatestMessage.message}
            </div>*/
