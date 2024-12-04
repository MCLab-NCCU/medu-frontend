function Card() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl border-black border-2 m-auto">
      <figure>
        <img src="src\assets\profile_photo.png" alt="Profile_Photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">姓名</h2>
        <p>自我介紹</p>
      </div>
    </div>
  );
}
export default Card;
