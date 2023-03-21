import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CargueBD } from '../components/CargueBD'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<CargueBD />} />
        </Routes>
    </BrowserRouter>
  )
}
