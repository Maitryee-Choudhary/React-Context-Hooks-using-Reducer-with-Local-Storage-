import React from 'react';
import { BookContext } from '../context/BookContext';

const BookDetails = ({book}) => {
    
   // const {removeBook} = React.useContext(BookContext);

    const {dispatch} = React.useContext(BookContext);

    return (
        // <li onClick={ () =>  removeBook(book.id)}>
        //     <div className='title'>
        //         {book.title}
        //     </div>
        //     <div className='author'>
        //         {book.author}
        //     </div>
        // </li>
        <li onClick={ () =>  dispatch({type:'REMOVE_BOOK', id : book.id})}>
        <div className='title'>
            {book.title}
        </div>
        <div className='author'>
            {book.author}
        </div>
    </li>
    )
}

export  default BookDetails;