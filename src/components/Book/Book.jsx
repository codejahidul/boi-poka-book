const Book = ({ book }) => {
  const { image, bookName, author, tags, category } = book;

  return (
    <div className="card bg-base-100 w-96 shadow-sm p-6 rounded-2xl border-2 lg:-ml-2 ml-5 border-solid">
      <figure className="bg-[#F3F3F3] py-8 rounded-2xl">
        <img src={image} className="h-[200px]" alt={bookName} />
      </figure>
      <div className="card-body">
        <div className="flex gap-3 justify-center ">
          {tags.map((tag) => (
            <button className="btn btn-sm rounded-3xl text-xs font-serif font-medium text-[#23BE0A] bg-[#23BE0A0D] px-4 ">
              {tags}
            </button>
          ))}
        </div>
        <h2 className="card-title font-serif">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-md font-serif font-medium "> By: {author} </p>
        <div className="border-t-2 border-dashed"></div>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-lime-500"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-lime-500"
                aria-label="2 star"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-lime-500"
                aria-label="3 star"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
