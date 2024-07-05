export interface BookObj {
    id: number
    book_author: string[]
    book_title: string
    book_publication_year: number
    book_publication_country: string
    book_publication_city: string
    book_pages: number
}

interface Books {
    books: BookObj[]
}

export type ReturnValueHere = Books // Assing the value from products that will receive
export type ArgumentTypeHere = void // assing the values from arguments... if none return void.