import React from 'react';
import Book from './Book';

function BookList({ books }) {
  return (
    <ul>
      {books.map((book) => (
        <Book 
        key={book.id} book={book} />
      ))}
     </ul>
  );
}

export default BookList;
