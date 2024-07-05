import { FC } from 'react'
import s from './BookList.module.scss'

const BookList: FC = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12 text-center">
                    <p className={`h1 ${s.pointer}`}>Book List</p>
                </div>
            </div>
        </div>
    )
}

export default BookList
