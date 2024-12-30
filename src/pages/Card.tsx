import React, { useState, useEffect, forwardRef } from "react";
import { IoRemoveOutline } from "react-icons/io5";
import Logo from "../assets/logos/logo.png";
import getProfilePicture from "../api/getProfilePicture";

interface CardInfoProps {
  nickname: string;
  gender: string;
  userid: string;
  bio: string;
}

const Card = forwardRef<HTMLDivElement, CardInfoProps>(
  ({ nickname, gender, userid, bio }, ref) => {
    const [cardNickname, setNickname] = useState("");
    const [cardGender, setGender] = useState("");
    const [cardBio, setBio] = useState("");
    const [cardID, setID] = useState("");
    const [picture, setPicture] = useState("");

    useEffect(() => {
      if (nickname && gender) {
        setNickname(nickname);
        setGender(gender);
        setBio(bio);
        setID(userid);
        getpicture();
      }
    }, [nickname, gender, bio, userid]);

    async function getpicture() {
      setPicture(await getProfilePicture(userid));
    }

    return (
      <div className="card overflow-hidden bg-base-100 bg-shiro h-[420px] w-full rounded-2xl shadow-xl">
        <figure className="flex items-center justify-center h-[200px] overflow-hidden">
          <img className="image-full" src={picture} alt="Profile_Photo" />
        </figure>
        <div className="max-h-[220px] overflow-y-auto no-scrollbar">
          <div className="card-body p-4">
            <h2 className="card-title text-xl font-bold">{cardNickname}</h2>
            <p>{cardGender}</p>
          </div>
          <IoRemoveOutline className="relative left-4" />
          <div className="card-body p-4">
            <p>{bio}</p>
          </div>
        </div>
      </div>
    );
  }
);

export default Card;
