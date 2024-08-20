import {useState} from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({book, onSubmit}) {
  const {editBookById} = useBooksContext();

  const [title, setTitle] = useState(book.title);
  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit();
    editBookById(book.id, title);
  }

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input type="text" className="input" value={title} onChange={handleChange}/>
      <button className="button is-primary" onClick={handleSubmit}>
        Save
      </button>
    </form>
  );
}

export default BookEdit;