 export interface PagProps {
    handlePage: (param?: boolean) => void
    maxPage: number
    page: number
    filter: string | null | undefined
    setFilter: (param: string | undefined) => void
    setPage: (param: number) => void
    handlePost: () => void
}