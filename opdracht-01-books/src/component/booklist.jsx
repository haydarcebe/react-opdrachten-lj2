import { useState } from 'react';
import Book from './book.jsx';
import BookCounter from './bookCounter.jsx';

const BookList = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'Titel 1', author: 'Auteur 1', image: '/images/boek1.jpg' },
    { id: 2, title: 'Titel 2', author: 'Auteur 2', image: '/images/boek2.jpg' },
    { id: 3, title: 'Titel 3', author: 'Auteur 3', image: '/images/boek3.jpg' },
  ]);

  return (
    <section>
      <BookCounter count={books.length} />
      <section className="book-list">
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            image={book.image}
          />
        ))}
      </section>
    </section>
  );
};

export default BookList;