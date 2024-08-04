import {useState} from "react";

function BookEdit({book, onSubmit}) {
  const [title, setTitle] = useState(book.title);
  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(book.id, title);
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