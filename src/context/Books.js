import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: title,
    });
    setBooks([...books, response.data]);
  };

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    setBooks(books.filter((book) => book.id !== id));
  };

  const editBook = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: title,
    });
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, ...response.data } : book
      )
    );
  };

  const valueToShare = {
    books,
    getBooks,
    createBook,
    deleteBook,
    editBook,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContext;
export { BooksProvider };
