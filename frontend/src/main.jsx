import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import HomePage from './pages/HomePage.tsx'
import VisualizationPage from './pages/VisualizationPage.tsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/visualisation/:categoryId" element={<VisualizationPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
