import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

function BookList() {
  const {books} = useBooksContext();

  const renderBooks = books.map((book) => (
    <BookShow key={book.id} book={book}/>
  ))

  return (
    <div className="book-list">
      {renderBooks}
    </div>
  );
}

export default BookList;
