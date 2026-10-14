import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './CartContext'
import Layout from './Layout'
import Home from './pages/Home'
import Category from './pages/Category'
import ProductDetail from './pages/ProductDetail'
import Search from './pages/Search'
import Contact from './pages/Contact'

export default function App() {
  return (
    <CartProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/kategoria/:slug" element={<Category />} />
          <Route path="/produkt/:slug" element={<ProductDetail />} />
          <Route path="/szukaj" element={<Search />} />
          <Route path="/kontakt" element={<Contact />} />
        </Route>
      </Routes>
    </CartProvider>
  )
}
