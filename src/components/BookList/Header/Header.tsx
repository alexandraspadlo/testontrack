import { FC } from 'react'
import { PagProps } from './interface'
import schema from './data'

const Header: FC<PagProps> = ({ handlePage, maxPage, page }) => {
    if(!schema || !handlePage || !maxPage || !page) return null
    const { title, subTitle } = schema
    return (
        <div className="row">
            <div className="col-12 text-center">
                <p className={`h1 text-primary mb-3`}>{title}</p>
                <p className={`h5 text-muted mb-4`}>{subTitle}</p>
            </div>
            <div className='col-12 text-end'>
                <section className='w-100'>
                    <span className='d-inline-block me-4'><span>Page: <strong>{page}</strong></span><span className='ms-3'>Max page: <strong>{maxPage}</strong></span></span>
                    <span aria-hidden="true" onClick={() => handlePage()} className={`btn btn-warning d-inline-block me-3 ${page <= 1 ? 'disabled' : ''}`}>Previous</span>
                    <span aria-hidden="true" onClick={() => handlePage(true)} className={`btn btn-primary d-inline-block ${page >= maxPage ? 'disabled' : ''}`}>Next</span>
                </section>
            </div>
        </div>
    )
}

export default Header
