import { useState, useContext } from "react";
import BooksContext from "../context/Books";

const BookCreate = () => {
  const ctx = useContext(BooksContext);
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    ctx.createBook(title);
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
};
export default BookCreate;
