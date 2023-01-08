import React, { createContext, useState, useReducer, useEffect } from 'react';
import uuid from 'uuid/v1';
import { BookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

export const BookContextProvider = ({children}) => {

    //const [books,setBooks] = useState([{title:'name of the wind', author:'XYZZ', id:1}]);

    // const addBook = (title,author) => {
    //     setBooks([...books,{title:title, author:author, id: uuid()}])
    // }

    // const removeBook = (id) => {
    //     setBooks(books.filter( (b) => {
    //         return b.id !== id
    //     }));
    // }

     //using Reducer
     const [books,dispatch] = useReducer(BookReducer, [] , () => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
     });

     //adding local storage
     //everytime books state update will be called
     useEffect( () => {
          localStorage.setItem('books', JSON.stringify(books));
     },[books])


    return(
        <BookContext.Provider value={{books:books, dispatch}}>
           {children}
        </BookContext.Provider>
    )
}