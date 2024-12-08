import { useNavigate } from "react-router-dom";
import { friendDetail } from "../datatype/User";

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
            <img src="src/assets/profile_photo.png" alt="Profile" />
          </div>
          <div className="w-3/4 grid-rows-2 text-3xl p-2">
            <div className="text-3xl">{friend.friendNickname}</div>
            <div className="text-lg text-gray-400">
              {friend.friendLatestMessage.message}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FriendList;

/*
{friendlist?.map((friend) => (
        <div key={friend.id} className="flex grid-cols-2 my-2">
          <div className="w-20 border-2 rounded-full m-auto">
            <img src="src/assets/profile_photo.png" alt="Profile" />
          </div>
          <div className="w-3/4 grid-rows-2 text-3xl p-2">
            <div className="text-3xl">{friend.nickname}</div>
          </div>
        </div>
      ))}
*/
