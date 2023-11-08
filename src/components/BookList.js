import BookShow from "./BookShow";
import React, { useContext } from "react";
import BooksContext from "../context/Books";
import { Counter } from "./Counter";

const BookList = () => {
  const ctx = useContext(BooksContext);
  return (
    <>
      <Counter />
      <div className="book-list">
        {ctx.books.map((book) => (
          <BookShow book={book} key={book.id} />
        ))}
      </div>
    </>
  );
};

export default BookList;
