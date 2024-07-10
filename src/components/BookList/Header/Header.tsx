import { FC } from 'react'
import { PagProps } from './interface'
import schema from './data'
import s from './Header.module.scss'

const Header: FC<PagProps> = ({ handlePage, maxPage, page, handlePost, setFilter, filter, setPage, setItems, itemsPerPage }) => {
    if (!schema || !handlePage || !setFilter || !handlePost || !setPage || !setItems) return null
    const { title, subTitle } = schema
    return (
        <div className="row">
            <div className="col-12 text-center">
                <p className={`h1 text-primary mb-3`}>{title}</p>
                <p className={`h5 text-muted mb-4`}>{subTitle}</p>
            </div>
            <div className='col-12 col-lg-5 mb-3 mb-lg-0'>
                <p className='mb-1'>Search:</p>
                <div className='row'>
                    <div className='col-8'>
                        <input className="form-control" onChange={(e) => setFilter(e.target.value)} value={filter || ''} type="text" placeholder="Title, author, etc" aria-label="Title, author, etc" />
                    </div>
                    <div className='col-4'>
                        <span onClick={() => {
                            if (page !== 1) setPage(1)
                            return handlePost()
                        }} className="btn float-left btn-outline-success">Find</span>
                    </div>
                </div>
            </div>
            <div className='col-12 col-lg-2 mb-3 mb-lg-0'>
                <p className='mb-1'>Items per page:</p>
                <select data-testid="testSelect" value={itemsPerPage} onChange={(e) => setItems(Number(e.target.value))} className={`${s.cust} px-2`}>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </div>
            <div className='col-12 col-lg-5 text-lg-end text-center mb-3 mb-lg-0'>
                <section className='w-100'>
                    <p className='mb-1'><span>Page: <strong>{page}</strong></span><span className='ms-3'>Max page: <strong>{maxPage}</strong></span></p>
                    <span aria-hidden="true" onClick={() => handlePage()} className={`btn btn-warning d-inline-block me-3 ${page <= 1 ? 'disabled' : ''}`}>Previous</span>
                    <span aria-hidden="true" onClick={() => handlePage(true)} className={`btn btn-primary d-inline-block ${page >= maxPage ? 'disabled' : ''}`}>Next</span>
                </section>
            </div>
        </div>
    )
}

export default Header
