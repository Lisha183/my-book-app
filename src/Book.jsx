import React from 'react';
import book1 from './image/cruel.jpeg'; 
import book2 from './image/broken.jpeg';
import book3 from './image/1984.jpeg';
import book4 from './image/mockingbird.jpeg';
import book5 from './image/lord.jpeg';


function Book({ book }) {
  const bookImages = {
    1: book1,
    2: book2,
    3: book3,
    4: book4,
    5: book5,
  };
  return (
    
    <div className="bg-white p-4 rounded-lg shadow-md border flex flex-col items-center mb-4" style={{ maxWidth: '400px' }} >
    <img
        src={bookImages[book.id]}
        alt={book.title}
        className="w-full h-auto mb-2 rounded-md"
        style={{maxWidth: '200px'}}
      />
       
      
     
      <h3 className="text-xl font-semibold">{book.title}</h3>
      <p className="text-gray-600 italic">by {book.author}</p>
      <p className="break-after: all; text-align: center">{book.description}</p>

    </div>
   

  );

}

export default Book;
