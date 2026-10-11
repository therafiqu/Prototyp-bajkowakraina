export const phoneDisplay = "510 200 558";
export const phoneHref = "tel:+48510200558";

export type Place = "Przedszkole" | "Żłobek";

export type Location = {
  id: "przedszkole" | "zlobek";
  place: Place;
  name: string;
  ages: string;
  street: string;
  city: string;
  email: string;
  mapEmbed: string;
  mapsHref: string;
  reviewHref: string;
  facebook: string;
  facebookLabel: string;
  image: string;
  imageAlt: string;
  blurb: string;
};

export const locations: Location[] = [
  {
    id: "przedszkole",
    place: "Przedszkole",
    name: "Przedszkole",
    ages: "dzieci 2,5-6 lat",
    street: "ul. 29 Listopada 12D/1",
    city: "32-050 Skawina",
    email: "przedszkole.radziszowska@op.pl",
    mapEmbed:
      "https://maps.google.com/maps?q=ul.+29+Listopada+12D,+32-050+Skawina&hl=pl&z=16&output=embed",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=ul.+29+Listopada+12D%2F1+32-050+Skawina",
    reviewHref:
      "https://www.google.com/search?q=Przedszkole%20Bajkowa%20Kraina%2C%20Skawina#lrd=0x47165d728d2d5f4f:0x6cbeb9d104bdeea2,3",
    facebook:
      "https://www.facebook.com/pages/Przedszkole-Bajkowa-Kraina/227851290591685",
    facebookLabel: "Przedszkole na Facebooku",
    image: "/media/rysunki.jpg",
    imageAlt:
      "Dziecko i opiekunka rysują razem przy stoliku",
    blurb:
      "Pierwsze niepubliczne przedszkole w Skawinie. Przygotowujemy dzieci do szkoły przez zabawę, ruch i codzienne, spokojne rytuały.",
  },
  {
    id: "zlobek",
    place: "Żłobek",
    name: "Żłobek",
    ages: "młodsze dzieci, ok. 1–3 lat",
    street: "ul. Radziszowska 22/1",
    city: "32-050 Skawina",
    email: "klub.radziszowska@op.pl",
    mapEmbed:
      "https://maps.google.com/maps?q=ul.+Radziszowska+22,+32-050+Skawina&hl=pl&z=16&output=embed",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=ul.+Radziszowska+22%2F1+32-050+Skawina",
    reviewHref:
      "https://www.google.com/search?q=%C5%BB%C5%82obek%20Bajkowa%20Kraina%2C%20Skawina#lrd=0x4716675e0e8e3ad1:0x6afa58d38bd24d4a,3",
    facebook:
      "https://www.facebook.com/pages/Klub-Malucha-%C5%BB%C5%82obek-Bajkowa-Kraina/1617642635148321",
    facebookLabel: "Żłobek na Facebooku",
    image: "/media/aparat.jpg",
    imageAlt:
      "Małe dziecko w krzesełku trzyma zabawkowy aparat fotograficzny",
    blurb:
      "Żłobek otwarty w 2015 roku. Kameralna opieka, bliskość i dużo swobodnej zabawy — także na własnym placu zabaw.",
  },
];

export const nav = [
  { href: "/o-nas", label: "O nas" },
  { href: "/oferta", label: "Oferta" },
  { href: "/kontakt", label: "Kontakt" },
];

export const hours = "poniedziałek–piątek, 7:00–17:00";

export const documents = [
  {
    title: "Kryteria przyjmowania dzieci",
    href: "/dokumenty/kryteria-przyjmowania-dzieci.pdf",
  },
  {
    title: "Wniosek o przyjęcie dziecka",
    href: "/dokumenty/wniosek-o-przyjecie-dziecka.pdf",
  },
  {
    title: "Regulamin rekrutacji",
    href: "/dokumenty/regulamin-rekrutacji.pdf",
  },
  {
    title: "Oświadczenie o wielodzietności",
    href: "/dokumenty/oswiadczenie-o-wielodzietnosci.pdf",
  },
  {
    title: "Oświadczenie o samotnym wychowywaniu",
    href: "/dokumenty/oswiadczenie-o-samotnym-wychowywaniu.pdf",
  },
];

export const faqs = [
  {
    q: "Od jakiego wieku przyjmujecie dzieci?",
    a: "Opiekujemy się dziećmi w wieku około 1–6 lat. Żłobek przy ul. Radziszowskiej jest dla młodszych dzieci, przedszkole przy ul. 29 Listopada — dla dzieci 2,5-6 lat. Grupę dobieramy po rozmowie, do wieku i gotowości dziecka.",
  },
  {
    q: "Czy nabór trwa tylko we wrześniu?",
    a: "Nie. Nabór do przedszkola i żłobka trwa cały rok. Dziecko można przyjąć także w trakcie roku szkolnego, jeśli jest wolne miejsce.",
  },
  {
    q: "Ile wynosi wpisowe i co obejmuje czesne?",
    a: "Wpisowe i czesne podajemy podczas rozmowy telefonicznej — kwoty zależą od placówki. W czesnym jest opieka w godzinach 7:00–17:00, zajęcia edukacyjne, plastyka, angielski raz w tygodniu i pomoce dydaktyczne.",
  },
  {
    q: "Jakie są godziny odbioru?",
    a: "Obie placówki są otwarte od poniedziałku do piątku, od 7:00 do 17:00. Wcześniejsze przyprowadzenie albo późniejszy odbiór ustalamy indywidualnie z pracownikiem.",
  },
  {
    q: "Czy dzieci dostają posiłki?",
    a: "Tak. Każde dziecko ma pięć posiłków dziennie od sprawdzonej firmy cateringowej. Wyżywienie omawiamy przy zapisie, razem z dietą i alergiami.",
  },
  {
    q: "Jak wygląda pierwszy kontakt?",
    a: "Najkrócej: telefon 510 200 558. Potem karta zgłoszenia, umowa i wpisowe. Chętnie umawiamy też odwiedziny, żeby rodzic zobaczył salę, a dziecko — nas.",
  },
];

export const included = [
  {
    title: "Opieka 7:00–17:00",
    text: "Dziesięć godzin dziennie, od poniedziałku do piątku. Inne godziny ustalamy wcześniej.",
  },
  {
    title: "Angielski raz w tygodniu",
    text: "Od września do czerwca, z wykwalifikowanym pedagogiem. W przedszkolu i w żłobku.",
  },
  {
    title: "Pięć posiłków",
    text: "Pięć posiłków dziennie od sprawdzonej firmy cateringowej.",
  },
  {
    title: "Plastyka i zabawa",
    text: "Różne techniki, gry ruchowe, wypożyczalnia książeczek i urodziny solenizanta.",
  },
  {
    title: "Codzienne wyjścia na zewnątrz",
    text: "Zabawa na świeżym powietrzu jest wpisana w dzień, nie jest nagrodą.",
  },
  {
    title: "Małe święta i goście",
    text: "Spotkania z ciekawymi osobami, teatr, wycieczki i wspólne okazje w roku.",
  },
];

export const preschoolExtras = [
  "Tańce",
  "Basen",
  "Wczesne metody czytania",
  "Gimnastyka",
  "Logopeda",
  "Warsztaty przyrodnicze",
  "Warsztaty w bibliotece",
];
