import bannerImg from "../../image/books.jpg"
const Banner = () => {
  return (
    <div className="hero bg-[#1313130D] rounded-xl mt-10 p-14">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src= {bannerImg}
          className="   lg:w-5/12 rounded-lg shadow-2xl"
        />
        <div className="">
          <h1 className="lg:text-5xl text-2xl italic ml-4 lg:ml-10 font-semibold font-serif">Books to freshen up your bookshelf</h1>
         
          <button className="btn text-lg font-serif rounded-lg text-[#FFFFFF]  mt-24 ml-12 bg-[#23BE0A]">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
