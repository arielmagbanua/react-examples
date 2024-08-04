import {useEffect, useState} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

const BOOKS_API_BASE_URL = "http://localhost:3001/books";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get(BOOKS_API_BASE_URL);
    return response.data;
  }

  useEffect( () => {
    fetchBooks().then( books => setBooks(books));
  }, []);

  const createBook = async (title) => {
    const response = await axios.post(BOOKS_API_BASE_URL, {
      title,
    })

    const updatedBooks = [
      ...books,
      response.data
    ]

    setBooks(updatedBooks);
  }

  const deleteBookById = async (id) => {
    await axios.delete(`${BOOKS_API_BASE_URL}/${id}`)

    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  }

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`${BOOKS_API_BASE_URL}/${id}`, {
      title: newTitle
    })

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {...book, ...response.data};
      }

      return book;
    })

    setBooks(updatedBooks);
  }

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook}/>
    </div>
  );
}

export default App;
