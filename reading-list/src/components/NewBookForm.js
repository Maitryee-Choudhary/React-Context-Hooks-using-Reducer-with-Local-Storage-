import React, { useState } from 'react';
import { BookContext } from '../context/BookContext';

const NewBookForm = () => {
    
    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();

    //const {addBook} = React.useContext(BookContext);
    
    const {dispatch} = React.useContext(BookContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title,author);
        // addBook(title,author);
        dispatch({type:'ADD_BOOK', book:{title,author}})
        setAuthor('');
        setTitle('');
        
    }


    return(
        <form onSubmit={handleSubmit}>
            <input 
            type ="text"
            name = "title"
            placeholder='Book title'
            value = {title}
             onChange = { ( e) => setTitle(e.target.value)}
             required
            />
            <input 
             type = "text"
             name="author"
             placeholder='Book Author'
             value={author}
             onChange = { ( e ) => setAuthor(e.target.value)}
             required
            />
            <input type="submit" value="add book"></input>
        </form>

    )
}

export default NewBookForm;