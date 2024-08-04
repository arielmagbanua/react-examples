import {useState} from "react";

function BookCreate({onCreate}) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onCreate(title);
  }

  return (
    <div className="book-create">
      <h3>Add A Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" type="text" onChange={(e) => setTitle(e.target.value)}/>
        <button className="button" type="submit">Create</button>
      </form>
    </div>
  );
}

export default BookCreate;
