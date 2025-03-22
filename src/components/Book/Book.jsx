const Book = ({ book }) => {
  const { image, bookName, author, tags } = book;

  return (
    <div className="card bg-base-100 w-96 shadow-sm p-6 rounded-2xl border-2 lg:-ml-2 ml-5 border-solid">
      <figure className="bg-[#F3F3F3] py-8 rounded-2xl">
        <img
          src={image}
          className="h-[200px]"
          alt={bookName}
        />
      </figure>
      <div className="card-body">
          {
               tags.map(tag =>  <button className="btn">Neutral</button>)
          }
        <h2 className="card-title font-serif">
           {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-md font-serif font-medium "> By: {author} </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
