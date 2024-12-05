function FriendList() {
  return (
    <div className="flex grid-cols-2 my-2">
      <div className="w-20 border-2 rounded-full m-auto">
        <img src="src\assets\profile_photo.png"></img>
      </div>
      <div className="w-3/4 grid-rows-2 text-3xl p-2">
        <div className="text-3xl">姓名</div>
        <div className="text-lg text-gray-500">訊息</div>
      </div>
    </div>
  );
}

export default FriendList;
