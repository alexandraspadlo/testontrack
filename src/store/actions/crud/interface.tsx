export interface BookObj {
    id: number
    book_author: string[]
    book_title: string
    book_publication_year: number
    book_publication_country: string
    book_publication_city: string
    book_pages: number
}

export interface Books {
    books: BookObj[]
    count: number
}

interface FilterProp {
    type: string,
    values: string[]
}

export interface APIPayload {
    page?: number,
    itemsPerPage?: number,
    filters?: FilterProp[]
}

export type ReturnValueHere = Books // Assing the value from products that will receive
export type ArgumentTypeHere = APIPayload // assing the values from arguments... if none return void.