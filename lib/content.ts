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
    ages: "dzieci 3–6 lat",
    street: "ul. 29 Listopada 12D/1",
    city: "32-050 Skawina",
    email: "przedszkole.radziszowska@op.pl",
    mapEmbed:
      "https://maps.google.com/maps?q=ul.+29+Listopada+12D,+32-050+Skawina&hl=pl&z=16&output=embed",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=ul.+29+Listopada+12D%2F1+32-050+Skawina",
    facebook:
      "https://www.facebook.com/pages/Przedszkole-Bajkowa-Kraina/227851290591685",
    facebookLabel: "Przedszkole na Facebooku",
    image: "/media/kropki.jpg",
    imageAlt:
      "Grupa przedszkolaków z kolorowymi kropkami podczas Dnia Kropki w Bajkowej Krainie",
    blurb:
      "Pierwsze niepubliczne przedszkole w Skawinie. Przygotowujemy dzieci do szkoły przez zabawę, ruch i codzienne, spokojne rytuały.",
  },
  {
    id: "zlobek",
    place: "Żłobek",
    name: "Żłobek · Klub Malucha",
    ages: "młodsze dzieci, ok. 1–3 lat",
    street: "ul. Radziszowska 22/1",
    city: "32-050 Skawina",
    email: "klub.radziszowska@op.pl",
    mapEmbed:
      "https://maps.google.com/maps?q=ul.+Radziszowska+22,+32-050+Skawina&hl=pl&z=16&output=embed",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=ul.+Radziszowska+22%2F1+32-050+Skawina",
    facebook:
      "https://www.facebook.com/pages/Klub-Malucha-%C5%BB%C5%82obek-Bajkowa-Kraina/1617642635148321",
    facebookLabel: "Żłobek na Facebooku",
    image: "/media/gordonki.jpg",
    imageAlt:
      "Maluchy z żłobka leżą na kolorowej chuście podczas zajęć umuzykalniających",
    blurb:
      "Klub Malucha otwarty w 2015 roku. Kameralna opieka, bliskość i dużo swobodnej zabawy — także na własnym placu zabaw.",
  },
];

