import React, { useState, useEffect, forwardRef } from "react";

interface CardInfoProps {
  nickname: string;
  gender: string;
}

const Card = forwardRef<HTMLDivElement, CardInfoProps>(
  ({ nickname, gender }, ref) => {
    const [cardNickname, setNickname] = useState("");
    const [cardGender, setGender] = useState("");

    useEffect(() => {
      if (nickname && gender) {
        setNickname(nickname);
        setGender(gender);
      }
    }, [nickname, gender]);

    return (
      <div className="card bg-base-100 w-full shadow-xl">
        <figure>
          <img
            className="block w-1/3 m-auto h-1/3"
            src="src/assets/profile_photo.png"
            alt="Profile_Photo"
          />
        </figure>
        <div className="card-body h-[250px]">
          <h2 className="card-title">{cardNickname}</h2>
          <p>{cardGender}</p>
        </div>
      </div>
    );
  }
);

export default Card;
