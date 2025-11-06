import { useState } from 'react'
import './App.css'

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookAuthor, setNewBookAuthor] = useState('');

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addBook = () => {
    if (newBookTitle && newBookAuthor) {
      const newBook = {
        id: Date.now(),
        title: newBookTitle,
        author: newBookAuthor
      };
      setBooks([...books, newBook]);
      setNewBookTitle('');
      setNewBookAuthor('');
    }
  };

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Library Management</h1>
        
        <input
          type="text"
          className="search-input"
          placeholder="Search by title or author"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="add-book-form">
          <input
            type="text"
            className="book-input"
            placeholder="New book title"
            value={newBookTitle}
            onChange={(e) => setNewBookTitle(e.target.value)}
          />
          <input
            type="text"
            className="book-input"
            placeholder="New book author"
            value={newBookAuthor}
            onChange={(e) => setNewBookAuthor(e.target.value)}
          />
          <button className="add-btn" onClick={addBook}>
            Add Book
          </button>
        </div>

        <div className="book-list">
          {filteredBooks.map(book => (
            <div key={book.id} className="book-item">
              <div className="book-info">
                <strong>{book.title}</strong> by {book.author}
              </div>
              <button 
                className="remove-btn" 
                onClick={() => removeBook(book.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
