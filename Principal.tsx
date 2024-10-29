// src/Principal.tsx
import React, { useState } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import { Book } from './interfaces/book.interface';

const Principal: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);

    const addBook = (book: Book) => {
        setBooks((prevBooks) => [...prevBooks, book]);
    };

    return (
        <div className="App">
            <h1>Cadastro de Livros</h1>
            <BookForm onAddBook={addBook} />
            <BookList books={books} />
        </div>
    );
};

export default Principal;
