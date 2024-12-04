import Card from "./Card";
import { IoHeart } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

function Match() {
  return (
    <div className="grid grid-rows-2">
      <div className="w-1/2 m-auto">
        <Card />
      </div>
      <div className="mx-auto mt-9">
        <button className="btn rounded-full mr-7">
          <IoHeart />
        </button>
        <button className="btn rounded-full">
          <RxCross2 />
        </button>
      </div>
    </div>
  );
}

export default Match;
