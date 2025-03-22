import bannerImg from "../../image/books.jpg"
const Banner = () => {
  return (
    <div className="hero bg-[#1313130D] rounded-xl mt-10 p-14">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src= {bannerImg}
          className="  w-8/12 lg:w-5/12 rounded-lg shadow-2xl"
        />
        <div className="">
          <h1 className="text-5xl italic ml-10 font-semibold font-serif">Books to freshen up your bookshelf</h1>
         
          <button className="btn text-lg rounded-lg text-[#FFFFFF] ml-44 mt-24 lg:ml-10 bg-[#23BE0A]">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
