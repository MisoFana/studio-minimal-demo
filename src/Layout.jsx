import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import CartDrawer from './components/CartDrawer'
import BackToTop from './components/BackToTop'
import ScrollToTop from './ScrollToTop'
import pracownia from './assets/products/pracownia.jpg'
import logo from './assets/products/logo.png'

export default function Layout() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <ScrollToTop />
      <div
        className="fixed -inset-10 -z-10 scale-110 bg-cover bg-center brightness-60 saturate-110 blur-sm"
        style={{ backgroundImage: `url(${pracownia})` }}
      />
      <div
        className="relative z-0 mx-auto flex min-h-screen max-w-[1320px] flex-col bg-bg shadow-[0_0_80px_rgba(0,0,0,0.25)]"
        id="top"
      >
        <Header onCartClick={() => setCartOpen(true)} />
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

        <div className="flex-1">
          <Outlet />
        </div>

        <footer className="bg-ink px-6 py-10 text-center text-white/60">
          <img src={logo} alt="Studio Minimal" className="mx-auto mb-3 h-7 opacity-80 invert" />
          <p className="text-xs">Studio Minimal &mdash; demo nowej strony, wersja robocza</p>
        </footer>
      </div>
      <BackToTop hidden={cartOpen} />
    </>
  )
}
