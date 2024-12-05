import React, { forwardRef } from "react";

interface CardInfoProps {
  userID: string;
}

const Card = forwardRef<HTMLDivElement, CardInfoProps>(({ userID }, ref) => {
  return (
    <div
      ref={ref}
      className="grid-rows-2 bg-base-100 w-[50%] shadow-xl border-black border-2 m-auto h-full"
    >
      <img
        className="block w-1/3 m-auto h-1/3"
        src="src/assets/profile_photo.png"
        alt="Profile_Photo"
      />

      <div className="h-2/3 flex-wrap p-5">
        <div className="text-5xl mb-3">姓名</div>
        <div>自我介紹</div>
      </div>
    </div>
  );
});

export default Card;
