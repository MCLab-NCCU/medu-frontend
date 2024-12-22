import React, { forwardRef } from "react";


interface CardInfoProps {
  nickname: string;
  gender: string;
}

const Card = forwardRef<HTMLDivElement, CardInfoProps>(({ nickname, gender }, ref) => {
  return (
    <div
      className="card bg-base-100 w-full shadow-xl"
    >
      <figure>
        <img
        className="block w-1/3 m-auto h-1/3"
        src="src/assets/profile_photo.png"
        alt="Profile_Photo"
      />
      </figure>
      <div className="card-body h-[250px]">
        <h2 className="card-title">{nickname}</h2>
        <p>{gender}</p>
        </div>
    </div>
  );
});

export default Card;
