import Sidebar from "./Sidebar";
import { useEffect, useRef, useState, useContext } from "react";
import useMatchCard from "../hook/useMatchCard";
import { userInfo } from "../datatype/User";
import UserContext from "../store/user-context.ts";
import Card from "./Card";
import { IoHeart } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { userMatch } from "../datatype/User";
import JWTdecoder from "../utils/JWTdecoder";
import refresh from "../api/refresh";
import useUserInfoCookie from "../hook/useUserInfoCookie";


function MatchPage() {
  // Fetch match card
  const { fetchMatchCard, data: card } = useMatchCard();

  // Get user info from user context
  const { userInfo } = useContext(UserContext);

  // Ref for match card slider
  const sliderRef = useRef<HTMLDivElement>(null);
  const [animation, setAnimation] = useState("");

  // State for triggering fetch
  const [triggerFetch, setTriggerFetch] = useState(false);
  const { refreshAccessCookie, accessToken, refreshToken } =
    useUserInfoCookie();

  useEffect(() => {
    fetchMatchCard();
    if (card) {
      console.log(card.matchCard.userId);
      console.log(card.matchCard.profile.nickname);
      console.log(card.matchCard.profile.gender);
    }
  }, [triggerFetch]);

  // Effect to log card information when card is updated
  useEffect(() => {
    if (card) {
      console.log(card.matchCard.userId);
      console.log(card.matchCard.profile.nickname);
      console.log(card.matchCard.profile.gender);
    }
  }, [card]); // This effect runs only when card is updated

  useEffect(() => {
    checkValid();
  }, []);

  async function checkValid() {
    if (JWTdecoder(accessToken).exp < Math.floor(new Date().getTime() / 1000)) {
      const newToken = await refresh(accessToken, refreshToken);
      refreshAccessCookie(newToken);
    }
  }

  const handleLike = () => {
    setAnimation("animate-card-slide-right");
    setTimeout(() => {
      setTriggerFetch(!triggerFetch);
      setAnimation("animate-card-blob-up");
      setTimeout(() => {
        setAnimation("");
      }, 700);
    }, 500);
  };

  const handleDislike = () => {
    setAnimation("animate-card-slide-left");
    setTimeout(() => {
      setTriggerFetch(!triggerFetch);
      setAnimation("animate-card-blob-up");
      setTimeout(() => {
        setAnimation("");
      }, 700);
    }, 500);
  };

  return (
    <div className="flex flex-grow min-h-0">
      <Sidebar />
      <div className="flex flex-col grow justify-center items-center border-l overflow-hidden">
        <div className={`w-[300px] transition ${animation}`}>
          {card && (
            <Card
              ref={sliderRef}
              nickname={card.matchCard.profile.nickname}
              gender={card.matchCard.profile.gender}
            />
          )}
        </div>
        <div className="grid grid-cols-2 gap-16 mt-8">
          <button
            onClick={handleDislike}
            className="rounded-full w-14 h-14 border-2 border-black justify-items-center"
          >
            <RxCross2 style={{ fontSize: "2rem" }} />
          </button>
          <button
            onClick={handleLike}
            className="rounded-full w-14 h-14 border-2 border-black justify-items-center justify-self-end"
          >
            <IoHeart style={{ fontSize: "2rem" }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MatchPage;
