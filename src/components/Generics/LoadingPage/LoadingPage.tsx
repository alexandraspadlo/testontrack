import { FC } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const LoadingPage: FC = () => {
    return (
        <Container className='py-5'>
            <Row>
                <Col className='text-center'>
                    <p className='h2 text-primary'>LOADING . . . </p>
                </Col>
            </Row>
        </Container>
    )
}

export default LoadingPage
