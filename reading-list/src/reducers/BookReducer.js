
import uuid from 'uuid/v1';

export const BookReducer = (state,action) => {

    switch(action.type)
    {
        case 'ADD_BOOK':
            {
                return [...state,{
                    title: action.book.title,
                    author: action.book.author,
                    id : uuid()
                }]
            }
        case 'REMOVE_BOOK':
            {
                return state.filter( (b) => {
                    return b.id !== action.id
                })
            }
        default:
            return state
    }
}