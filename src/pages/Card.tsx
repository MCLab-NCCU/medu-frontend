import React, { useState, useEffect, forwardRef } from "react";
import { IoRemoveOutline } from "react-icons/io5";
import Logo from "../assets/logos/logo.png";

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
      <div className="card overflow-hidden bg-base-100 bg-shiro h-[420px] w-full rounded-2xl shadow-xl">
        <figure className="flex items-center justify-center h-[200px] overflow-hidden">
          <img className="image-full" src={Logo} alt="Profile_Photo" />
        </figure>
        <div className="max-h-[220px] overflow-y-auto no-scrollbar">
          <div className="card-body p-4">
            <h2 className="card-title text-xl font-bold">{cardNickname}</h2>
            <p>{cardGender}</p>
          </div>
          <IoRemoveOutline className="relative left-4" />
          <div className="card-body p-4">
            <p>
              bio content: Sarah Thompson is a vibrant and adventurous spirit
              who has a knack for making every moment memorable. Born and raised
              in the sunny town of Santa Barbara, California, she developed a
              love for the outdoors at an early age. Whether it’s hiking the
              picturesque trails of the nearby mountains or soaking up the sun
              on the beach, Sarah finds joy in nature and embraces every
              opportunity to explore. With a degree in Environmental Science
              from UCLA, Sarah is passionate about sustainability and
              conservation. She works as a project coordinator for a non-profit
              organization focused on protecting coastal ecosystems. Her
              dedication to the environment is evident in her daily life; she
              practices what she preaches by living a zero-waste lifestyle and
              encouraging her friends to do the same.
            </p>
          </div>
        </div>
      </div>
    );
  }
);

export default Card;
