export const ADD_BOOK = 'ADD_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK'


export function addBook (book) {
    return {
        type: ADD_BOOK,
        book: {
            ...book,
            id: 10
        }
    }
}

export function removeBook (book) {
    return {
        type: REMOVE_BOOK,
        book
    }
}