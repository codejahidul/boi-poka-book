import { useEffect, useState } from "react";

const Books = () => {
  const [books, SetBooks] = useState([]);

  useEffect(() => {
    fetch("./booksData.json")
      .then((res) => res.json())
      .then((data) => SetBooks(data));
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-serif font-medium text-center">Books</h2>
      <p>{books.length}</p>
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
