import { useState } from "react";

const BookEdit = ({ book, onEdit }) => {
  const [title, setTitle] = useState(book.title);

  const handleSubmit = (event) => {
    event.preventDefault();
    onEdit(book, title);
  };

  return (
    <div>
      <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="input"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button className="button is-primary">Update!</button>
      </form>
    </div>
  );
};
export default BookEdit;
