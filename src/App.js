import { useEffect, useContext } from "react";
import BooksContext from "./context/Books";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const ctx = useContext(BooksContext);

  useEffect(() => {
    ctx.getBooks();
  }, [ctx]);

  return (
    <div className="app">
      <h1>Reading list</h1>
      <BookList onDelete={ctx.deleteBook} onEdit={ctx.editBook} />
      <BookCreate />
    </div>
  );
}

export default App;
