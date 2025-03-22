import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, SetBooks] = useState([]);

  useEffect(() => {
    fetch("./booksData.json")
      .then((res) => res.json())
      .then((data) => SetBooks(data));
  }, []);

  return (
    <div className="mt-10">
      <h2 className="text-3xl mb-4 font-serif italic text-center font-bold">Books</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6  ">
          {
               books.map(book => <Book book={book} key={book.bookId}> </Book>)
          }
      </div>
    </div>
  );
};

export default Books;

// Load Data
// * 1. State to store the books
// * 2. UseEffect
// * 3. Fetch to load Data
// * 4. Set the data to the books state
// *
