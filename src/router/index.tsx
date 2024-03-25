import {Routes, Route, BrowserRouter } from 'react-router-dom'
import About from '../views/pages/about'
import NavLayout from '../views/layouts/nav-layout'
import HomePage from '../views/pages/home-page'
import { AuthProvider } from '../contexts/authContext'

export function Router() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<NavLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}