import { render, screen, fireEvent } from '@testing-library/react'
import * as MockSchema from './data'
import Header from './Header'

const commonProps = {
    handlePage: jest.fn(),
    maxPage: 4,
    page: 1,
    setPage: jest.fn(),
    setFilter: jest.fn(),
    handlePost: jest.fn(),
    setItems: jest.fn()
}

describe('test Header component', () => {
    test('renders header with full props, first button disabled', async () => {
        render(<Header {...commonProps} />)
        expect(screen.getByText(/Here are a books available - check the list below/i)).toBeInTheDocument()
        expect(await screen.findByText(/Book list/i)).toBeInTheDocument()
    })
    test('renders previous disable button', async () => {
        render(<Header {...commonProps} />)
        expect(screen.getByText(/Previous/).className).toContain('disabled')
    })
    test('click next button', async () => {
        const mockFunction = jest.fn()
        render(<Header {...commonProps} handlePage={mockFunction} />)
        fireEvent.click(screen.getByText(/Next/))
        expect(mockFunction).toHaveBeenCalledTimes(1)
    })
    test('click previous button', async () => {
        const mockFunction = jest.fn()
        render(<Header {...commonProps} handlePage={mockFunction} />)
        fireEvent.click(screen.getByText(/Previous/))
        expect(mockFunction).toHaveBeenCalledTimes(1)
    })
    test('click find button', async () => {
        const mockFunction = jest.fn()
        render(<Header {...commonProps} handlePost={mockFunction} />)
        fireEvent.click(screen.getByText(/Find/))
        expect(mockFunction).toHaveBeenCalledTimes(1)
    })
    test('change selector', async () => {
        const mockFunction = jest.fn()
        render(<Header {...commonProps} setItems={mockFunction} />)
        fireEvent.change(screen.getByTestId('testSelect'), { target: { value: 100}})
        expect(mockFunction).toHaveBeenCalledTimes(1)
    })
    test('renders next disable button', async () => {
        render(<Header {...commonProps} page={4} />)
        expect(screen.getByText(/Next/).className).toContain('disabled')
    })
    test('should not renders without schema', async () => {
        MockSchema.default = null
        const { container } = render(<Header {...commonProps} />)
        expect(container).toBeEmptyDOMElement()
    })
})
