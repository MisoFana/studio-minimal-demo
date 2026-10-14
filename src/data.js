import sofia from './assets/products/sofia.jpg'
import stolikMalwo from './assets/products/stolik-malwo.jpg'
import stolikRobinia from './assets/products/stolik-robinia.jpg'
import stolikFungo from './assets/products/stolik-fungo.jpg'
import lawkaMondo from './assets/products/lawka-mondo.jpg'
import stolikRyflowany from './assets/products/stolik-ryflowany.jpg'

import flow1 from './assets/products/flow-1.jpg'
import flow2 from './assets/products/flow-2.jpg'
import pieniek1 from './assets/products/pieniek-1.jpg'
import pieniek2 from './assets/products/pieniek-2.jpg'

import frank1 from './assets/products/frank-1.jpg'
import frank2 from './assets/products/frank-2.jpg'
import roe1 from './assets/products/roe-1.jpg'
import roe2 from './assets/products/roe-2.jpg'

import lawaLoft1 from './assets/products/lawa-loft-1.jpg'
import lawaLoft2 from './assets/products/lawa-loft-2.jpg'
import lawaJesion1 from './assets/products/lawa-jesion-1.jpg'
import lawaJesion2 from './assets/products/lawa-jesion-2.jpg'

import biurko1a from './assets/products/biurko1-1.jpg'
import biurko1b from './assets/products/biurko1-2.jpg'
import biurkoSofia1 from './assets/products/biurko-sofia-1.jpg'
import biurkoSofia2 from './assets/products/biurko-sofia-2.jpg'

import deskaL1 from './assets/products/deska-l-1.jpg'
import deskaL2 from './assets/products/deska-l-2.jpg'

import mandala10 from './assets/products/mandala-10-1.jpg'
import eukaliptus1 from './assets/products/eukaliptus-1.jpg'

export const categories = [
  {
    name: 'Stoliki',
    slug: 'stoliki',
    subcategories: ['Ze wzorem', 'Opalane', 'Naturalne', 'W kolorze', 'Zestawy stolików'],
  },
  { name: 'Stoły', slug: 'stoly' },
  { name: 'Ławy', slug: 'lawy' },
  { name: 'Biurka', slug: 'biurka' },
  {
    name: 'Deski i podkładki',
    slug: 'deski-i-podkladki',
    subcategories: ['Deski kuchenne', 'Podkładki', 'Opalane', 'Organiczne', 'Hexagonalne', 'Prostokątne', 'Zestawy desek'],
  },
  {
    name: 'Na ścianę',
    slug: 'na-sciane',
    subcategories: ['Grafika plastry drewna', 'Mandale', 'Roślinne obrazy'],
  },
]

