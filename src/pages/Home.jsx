import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { PinIcon, StoreIcon, PhoneIcon, LeafIcon, TruckIcon, StampIcon, PuzzleIcon } from '../icons'
import { products } from '../data'

const featuredSlugs = [
  'stol-sofia',
  'stolik-xl-flow',
  'lawa-jesionowa-okragla-nr1',
  'biurko-debowe-sofia',
  'mandala-nr-10',
  'deska-drewniana-okragla-roz-l',
]
const featured = featuredSlugs
  .map((slug) => products.find((p) => p.slug === slug))
  .filter(Boolean)
import wnetrze from '../assets/products/wnetrze.jpg'
import pracownia from '../assets/products/pracownia.jpg'

const features = [
  { icon: LeafIcon, title: '100% hand made', text: 'Każdy mebel tworzony od podstaw ręcznie, bez masowej produkcji' },
  { icon: StampIcon, title: 'Lite drewno', text: 'Dąb i jesion najwyższej jakości, starannie impregnowane' },
  { icon: PuzzleIcon, title: 'Twój plaster drewna', text: 'Wysyłamy zdjęcia dostępnych plastrów — Ty wybierasz swój' },
  { icon: TruckIcon, title: 'Wysyłka w całej Polsce', text: 'Bezpieczne pakowanie i dostawa pod wskazany adres' },
]

