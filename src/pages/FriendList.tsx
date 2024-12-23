import { useNavigate } from "react-router-dom";
import { friendDetail, message } from "../datatype/User";
import Profile_header from "../assets/profile_photo.png";
import useFriendList from "../hook/useFriendList";
import { useEffect, useState } from "react";
import { useWebSocketStore } from "../store/useWebsocket";

function FriendList() {
  const navigate = useNavigate();
  const { data, status } = useFriendList();
  const defaultFriends = new Array<friendDetail>();
  const [friendList, setFriendList] = useState(defaultFriends);
  const ws = useWebSocketStore().socket;
  const [userID, setUserID] = useState("");

  function renewFriends(event: MessageEvent) {
    try {
      const data: message = JSON.parse(event.data);
      console.log("收到服務器消息:", data);
      const temp = new Array<friendDetail>();
      console.log(data.fromUserId);

      friendList.forEach((friend) => {
        if (data.fromUserId === friend.friendId) {
          temp.push({
            friendId: friend.friendId,
            friendNickname: friend.friendNickname,
            friendLatestMessage: data,
          });
          console.log(1);
        } else if (data.fromUserId === userID) {
          temp.push({
            friendId: friend.friendId,
            friendNickname: friend.friendNickname,
            friendLatestMessage: data,
          });
          console.log(2);
        } else {
          temp.push({
            friendId: friend.friendId,
            friendNickname: friend.friendNickname,
            friendLatestMessage: friend.friendLatestMessage,
          });
        }
      });
      console.log(userID);
      console.log(temp);
    } catch (err) {
      console.error("無法解析服務器消息:", event.data, err);
    }
  }

  ws!.addEventListener("message", renewFriends);

  useEffect(() => {
    if (status === "success") {
      data.friendList.map((friend) => {
        defaultFriends.push({
          friendId: friend.friendId,
          friendNickname: friend.friendNickname,
          friendLatestMessage: friend.friendLatestMessage,
        });
      });
      setFriendList(defaultFriends);
      setUserID(data.friendList[0].friendLatestMessage.fromUserId);
    }
  }, [status]);

  if (friendList === null) {
    return <div>快去認識新朋友</div>;
  }

  return (
    <div>
      {friendList.map((friend) => (
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
