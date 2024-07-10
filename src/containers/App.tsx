import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import BookList from '../components/BookList'

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<BookList />} />
                <Route path='*' element={<Navigate replace to='/' />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
