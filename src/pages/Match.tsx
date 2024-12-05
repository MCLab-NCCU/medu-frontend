import { useRef, useState } from "react";
import Card from "./Card";
import { IoHeart } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function Match() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState("");

  const slideLeft = () => {
    setAnimate("spinLeft");
  };
  const slideRight = () => {
    setAnimate("spinRight");
    console.log(1);
  };

  return (
    <div className="h-full pt-8">
      <div className={"m-auto h-[80%] " + animate}>
        <Card ref={sliderRef} userID="123" />
      </div>
      <div className="m-auto grid grid-cols-2 h-[15%] mt-8">
        <button
          onClick={slideLeft}
          className="rounded-full w-16 h-16 border-2 border-black justify-items-center justify-self-end mr-10"
        >
          <IoHeart />
        </button>
        <button
          onClick={slideRight}
          className="rounded-full w-16 h-16 border-2 border-black justify-items-center ml-10"
        >
          <RxCross2 />
        </button>
      </div>
    </div>
  );
}

export default Match;
