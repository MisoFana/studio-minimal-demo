import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PinIcon, StoreIcon, PhoneIcon, CheckIcon } from '../icons'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sentDemo, setSentDemo] = useState(false)

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSentDemo(true)
  }

  return (
    <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      <span className="mb-3 block text-xs font-medium tracking-[0.18em] text-wood uppercase">
        Napisz do nas
      </span>
      <h1 className="mb-12 text-3xl text-wood-dark sm:text-4xl">Kontakt</h1>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <div className="mb-8 flex items-start gap-4">
            <StoreIcon className="mt-1 h-8 w-8 shrink-0 text-wood" />
            <div>
              <h3 className="mb-1 text-lg font-medium text-wood">E-mail</h3>
              <a href="mailto:kontakt.studiominimal@gmail.com" className="text-ink hover:text-wood">
                kontakt.studiominimal@gmail.com
              </a>
            </div>
          </div>

          <div className="mb-8 flex items-start gap-4">
            <PhoneIcon className="mt-1 h-8 w-8 shrink-0 text-wood" />
            <div>
              <h3 className="mb-1 text-lg font-medium text-wood">Telefon</h3>
              <p className="text-ink">
                Jakub &middot; <a href="tel:+48501952360" className="hover:text-wood">501 952 360</a>
                <br />
                Malwina &middot; <a href="tel:+48509304467" className="hover:text-wood">509 304 467</a>
              </p>
            </div>
          </div>

          <div className="mb-8 flex items-start gap-4">
            <PinIcon className="mt-1 h-8 w-8 shrink-0 text-wood" />
            <div>
              <h3 className="mb-1 text-lg font-medium text-wood">Nasz Showroom</h3>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Natura+Rzeczy+O%C5%82bi%C5%84ska+28+Wroc%C5%82aw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-wood"
              >
                Natura Rzeczy
                <br />
                Ołbińska 28
                <br />
                Wrocław, 50-237, Polska
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-ink">Twoje imię</span>
            <input
              required
              type="text"
              value={form.name}
              onChange={handleChange('name')}
              className="rounded-lg border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink outline-none transition focus:border-wood"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-ink">Twój adres mail</span>
            <input
              required
              type="email"
              value={form.email}
              onChange={handleChange('email')}
              className="rounded-lg border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink outline-none transition focus:border-wood"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-ink">Temat</span>
            <input
              required
              type="text"
              value={form.subject}
              onChange={handleChange('subject')}
              className="rounded-lg border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink outline-none transition focus:border-wood"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-ink">Twoja wiadomość (optional)</span>
            <textarea
              rows={5}
              value={form.message}
              onChange={handleChange('message')}
              className="resize-none rounded-lg border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink outline-none transition focus:border-wood"
            />
          </label>

          <button
            type="submit"
            className="mt-2 inline-block rounded-full border border-wood bg-wood px-8 py-3.5 text-sm font-medium tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-wood-dark hover:border-wood-dark"
          >
            Wyślij
          </button>

          {sentDemo && (
            <div className="flex items-start gap-2 rounded-lg bg-bg-alt p-3 text-xs leading-relaxed text-muted">
              <CheckIcon className="mt-0.5 shrink-0 text-wood" />
              <span>
                To wersja demo strony &mdash; formularz nie wysyła jeszcze wiadomości. Napisz bezpośrednio na{' '}
                <a href="mailto:kontakt.studiominimal@gmail.com" className="text-wood hover:text-wood-dark">
                  kontakt.studiominimal@gmail.com
                </a>
                .
              </span>
            </div>
          )}
        </form>
      </div>

      <p className="mt-16 text-center text-sm text-muted">
        <Link to="/" className="hover:text-wood">Strona główna</Link>
      </p>
    </section>
  )
}
