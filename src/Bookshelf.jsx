import { useState } from 'react';

const Bookshelf = () => {
    //This defines the state
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({title: '', author: ''});
}
    <div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    {/* Form will go here */}
  </div>
  <div className="bookCardsDiv">{/* Book cards will display here */}</div>
</div>
  
  
  export default Bookshelf;
  
  