export const nav = [
  { href: "/o-nas", label: "O nas" },
  { href: "/oferta", label: "Oferta" },
  { href: "/aktualnosci", label: "Aktualności" },
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

export type Post = {
  slug: string;
  title: string;
  date: string;
  place: Place;
  excerpt: string;
  body: string[];
  image: string;
  imageAlt: string;
  source: string;
};

export const posts: Post[] = [
  {
    slug: "kropkowy-dzien",
    title: "Dzień Kropki",
    date: "2026-09-15",
    place: "Przedszkole",
    excerpt:
      "Jedna kropka, a dalej cała historia. Przedszkolaki sprawdzały, co może się z niej zacząć.",
    body: [
      "W przedszkolu obchodziliśmy Dzień Kropki. Dzieci miały zajęcia rozwijające wyobraźnię: co może zacząć się od jednej, zwykłej kropki.",
      "Powstały kolorowe prace, a sala zamieniła się w galerię kropek — dużych, małych i takich, które dopiero szukają swojego kształtu.",
    ],
    image: "/media/kropki.jpg",
    imageAlt:
      "Przedszkolaki stoją przy tablicy z napisem Dzień Kropki i trzymają kolorowe koła",
    source: "https://bajkowakraina.org/blog/kropkowy-dzien/",
  },
  {
    slug: "dzien-maszynisty",
    title: "Dzień Maszynisty",
    date: "2026-09-16",
    place: "Przedszkole",
    excerpt:
      "Spacer na pobliski dworzec. Dzieci z bliska przyglądały się pracy maszynisty.",
    body: [
      "Dzień Maszynisty jest ważny dla każdego, kto podróżuje pociągiem. Przedszkolaki poszły z tej okazji na pobliski dworzec, żeby bliżej poznać pracę maszynisty.",
      "Dzieci były zachwycone. W kamizelkach i czapkach oglądały pociąg z peronu — spokojnie, razem i z prawdziwą ciekawością.",
    ],
    image: "/media/stacja.jpg",
    imageAlt:
      "Przedszkolaki w odblaskowych kamizelkach stoją na peronie i patrzą na pociąg",
    source: "https://bajkowakraina.org/blog/dzien-maszynisty/",
  },
  {
    slug: "pociag-w-naszym-zlobku",
    title: "Pociąg w naszym żłobku",
    date: "2026-09-11",
    place: "Żłobek",
    excerpt:
      "Maluchy w fartuchach ozdabiały własne wagoniki żłobkowego pociągu.",
    body: [
      "Z okazji Dnia Maszynisty nasze maluszki zamieniły się w artystów. Włożyły fartuchy i każde ozdobiło swój wagonik w żłobkowym pociągu.",
      "Sprawiło im to wiele radości. Wagoniki wisiały jeden za drugim, a farba była dokładnie tam, gdzie miała być: na papierze i odrobinę na fartuchach.",
    ],
    image: "/media/pociag.jpg",
    imageAlt:
      "Troje dzieci w żółtych fartuchach maluje kolorowe wagoniki zawieszone na ścianie",
    source: "https://bajkowakraina.org/blog/pociag-w-naszym-zlobku/",
  },
  {
    slug: "wrzesniowe-gordonki",
    title: "Wrześniowe gordonki",
    date: "2026-09-03",
    place: "Żłobek",
    excerpt:
      "Zajęcia umuzykalniające, które dla dzieci są po prostu świetną zabawą.",
    body: [
      "Dzieci w żłobku biorą udział w zajęciach umuzykalniających zwanych gordonkami. To łagodny sposób stymulowania uwagi i słuchu — a dla nich samych przede wszystkim zabawa.",
      "We wrześniu gordonki wróciły do rytmu tygodnia: wspólne leżenie na chuście, słuchanie i ruch, bez pośpiechu.",
    ],
    image: "/media/gordonki.jpg",
    imageAlt:
      "Grupa małych dzieci leży na wielokolorowej chuście podczas gordonków w żłobku",
    source: "https://bajkowakraina.org/blog/wrzesniowe-gordonki/",
  },
  {
    slug: "kropeczkowe-muchomorki",
    title: "Kropeczkowe muchomorki",
    date: "2026-09-15",
    place: "Żłobek",
    excerpt:
      "Białe kropki na czerwonych kapeluszach. Pędzelki chodziły sprawnie i radośnie.",
    body: [
      "Maluszki chwyciły za pędzelki i dekorowały muchomory białymi kropkami. Poszło im bardzo sprawnie.",
      "Pracowały z wielką radością — każdy muchomor dostał dokładnie tyle kropek, ile dziecko uznało za potrzebne.",
    ],
    image: "/media/muchomor.jpg",
    imageAlt:
      "Małe dziecko siedzi przy stole i stempluje białe kropki na czerwonym muchomorze",
    source: "https://bajkowakraina.org/blog/kropeczkowe-muchomorki/",
  },
  {
    slug: "wakacyjny-teatr",
    title: "Wakacyjny teatr",
    date: "2026-07-13",
    place: "Żłobek",
    excerpt:
      "Teatr Eden przyjechał do żłobka z wakacyjnym, interaktywnym spektaklem.",
    body: [
      "W wakacje dzieci się nie nudzą. Żłobek odwiedził Teatr Eden z wakacyjnym spektaklem.",
      "Dzięki interaktywnej formie dzieci nie tylko patrzyły — brały udział w zabawie, siedząc blisko aktorów i pacynki.",
    ],
    image: "/media/teatr.jpg",
    imageAlt:
      "Dzieci z żłobka siedzą na podłodze i oglądają spektakl aktora z pacynkami",
    source: "https://bajkowakraina.org/blog/wakacyjny-teatr/",
  },
  {
    slug: "na-placu-zabaw",
    title: "Na placu zabaw",
    date: "2026-07-13",
    place: "Żłobek",
    excerpt:
      "Gdy pogoda sprzyja, wychodzimy na dwór. Tu dzieci mogą się wybiegać.",
    body: [
      "Gdy tylko pogoda sprzyja, chętnie korzystamy z naszego placu zabaw. Dzieci mogą się wybiegać i świetnie bawić na świeżym powietrzu.",
      "Plac jest tuż przy żłobku, więc wyjście na dwór jest zwykłą częścią dnia, a nie wyjątkiem.",
    ],
    image: "/media/plac.jpg",
    imageAlt: "Dziecko wygląda z domku na placu zabaw przy żłobku Bajkowa Kraina",
    source: "https://bajkowakraina.org/blog/na-placu-zabaw/",
  },
  {
    slug: "witamy-wakacje",
    title: "Witamy wakacje",
    date: "2026-06-29",
    place: "Przedszkole",
    excerpt:
      "Rok szkolny za nami. Przedszkolaki zasłużyły na wytchnienie.",
    body: [
      "Zakończyliśmy rok szkolny. Dzieci dzielnie pracowały cały rok i teraz czeka je wytchnienie.",
      "Gratulujemy wszystkim naszym przedszkolakom. Wakacje witamy spokojnie — z dumą z tego, co już potrafią.",
    ],
    image: "/media/wakacje.jpg",
    imageAlt: "Zdjęcie z zakończenia roku szkolnego w przedszkolu Bajkowa Kraina",
    source: "https://bajkowakraina.org/blog/witamy-wakacje/",
  },
  {
    slug: "pozegnanie-starszakow",
    title: "Pożegnanie starszaków",
    date: "2026-06-29",
    place: "Żłobek",
    excerpt:
      "Starsi wychowankowie żłobka od września idą do przedszkola.",
    body: [
      "Pożegnaliśmy starszaki. Nasi wychowankowie od września idą do przedszkola.",
      "Życzymy absolwentom łagodnego startu.",
    ],
    image: "/media/pozegnanie.jpg",
    imageAlt: "Ujęcie z pożegnania starszych dzieci w żłobku Bajkowa Kraina",
    source: "https://bajkowakraina.org/blog/pozegnanie-starszakow/",
  },
  {
    slug: "wycieczka-hucisko",
    title: "Wycieczka do Huciska",
    date: "2026-06-29",
    place: "Przedszkole",
    excerpt:
      "Na zakończenie roku dzieci pojechały do Domu Opowieści w Hucisku.",
    body: [
      "Na zakończenie roku wybraliśmy się do Domu Opowieści w Hucisku. Dzieci mogły pobyć w otoczeniu natury i pochodzić poza salą.",
    ],
    image: "/media/hucisko.jpg",
    imageAlt: "Zdjęcie grupowe z wycieczki przedszkola do Domu Opowieści w Hucisku",
    source: "https://bajkowakraina.org/blog/wycieczka-hucisko/",
  },
];

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T12:00:00`));
}

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export const faqs = [
  {
    q: "Od jakiego wieku przyjmujecie dzieci?",
    a: "Opiekujemy się dziećmi w wieku około 1–6 lat. Żłobek (Klub Malucha) przy ul. Radziszowskiej jest dla młodszych dzieci, przedszkole przy ul. 29 Listopada — dla dzieci 3–6 lat. Grupę dobieramy po rozmowie, do wieku i gotowości dziecka.",
  },
  {
    q: "Czy nabór trwa tylko we wrześniu?",
    a: "Nie. Nabór do przedszkola i żłobka trwa cały rok. Dziecko można przyjąć także w trakcie roku szkolnego, jeśli jest wolne miejsce.",
  },
  {
    q: "Ile wynosi wpisowe i co obejmuje czesne?",
    a: "Wpisowe to 500 zł — jednorazowa, bezzwrotna opłata przy zapisie. Gwarantuje miejsce na cały rok oraz przybory plastyczne, ręczniczki, kubeczki i podstawowe środki higieniczne. W czesnym jest opieka w godzinach 7:00–17:00, zajęcia edukacyjne, plastyka, angielski raz w tygodniu i pomoce dydaktyczne. Aktualną kwotę czesnego podajemy telefonicznie, bo zależy od placówki.",
  },
  {
    q: "Jakie są godziny odbioru?",
    a: "Obie placówki są otwarte od poniedziałku do piątku, od 7:00 do 17:00. Wcześniejsze przyprowadzenie albo późniejszy odbiór ustalamy indywidualnie z pracownikiem.",
  },
  {
    q: "Czy dzieci dostają posiłki?",
    a: "Tak. Każde dziecko ma trzy posiłki dziennie od sprawdzonej firmy cateringowej. Wyżywienie omawiamy przy zapisie, razem z dietą i alergiami.",
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
    title: "Trzy posiłki",
    text: "Śniadanie, obiad i podwieczorek od sprawdzonej firmy cateringowej.",
  },
  {
    title: "Plastyka i zabawa",
    text: "Różne techniki, gry ruchowe, wypożyczalnia książeczek i urodziny solenizanta.",
  },
  {
    title: "Dwór, gdy pogoda pozwala",
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