export default function Home() {
  return (
    <>
      <section
        className="relative flex h-[86vh] min-h-[460px] items-center bg-cover bg-center sm:min-h-[520px]"
        style={{ backgroundImage: `url(${wnetrze})` }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(20,15,12,0.88)_0%,rgba(20,15,12,0.72)_55%,rgba(20,15,12,0.45)_100%)]" />
        <div className="relative max-w-2xl px-6 text-white sm:px-10 lg:px-16">
          <span className="mb-3 block text-sm font-medium tracking-[0.22em] text-gold uppercase">
            Pracownia stolarska &middot; Wrocław
          </span>
          <h1 className="text-4xl leading-tight -tracking-tight sm:text-5xl lg:text-6xl">
            Drewniane meble tworzone ręcznie
          </h1>
          <p className="mt-5 mb-8 max-w-md text-base leading-relaxed text-white/90 sm:text-lg">
            Malwina i Jakub Sobota &mdash; od plastra drewna do gotowego mebla w Twoim wnętrzu
          </p>
          <button
            onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block rounded-full border border-wood bg-wood px-8 py-3.5 text-sm font-medium tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-wood-dark hover:border-wood-dark"
          >
            Zobacz ofertę
          </button>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-8 bg-white px-6 py-14 sm:px-10 md:grid-cols-4 lg:px-16">
        {features.map((f) => (
          <div className="text-center" key={f.title}>
            <f.icon className="mx-auto mb-5 h-10 w-10 text-wood" />
            <h4 className="mb-2 text-xl text-wood-dark">{f.title}</h4>
            <p className="text-base leading-relaxed text-muted">{f.text}</p>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 items-center gap-10 px-6 py-16 sm:px-10 md:grid-cols-2 md:gap-16 md:py-24 lg:px-16">
        <img
          src={pracownia}
          alt="Pracownia Studio Minimal"
          className="aspect-4/3 w-full rounded-xl object-cover shadow-[0_30px_60px_-20px_rgba(36,29,25,0.3)]"
        />
        <div>
          <span className="mb-3 block text-xs font-medium tracking-[0.18em] text-wood uppercase">
            100% hand made
          </span>
          <h2 className="mb-4 text-3xl leading-tight text-wood-dark sm:text-4xl">
            Tworzymy meble, które zostają na lata
          </h2>
          <p className="text-base leading-loose text-muted">
            Nasze meble tworzymy od podstaw własnoręcznie, dokładając wszelkich starań
            do detali i odpowiedniej impregnacji drewna. Dąb i jesion to nasze ulubione
            rodzaje drewna &mdash; to z nich głównie powstają nasze stoliki, stoły i ławy.
          </p>
          <blockquote className="mt-7 border-l-2 border-gold pl-5 text-xl leading-snug italic text-ink sm:text-2xl">
            „Praca w drewnie daje nam poczucie tworzenia produktów na lata, które
            wprowadzają naturalny klimat i otulają wnętrze pięknem.”
            <cite className="mt-3 block text-xs font-sans tracking-wide text-muted uppercase not-italic">
              Malwina i Jakub Sobota
            </cite>
          </blockquote>
        </div>
      </section>

      <section className="px-6 pb-20 text-center sm:px-10 lg:px-16" id="oferta">
        <span className="mb-3 block text-xs font-medium tracking-[0.18em] text-wood uppercase">
          Nasze realizacje
        </span>
        <h2 className="mb-10 text-3xl text-wood-dark sm:mb-12 sm:text-4xl">Wybrane meble z pracowni</h2>
        <div className="grid grid-cols-1 gap-7 text-left sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard product={p} key={p.name} />
          ))}
        </div>
        <Link
          to="/kategoria/stoliki"
          className="mt-12 inline-block rounded-full border border-wood px-8 py-3.5 text-sm font-medium tracking-wide text-wood transition hover:bg-wood hover:text-white"
        >
          Zobacz wszystkie kategorie
        </Link>
      </section>

      <section className="bg-bg-alt px-6 py-16 text-center sm:px-10 md:py-24 lg:px-16" id="kontakt">
        <span className="mb-3 block text-xs font-medium tracking-[0.18em] text-wood uppercase">
          Odwiedź nas
        </span>
        <h2 className="mb-10 text-3xl text-wood-dark sm:mb-12 sm:text-4xl">
          Pracownia i conceptstore we Wrocławiu
        </h2>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-7 text-left sm:grid-cols-3">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Studio+Minimal+ul.+Rydygiera+47+Wroc%C5%82aw"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl bg-white p-9 shadow-[0_10px_30px_-18px_rgba(36,29,25,0.25)] transition hover:-translate-y-1 hover:shadow-[0_20px_36px_-16px_rgba(36,29,25,0.3)]"
          >
            <PinIcon className="mb-5 h-11 w-11 text-wood" />
            <h3 className="mb-2 text-xl font-medium tracking-wide text-wood">Pracownia</h3>
            <p className="text-base leading-relaxed text-muted">
              ul. Rydygiera 47
              <br />
              Wrocław
            </p>
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Natura+Rzeczy+ul.+O%C5%82bi%C5%84skiej+28+Wroc%C5%82aw"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl bg-white p-9 shadow-[0_10px_30px_-18px_rgba(36,29,25,0.25)] transition hover:-translate-y-1 hover:shadow-[0_20px_36px_-16px_rgba(36,29,25,0.3)]"
          >
            <StoreIcon className="mb-5 h-11 w-11 text-wood" />
            <h3 className="mb-2 text-xl font-medium tracking-wide text-wood">Conceptstore</h3>
            <p className="text-base leading-relaxed text-muted">
              Natura Rzeczy
              <br />
              ul. Ołbińskiej 28, Wrocław
            </p>
          </a>
          <div className="rounded-xl bg-white p-9 shadow-[0_10px_30px_-18px_rgba(36,29,25,0.25)] transition hover:-translate-y-1 hover:shadow-[0_20px_36px_-16px_rgba(36,29,25,0.3)]">
            <PhoneIcon className="mb-5 h-11 w-11 text-wood" />
            <h3 className="mb-2 text-xl font-medium tracking-wide text-wood">Kontakt</h3>
            <p className="text-base leading-relaxed text-muted">
              <a href="tel:+48501952360" className="block text-ink hover:text-wood">
                501 952 360
              </a>
              <a href="mailto:kontakt.studiominimal@gmail.com" className="block text-ink hover:text-wood">
                kontakt.studiominimal@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
