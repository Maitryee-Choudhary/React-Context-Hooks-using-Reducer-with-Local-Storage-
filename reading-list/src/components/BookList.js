import React from 'react';
import { BookContext } from '../context/BookContext';
import BookDetails from './BookDetails';
const BookList = () => {

    const {books} = React.useContext(BookContext);
    console.log(books);
    return(
        books.length ? 
        <div className='book-list'>
             {books.map(book => {
                return ( <BookDetails book={book} key ={book.id} />)
             })}
        </div>
        :
        <div className='empty'>
            No books to read
        </div>
    )
}

export default BookList;