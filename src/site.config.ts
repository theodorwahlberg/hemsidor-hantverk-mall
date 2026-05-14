// =============================================================================
// DUMMY-DATA – ersätt allt nedan med kundens riktiga uppgifter innan deploy.
// "Lindberg Snickeri" är PÅHITTAD för demo-syfte.
// =============================================================================

export const site = {
  name: "Lindberg Snickeri",
  shortName: "Lindberg",
  tagline: "Inredning, kök och fast snickeri för folk som vill att hantverket syns.",
  city: "Sollentuna",
  ownerName: "Jonas Lindberg",
  yearStarted: 2008,
  phone: "08-555 47 21",
  email: "jonas@lindbergsnickeri.se",
  address: {
    street: "Norrviksvägen 8",
    postal: "192 65 Sollentuna",
    mapsUrl: "https://www.google.com/maps?q=Sollentuna",
  },
  social: {
    instagram: "https://instagram.com/lindbergsnickeri",
  },
  hours: [
    { day: "Måndag", time: "07:00 – 17:00" },
    { day: "Tisdag", time: "07:00 – 17:00" },
    { day: "Onsdag", time: "07:00 – 17:00" },
    { day: "Torsdag", time: "07:00 – 17:00" },
    { day: "Fredag", time: "07:00 – 15:00" },
    { day: "Lördag", time: "Vid avtal" },
    { day: "Söndag", time: "Stängt" },
  ],
};

export interface Service {
  no: string;
  roman: string;
  name: string;
  short: string;
  details: string;
  duration: string;
  price: string;
}

export const services: Service[] = [
  {
    no: "01", roman: "I.", name: "Köksrenovering",
    short: "Skåp, stommar, bänkskivor i sten eller massivt trä.",
    details: "Vi gör allt från komplett ombyggnad till att bara byta luckor och bänkskivor. Standard är massiv ek eller björk, men vi jobbar gärna med valnöt, ask och teak för speciella jobb. Kalkyl ges innan vi börjar.",
    duration: "3–6 veckor", price: "fr. 85 000 kr",
  },
  {
    no: "02", roman: "II.", name: "Badrumsinredning",
    short: "Tvättställsskåp, hyllor och inbyggda lösningar.",
    details: "Vi specialdesignar inredning som klarar fukt och daglig användning. Massivt trä med rätt ytbehandling håller i decennier. ROT-avdrag tillämpligt på arbetstid.",
    duration: "2–4 veckor", price: "fr. 35 000 kr",
  },
  {
    no: "03", roman: "III.", name: "Bokhyllor och förvaring",
    short: "Inbyggda hyllsystem från golv till tak, anpassade för rummet.",
    details: "Mått tas på plats. Vi ritar tillsammans, du godkänner, vi bygger. Hyllor anpassade för böcker, ljudutrustning, kläder eller blandat. Allt tillverkas i vår verkstad och monteras hos er.",
    duration: "3–5 veckor", price: "fr. 28 000 kr",
  },
  {
    no: "04", roman: "IV.", name: "Fast inredning",
    short: "Garderober, hallmöbler, fönsterbänkar och liknande.",
    details: "Skräddarsydda lösningar för utrymmen där standardmöbler inte passar. Vinkel, tak eller golv som lutar — vi anpassar.",
    duration: "2–4 veckor", price: "fr. 22 000 kr",
  },
  {
    no: "05", roman: "V.", name: "Mindre snickerijobb",
    short: "Foder, lister, dörrar, fönster, reparationer.",
    details: "För dig som har en bit som behöver bytas eller en gammal möbel som behöver lagas. Vi tar mindre jobb under lågsäsong (sommar).",
    duration: "1–5 dagar", price: "695 kr/tim",
  },
];

export interface Project {
  plate: string;
  title: string;
  description: string;
  year: string;
  location: string;
  material: string;
}

export const projects: Project[] = [
  {
    plate: "Plate 01", title: "Helt nytt kök i Edsbergsvilla",
    description: "Skåp i massiv ek, bänkskiva i kalksten från Gotland. Luckor med karm-profil från 1920-tal som vi anpassade till modern köks-layout.",
    year: "2026", location: "Edsberg, Sollentuna", material: "Massiv ek + Gotländsk kalksten",
  },
  {
    plate: "Plate 02", title: "Bibliotek från golv till tak",
    description: "8 meter bokhylla, anpassad för ett snedställt tak. Tre olika hyll-djup för böcker, konst och ljudutrustning.",
    year: "2025", location: "Vasastan, Stockholm", material: "Cypress med oljeyta",
  },
  {
    plate: "Plate 03", title: "Inbyggd hallmöbel",
    description: "5 meter förvaring som kombinerar garderob, skoförvaring och en inbyggd bänk. Massiv björk med eklad detalj.",
    year: "2025", location: "Häggvik, Sollentuna", material: "Björk + ek-detaljer",
  },
  {
    plate: "Plate 04", title: "Badrumsinredning med specialarmatur",
    description: "Tvättställsskåp i lakerat trä, kompletterat med inbyggd nisch för förvaring och belysning.",
    year: "2024", location: "Bromma, Stockholm", material: "Lakerat björk + mässingsdetaljer",
  },
];

export const stats = [
  { value: "18+", label: "År som snickeri" },
  { value: "3", label: "Hantverkare" },
  { value: "150+", label: "Levererade jobb" },
  { value: "12 mån", label: "Garanti på allt" },
];
