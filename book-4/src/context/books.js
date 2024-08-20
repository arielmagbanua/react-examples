import {createContext, useCallback, useState} from "react";
import axios from "axios";

const BOOKS_API_BASE_URL = "http://localhost:3001/books";

const BooksContext = createContext();


function Provider({children}) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get(BOOKS_API_BASE_URL);
    setBooks(response.data)
  }

  const stableFetchBooks = useCallback(fetchBooks, []);

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

  const contextValues = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks: stableFetchBooks
  }

  return (
    <BooksContext.Provider value={contextValues}>
      {children}
    </BooksContext.Provider>
  )
}

export {Provider};
export default BooksContext;