export const products = [
  // Stoliki
  {
    slug: 'stolik-malwo',
    name: 'Stolik Malwo',
    price: '1 200 zł',
    img: stolikMalwo,
    gallery: [stolikMalwo],
    desc: 'Minimalistyczna forma, naturalny rysunek słojów',
    fullDesc: 'Minimalistyczny stolik o prostej, rzeźbiarskiej formie. Naturalny rysunek słojów dębu podkreśla charakter każdego egzemplarza.',
    tag: 'Stoliki',
    subcategory: 'Naturalne',
    material: 'Dąb',
  },
  {
    slug: 'stolik-z-robinii-akacjowej',
    name: 'Stolik z robinii akacjowej',
    price: '1 300 zł',
    img: stolikRobinia,
    gallery: [stolikRobinia],
    desc: 'Unikalny plaster drewna, każdy egzemplarz inny',
    fullDesc: 'Stolik wykonany z naturalnego plastra robinii akacjowej. Nieregularny kształt i usłojenie sprawiają, że każdy egzemplarz jest unikatowy.',
    tag: 'Stoliki',
    subcategory: 'Naturalne',
    material: 'Robinia',
  },
  {
    slug: 'stolik-fungo',
    name: 'Stolik Fungo',
    price: '1 300 zł',
    img: stolikFungo,
    gallery: [stolikFungo],
    desc: 'Rzeźbiona forma, drewno dębowe',
    fullDesc: 'Rzeźbiona, organiczna forma inspirowana naturą. Wykonana ręcznie z litego drewna dębowego.',
    tag: 'Stoliki',
    subcategory: 'Naturalne',
    material: 'Dąb',
  },
  {
    slug: 'stolik-ryflowany',
    name: 'Stolik Ryflowany',
    price: '1 300 zł',
    img: stolikRyflowany,
    gallery: [stolikRyflowany],
    desc: 'Charakterystyczne ryflowanie, satynowy wosk',
    fullDesc: 'Stolik z charakterystycznym, ręcznie wykonanym ryflowaniem na blacie. Wykończony satynowym woskiem podkreślającym fakturę drewna.',
    tag: 'Stoliki',
    subcategory: 'Naturalne',
    material: 'Dąb',
  },
  {
    slug: 'stolik-xl-flow',
    name: 'Stolik XL Flow',
    price: '550 zł',
    img: flow1,
    gallery: [flow1, flow2],
    desc: 'Minimalistyczna forma inspirowana stylem skandynawskim',
    fullDesc: 'Nasz czołowy produkt — stolik o minimalistycznym charakterze, zainspirowany skandynawską czystością formy, z charakterystycznym klinem i trzema nóżkami w „skarpetkach”. Do produkcji wykorzystujemy ekologiczne farby.',
    tag: 'Stoliki',
    subcategory: 'Ze wzorem',
    material: 'Dąb',
  },
  {
    slug: 'pieniek-opalany-palo',
    name: 'Pieniek opalany Palo',
    price: '1 100 zł',
    img: pieniek1,
    gallery: [pieniek1, pieniek2],
    desc: 'Opalany pieniek sosnowy, stolik kawowy lub element dekoracji',
    fullDesc: 'Drewniany, opalany pieniek Palo wykonany ręcznie w 100% z drewna sosnowego. Sprawdzi się świetnie jako stolik kawowy do salonu, podstawa pod sprzęt muzyczny czy element wystroju wnętrza.',
    tag: 'Stoliki',
    subcategory: 'Opalane',
    material: 'Sosna',
  },

  // Stoły
  {
    slug: 'stol-sofia',
    name: 'Stół Sofia',
    price: '2 400 zł',
    img: sofia,
    gallery: [sofia],
    desc: 'Lite drewno dębowe, ręcznie wykończone',
    fullDesc: 'Stół Sofia — lite drewno dębowe, ręcznie wykończone. Subtelna, zaokrąglona forma blatu nawiązuje do stylu art déco.',
    tag: 'Stoły',
    material: 'Dąb',
  },
  {
    slug: 'stol-drewniany-frank',
    name: 'Stół drewniany Frank',
    price: '1 900 zł',
    img: frank1,
    gallery: [frank1, frank2],
    desc: 'Stół dębowy na metalowych profilach, wykonany w 100% ręcznie',
    fullDesc: 'Stół dębowy na metalowych profilach. Wykonany w 100% własnoręcznie — połączenie litego drewna i metalu w industrialnym stylu.',
    tag: 'Stoły',
    material: 'Dąb',
  },
  {
    slug: 'stol-roe-kwadratowy-90x90-cm',
    name: 'Stół drewniany ROE kwadratowy dębowy',
    price: '2 200 zł',
    img: roe1,
    gallery: [roe1, roe2],
    desc: 'Lity dąb, 90×90 cm, lakier matowy',
    fullDesc: 'Ręcznie tworzony stół z litego drewna dębowego. Wymiary: 90×90 cm, wysokość 75 cm, grubość blatu 4 cm, lakier matowy. Solidna, minimalistyczna forma pasująca zarówno do wnętrza loftowego, jak i skandynawskiego.',
    tag: 'Stoły',
    material: 'Dąb',
  },

  // Ławy
  {
    slug: 'lawka-mondo',
    name: 'Ławka Mondo',
    price: '699 zł',
    img: lawkaMondo,
    gallery: [lawkaMondo],
    desc: 'Lekka, uniwersalna forma do każdego wnętrza',
    fullDesc: 'Lekka, uniwersalna ławka pasująca do każdego wnętrza. Wykonana ręcznie z litego jesionu.',
    tag: 'Ławy',
    material: 'Jesion',
  },
  {
    slug: 'lawa-debowa-loft-nr-1',
    name: 'Ława dębowa Loft Nr.1',
    price: '720 zł',
    img: lawaLoft1,
    gallery: [lawaLoft1, lawaLoft2],
    desc: 'Lite drewno dębowe i metalowy stelaż',
    fullDesc: 'Ława dębowa wykonana z litego drewna i metalowego stelaża. Drewno jest selekcjonowane i odpowiednio suszone — wytrzymała, solidna konstrukcja z możliwością wyboru sposobu zabezpieczenia drewna.',
    tag: 'Ławy',
    material: 'Dąb',
  },
  {
    slug: 'lawa-jesionowa-okragla-nr1',
    name: 'Ława jesionowa Okrągła Nr 1',
    price: '1 090 zł',
    img: lawaJesion1,
    gallery: [lawaJesion1, lawaJesion2],
    desc: 'Autorski projekt, 100% lity jesion',
    fullDesc: 'Jesionowa ława — autorski projekt i wykonanie. Naturalna, wyrafinowana konstrukcja i niezwykle barwne usłojenie jesionu.',
    tag: 'Ławy',
    material: 'Jesion',
  },

  // Biurka
  {
    slug: 'biurko-nr-1',
    name: 'Biurko Nr.1',
    price: '890 zł',
    img: biurko1a,
    gallery: [biurko1a, biurko1b],
    desc: 'Lity dąb, szuflada wyłożona filcem',
    fullDesc: 'Biurko drewniane wykonane z litego drewna dębowego z szufladą — wyłożoną filcem, ze skórzanym paskiem. Możliwość wyboru wysokości, koloru oraz rodzaju blatu.',
    tag: 'Biurka',
    material: 'Dąb',
  },
  {
    slug: 'biurko-debowe-sofia',
    name: 'Biurko Sofia',
    price: '1 800 zł',
    img: biurkoSofia1,
    gallery: [biurkoSofia1, biurkoSofia2],
    desc: 'Subtelna forma w stylu art deco',
    fullDesc: 'Biurko dębowe Sofia z szufladą. Blat został podcięty i zaokrąglony, dzięki czemu cała forma jest subtelna i nawiązuje do stylu art déco. Zaimpregnowane wysokiej klasy lakierem matowym.',
    tag: 'Biurka',
    material: 'Dąb',
  },

  // Deski i podkładki
  {
    slug: 'deska-drewniana-okragla-roz-l',
    name: 'Deska drewniana okrągła roz. L',
    price: '115 zł',
    img: deskaL1,
    gallery: [deskaL1, deskaL2],
    desc: 'Lity dąb, idealna do kuchni i jadalni',
    fullDesc: 'Drewniana okrągła deska wykonana ręcznie z drewna dębowego. Stworzona tak, aby zapewnić pełną ergonomię w kuchni i jadalni — jednocześnie będzie piękną dekoracją wnętrza.',
    tag: 'Deski i podkładki',
    subcategory: 'Deski kuchenne',
    material: 'Dąb',
  },

  // Na ścianę
  {
    slug: 'mandala-nr-10',
    name: 'Mandala nr 10',
    price: '340 zł',
    img: mandala10,
    gallery: [mandala10],
    desc: 'Ręcznie rysowana mandala na drewnie',
    fullDesc: 'Obraz na drewnie — Mandala nr 10. Ręcznie rysowany wzór na naturalnym plastrze drewna, gotowy do powieszenia na ścianie.',
    tag: 'Na ścianę',
    subcategory: 'Mandale',
    material: 'Dąb',
  },
  {
    slug: 'obraz-z-roslina-w-szkle-eukaliptus-m',
    name: 'Obraz z rośliną w szkle. Eukaliptus M',
    price: '155 zł',
    img: eukaliptus1,
    gallery: [eukaliptus1],
    desc: 'Naturalny obraz ze stabilizowaną rośliną',
    fullDesc: 'Naturalny obraz z rośliną stabilizowaną w szkle — Eukaliptus. Minimalistyczny obraz z kawałkiem natury, niewymagający żadnej opieki. Stabilizacja to ekologiczny proces, któremu poddawane są starannie wyselekcjonowane rośliny.',
    tag: 'Na ścianę',
    subcategory: 'Roślinne obrazy',
  },
]

export const priceToNumber = (price) => parseFloat(price.replace(/[^\d]/g, ''))
