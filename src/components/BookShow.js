import BookEdit from "./BookEdit";
import { useState, useContext } from "react";
import BooksContext from "../context/Books";

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);
  const ctx = useContext(BooksContext);

  const handleSubmit = (book, newTitle) => {
    ctx.editBook(book.id, newTitle);
    setShowEdit(false);
  };

  return (
    <div className="book-show">
      <img
        alt="book cover"
        src={`https://picsum.photos/seed/${book.id}/300/200`}
      />
      {showEdit ? <BookEdit book={book} onEdit={handleSubmit} /> : book.title}
      <div className="actions">
        <button className="edit" onClick={() => setShowEdit(!showEdit)}>
          Edit
        </button>
        <button className="delete" onClick={() => ctx.deleteBook(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default BookShow;
