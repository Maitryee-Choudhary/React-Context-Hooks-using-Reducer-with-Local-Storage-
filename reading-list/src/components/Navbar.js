import React from 'react';
import { BookContext } from '../context/BookContext';

const Navbar = () => {

    const {books}  = React.useContext(BookContext);
    return(
        <div className='navbar'>
            <h1>Reading List</h1>
            <p>Currently you have {books.length} books to get read...</p>
        </div>
    )
}

export default Navbar;