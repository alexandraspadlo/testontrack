import { FC } from 'react'
import { PagProps } from './interface'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import schema from './data'
import s from './Header.module.scss'

const Header: FC<PagProps> = ({ handlePage, maxPage, page, handlePost, setFilter, filter, setPage, setItems, itemsPerPage }) => {
    if (!schema || !handlePage || !setFilter || !handlePost || !setPage || !setItems) return null
    const { title, subTitle } = schema
    return (
        <Row>
            <Col xs={12} className='text-center'>
                <p className={`h1 text-primary mb-3`}>{title}</p>
                <p className={`h5 text-muted mb-4`}>{subTitle}</p>
            </Col>
            <Col xs={12} lg={5} className=' mb-3 mb-lg-0'>
                <p className='mb-1'>Search:</p>
                <Row>
                    <Col xs={8}>
                        <input className="form-control" onChange={(e) => setFilter(e.target.value)} value={filter || ''} type="text" placeholder="Title, author, etc" aria-label="Title, author, etc" />
                    </Col>
                    <Col xs={4}>
                        <Button onClick={() => {
                            if (page !== 1) setPage(1)
                            return handlePost()
                        }} variant="outline-success">Find</Button>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} lg={2} className='mb-3 mb-lg-0'>
                <p className='mb-1'>Items per page:</p>
                <Form.Select data-testid="testSelect" value={itemsPerPage} onChange={(e) => setItems(Number(e.target.value))} className={`${s.cust} px-2`}>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </Form.Select>
            </Col>
            <Col xs={12} lg={5} className='text-lg-end text-center mb-3 mb-lg-0'>
                <section className='w-100'>
                    <p className='mb-1'><span>Page: <strong>{page}</strong></span><span className='ms-3'>Max page: <strong>{maxPage}</strong></span></p>
                    <Button onClick={() => handlePage()} className={`me-3 ${page <= 1 ? 'disabled' : ''}`} variant="warning">Previous</Button>
                    <Button onClick={() => handlePage(true)} className={`${page >= maxPage ? 'disabled' : ''}`} variant="primary">Next</Button>
                </section>
            </Col>
        </Row>
    )
}

export default Header
