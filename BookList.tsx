// src/components/BookList.tsx
import React from 'react';
import { Book } from '../interfaces/book.interface';

interface BookListProps {
    books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
    return (
        <div>
            <h2>Lista de Livros</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <strong>{book.title}</strong> - {book.author} ({book.year})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
