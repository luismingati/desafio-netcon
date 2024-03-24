import {Routes, Route, BrowserRouter } from 'react-router-dom'
import About from '../views/pages/about'
import NavLayout from '../views/layouts/nav-layout'
import HomePage from '../views/pages/home-page'

export function Router() {

  return (
    <BrowserRouter>
      <Routes>
          <Route element={<NavLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}