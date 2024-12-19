import { useNavigate } from "react-router-dom";
import Login from "./Login.tsx";

function MainPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute flex inset-0 z-1 w-[1500px*4] blur-md brightness-75 opacity-80 animate-slide">
          {/* Filter attributes to the background images*/}
          <div className="bg-image1 w-[1500px] h-full" />{" "}
          {/* bg-image defined in index.css */}
          <div className="bg-image2 w-[1500px] h-full" />
          <div className="bg-image1 w-[1500px] h-full" />
          <div className="bg-image2 w-[1500px] h-full" />
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <Login />
        </div>
      </div>
    </>
  );
}

export default MainPage;

// test account
// {
//   _id: ObjectId('675305cfd3fb155d8b744346'),
//   profile: {
//     nickname: 'yezyez',
//     birthDate: ISODate('2016-05-18T00:00:00.000Z'),
//     gender: 'male',
//     preference: { matchRange: 'township' }
//   },
//   username: 'yezyez',
//   password: '$2a$10$34Fq9L6U1BgnrkwWdW1axe1b.yd.UFUrYcUYmfDMC6jeh7KlvhUfi',
//   createdAt: ISODate('2024-12-06T14:10:23.010Z'),
//   updatedAt: ISODate('2024-12-06T14:10:23.010Z'),
//   __v: 0
// }
