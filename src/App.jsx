import { useState } from 'react'
import BookList from './BookList';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import cruelImage from './image/cruel.jpeg';
import brokenImage from './image/broken.jpeg';
import image1984 from './image/1984.jpeg';
import mockingbirdImage from './image/mockingbird.jpeg';
import lordImage from './image/lord.jpeg';



function App() {
  const [books] = useState([
    { id: 1,
      
       title: 'The Cruel Prince', 
       author: 'Holly Black',
       description:'Jude was seven years old when her parents were murdered and she and her two sisters were stolen away to live in the treacherous High Court of Faerie',
       image: cruelImage,
      },
   
      
    { id: 2, 
      title: 'Once Upon A Broken Heart', 
      author: 'Stephanie Garber' ,
      description:' For as long as she can remember, Evangeline Fox has believed in true love and happy endings... until she learns that the love of her life will marry another.',
      image: brokenImage ,
    },  

    { id: 3, 
      title: '1984', 
      author: 'George Orwell',
      description:' Portrays a totalitarian society where constant surveillance, manipulation of truth, and suppression of individuality are the norm, exploring the dangers of unchecked government power and the importance of freedom and truth. ',
      image: image1984,
      },  

    { id: 4, 
      title: 'To Kill a Mockingbird', 
      author: 'Harper Lee' ,
      description:' A coming-of-age story set in 1930s Alabama, narrated by Scout Finch, as she and her brother Jem navigate their childhood and the harsh realities of racism and prejudice. ',
      image: mockingbirdImage,
    },  

    { id: 5, 
      title: 'The Lord of the Rings', 
      description:' The Lord of the Rings is the saga of a group of sometimes reluctant heroes who set forth to save their world from consummate evil.',
      author: 'J.R.R. Tolkien' ,
      image:lordImage,
    },  
    


  ])

  return (
    <div className="App">
      <h1>Book Library</h1>
      <br />
      <br />
      <BookList books={books} />
    </div>
 
  );
}

export default App
