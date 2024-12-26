import Sidebar from "./Sidebar";
import { useEffect, useRef, useState } from "react";
import useMatchCard from "../hook/useMatchCard";
import Card from "./Card";
import { IoHeart } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { userMatch } from "../datatype/User";

function MatchPage() {
  const { fetchMatchCard, data: card } = useMatchCard();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [animation, setAnimation] = useState("");
  const [triggerFetch, setTriggerFetch] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
    setAnimation("animate-card-slide-left -rotate-12");
    setTimeout(() => {
      setAnimation("");
      setTriggerFetch(!triggerFetch);
    }, 500);
  };

  return (
    <div className="flex flex-col border-2 justify-end max-w-screen min-h-screen">
      <div className="relative bottom-4 flex w-full h-[90vh]">
        <div className="flex p-2 gap-2 border-4 border-black grow min-h-full m-2">
          <Sidebar />
          <div className="flex flex-col justify-center items-center border grow rounded-md p-2 overflow-hidden">
            <div className={`w-[300px] border-2 transition ${animation}`}>
              {card && (
                <Card
                  ref={sliderRef}
                  nickname={card.matchCard.profile.nickname}
                  gender={card.matchCard.profile.gender}
                />
              )}
            </div>
            <div className="grid grid-cols-2 gap-16 mt-4">
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
      </div>
    </div>
  );
}

export default MatchPage;
