import { useEffect, useState } from "react";
import getNickname from "../api/getNickname";
import { friend } from "../datatype/User";
import useFriendList from "../hook/useFriendList";

function FriendList() {
  const { data, status } = useFriendList();
  const [friendlist, setFriendList] = useState<Array<friend>>([]);

  console.log(friendlist);

  useEffect(() => {
    if (status === "success") {
      const friends = new Array<friend>();
      data?.friendList.forEach(async (id) => {
        const nickname = (await getNickname(id)).nickname;
        friends.push({ id, nickname });
      });
      setFriendList(friends);
      console.log(friendlist);
    }
  }, [data, status]);

  if (status === "pending") {
    return <div>loading...</div>;
  }

  console.log(friendlist);

  const content = friendlist.map((friend) => {
    return (
      <div key={friend.id} className="flex grid-cols-2 my-2">
        <div className="w-20 border-2 rounded-full m-auto">
          <img src="src/assets/profile_photo.png" alt="Profile" />
        </div>
        <div className="w-3/4 grid-rows-2 text-3xl p-2">
          <div className="text-3xl">{friend.nickname}</div>
        </div>
      </div>
    );
  });

  console.log(content);
  return <div>{content}</div>;
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
