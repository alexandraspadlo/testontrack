import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import type { BookObj } from '../../../store/actions/crud/interface'
import type { BookProps } from './interface'

const CardBooks: FC<BookProps> = ({ books }) => {
    if (!books?.length) return (
        <Row>
            <Col className='mt-4'>
                <p className='h5 text-primary'>No books available!</p>
            </Col>
        </Row>
    )
    return (
        <Row>
            {books?.map?.((cv: BookObj) => (
                <Col xs={12} lg={4} key={uuidv4()} className='mt-4'>
                    <section className="w-100 h-100 bg-light p-3 rounded">
                        <p className="h5 text-primary mb-0">Title: <strong>{cv?.book_title}</strong></p>
                        <p className="mb-2">Author: <strong>{cv?.book_author}</strong></p>
                        <p className="mb-0">Year: <strong>{cv?.book_publication_year}</strong></p>
                        <p className="mb-0">Pages: <strong>{cv?.book_pages}</strong></p>
                        <p className="mb-0">Location: <strong>{[cv?.book_publication_city, cv?.book_publication_country].filter(obj => obj).join(', ')}</strong></p>
                    </section>
                </Col>
            ))}
        </Row>
    )
}

export default CardBooks
