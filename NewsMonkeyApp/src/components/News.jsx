import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": null,
        "name": "Overclockers.ru"
      },
      "author": "Breaking news",
      "title": "Reuters: Илон Маск намерен построить дата-центр в Китае для развития беспилотных систем Tesla",
      "description": "При осуществлении своих планов Tesla может столкнуться с рядом преград.",
      "url": "https://overclockers.ru/blog/breaking-news/show/158600/Reuters-Ilon-Mask-nameren-postroit-data-centr-v-Kitae-dlya-razvitiya-bespilotnyh-sistem-Tesla",
      "urlToImage": "https://overclockers.ru/st/legacy/blog/429624/517575_O.jpg",
      "publishedAt": "2024-05-18T16:20:05Z",
      "content": "Tesla , NotebookCheck, Reuters, Tesla, , , .\r\n: CNET/Tesla/Craig Cole/Roadshow\r\n Tesla, Full Self Driving (FSD), , , , .\r\n, , , Tesla , .\r\n , , , , Tesla .\r\n , NVIDIA, , .\r\n , , ."
    },
    {
      "source": {
        "id": "la-nacion",
        "name": "La Nacion"
      },
      "author": "Cecilia Devanna",
      "title": "Milei volverá a viajar este mes a Estados Unidos para encontrarse con Elon Musk y Mark Zuckerberg",
      "description": "Irá a Sillicon Valley, donde se juntará con referentes del mundo tecnológico; es el tercer viaje en el mes del mandatario; el rol de Demian Reidel en la organización",
      "url": "https://www.lanacion.com.ar/politica/milei-volvera-a-viajar-este-mes-a-estados-unidos-para-encontrarse-con-elon-musk-y-mark-zuckerberg-nid18052024/",
      "urlToImage": "https://resizer.glanacion.com/resizer/v2/13042024-elon-musk-y-javier-milei-politica-J2SGKYEJHBCZHB3UULMJ6KS7UY.jpg?auth=7b0f91c31c4458ff3d838589ff18595729c77383763e9b14bcca18907b665521&width=768&quality=70&smart=false",
      "publishedAt": "2024-05-18T15:49:26Z",
      "content": "El presidente Javier Milei volverá a viajar a Estados Unidos, a fin de mayo, según confirmaron a LA NACION fuentes cercanas al mandatario. Milei, que en estos momentos de viaje en Madrid, España, irá… [+2178 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "finbold.com",
      "title": "2 cryptocurrencies to reach $50 billion market cap in the first half of 2024",
      "description": "The cryptocurrency market is showing signs of recovery, with the total market capitalization rising by approximately 2.50% in the last 24 hours to reach $2.55 trillion on May 18. This ongoing bullish sentiment particularly benefits several cryptocurrencies on…",
      "url": "https://biztoc.com/x/ebf74df3af14c38e",
      "urlToImage": "https://c.biztoc.com/p/ebf74df3af14c38e/s.webp",
      "publishedAt": "2024-05-18T15:48:08Z",
      "content": "The cryptocurrency market is showing signs of recovery, with the total market capitalization rising by approximately 2.50% in the last 24 hours to reach $2.55 trillion on May 18. This ongoing bullish… [+273 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "PC Games Hardware"
      },
      "author": "Peter Bellmann",
      "title": "Update: Tesla und Steam mögen sich offenbar nicht mehr",
      "description": "In einem aktuellen Changelog kündigt Tesla das Entfernen der Steam-Integration aus den eigenen Modellen an. Dabei hat der Autobauer die Distributionsplattform erst seit 2022 unterstützt.",
      "url": "https://www.pcgameshardware.de/Branchen-News-Thema-230074/News/tesla-wirft-steam-raus-1447775/",
      "urlToImage": "https://www.pcgameshardware.de/screenshots/original/2024/01/Tesla-Model-S-Refresh-Interieur-pcgh_artwork.jpeg",
      "publishedAt": "2024-05-18T15:45:00Z",
      "content": "Der für Tesla-News bekannte X-Account Nic Cruz Patane hat jüngst ein interessantes Changelog eines aktuellen Tesla-Updates gepostet. Nach diesem Update ist es für Teslabesitzer nicht mehr möglich, St… [+1709 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "zerohedge.com",
      "title": "When Ideological Bubbles Trump Economic Thinking",
      "description": "When Ideological Bubbles Trump Economic Thinking Authored by Paul Mueller via The American Institute for Economic Research, Sometimes smart people make remarkably naïve or deeply problematic comments because their view of the world has been molded by narrow i…",
      "url": "https://biztoc.com/x/5ab4fbdf7a2425ff",
      "urlToImage": "https://c.biztoc.com/p/5ab4fbdf7a2425ff/s.webp",
      "publishedAt": "2024-05-18T15:42:05Z",
      "content": "When Ideological Bubbles Trump Economic Thinking\r\nAuthored by Paul Mueller via The American Institute for Economic Research,Sometimes smart people make remarkably naïve or deeply problematic comments… [+296 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Tass.ru"
      },
      "author": "ТАСС",
      "title": "В ФРГ количество насильственных преступлений левых экстремистов выросло на 9% в 2023 году",
      "description": "По информации газеты Bild am Sonntag, в результате подобных актов насилия в 2023 году пострадали в общей сложности 327 человек",
      "url": "https://tass.ru/mezhdunarodnaya-panorama/20839949",
      "urlToImage": "https://cdn-storage-media.tass.ru/thumb/ru/mezhdunarodnaya-panorama/20839949?u=2024-05-18T15:33:39.070681",
      "publishedAt": "2024-05-18T15:33:39Z",
      "content": ", 18 . //. 9% 2023 2022 916. Bild am Sonntag.\r\n , 2023 327 . 2022 228. , , 2023 (1 128) - (1 097).\r\n\" , Tesla , , . . , , \", - .\r\n , , . , , . \" \", - .\r\n , ."
    },
    {
      "source": {
        "id": null,
        "name": "DIE WELT"
      },
      "author": "WELT",
      "title": "Zahl linksextremistischer Gewaltdelikte gestiegen – NRW und Berlin am stärksten betroffen",
      "description": "2023 stieg die Zahl der erfassten linksextremistischen Gewaltdelikte um neun Prozent im Vergleich zum Vorjahr. Besonders viele Straftaten wurden in Berlin und Nordrhein-Westfalen begangen. Innenministerin Faeser (SPD) betonte das Gefahrenpotenzial der Taten.",
      "url": "https://www.welt.de/politik/deutschland/article251588318/Linksextremismus-Zahl-der-Gewaltdelikte-gestiegen-NRW-und-Berlin-im-Fokus.html",
      "urlToImage": "https://img.welt.de/img/politik/deutschland/mobile251588450/2861350377-ci16x9-w1200/Auseinandersetzung-bei-einer-Solidaritaetsdemo-mit-Lina-E-zwische.jpg",
      "publishedAt": "2024-05-18T15:01:45Z",
      "content": "Die Zahl der erfassten linksextremistischen Gewaltdelikte ist laut einem Medienbericht im vergangenen Jahr um 9 Prozent auf 916 gestiegen. Im Jahr 2022 seien es noch 842 Delikte gewesen, hieß es am S… [+1259 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Montevideo.com.uy"
      },
      "author": "Montevideo Portal",
      "title": "El problema que la industria de vehículos eléctricos no logra superar",
      "description": "Una ONG documentó 631 denuncias de abuso contra los derechos humanos desde 2010, vinculados con la extracción de minerales.",
      "url": "https://www.montevideo.com.uy/Ciencia-y-Tecnologia/El-problema-que-la-industria-de-vehiculos-electricos-no-logra-superar-uc888689",
      "urlToImage": "https://imagenes.montevideo.com.uy/imgnoticias/202304/_W933_80/840913.jpg",
      "publishedAt": "2024-05-18T15:00:00Z",
      "content": "La extracción de\r\nminerales utilizados para fabricar vehículos eléctricos y baterías está plagada\r\nde acusaciones de abuso, según muestra el último informe de la organización sin\r\nfines de lucro Busi… [+1709 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "barchart.com",
      "title": "Tesla Stock: Is Wall Street Bullish or Bearish?",
      "description": "Open the menu and switch the Market flag for targeted data from your country of choice. for targeted data from your country of choice.",
      "url": "https://biztoc.com/x/658e5e75ac75a5c6",
      "urlToImage": "https://c.biztoc.com/p/658e5e75ac75a5c6/s.webp",
      "publishedAt": "2024-05-18T14:42:04Z",
      "content": "Open the menu and switch the Market flag for targeted data from your country of choice.for targeted data from your country of choice.\r\nThis story appeared on barchart.com, ."
    },
    {
      "source": {
        "id": null,
        "name": "Interia.pl"
      },
      "author": "Michał Domański",
      "title": "Dopłaty do nowych i używanych samochodów. Ile pieniędzy dostaniemy?",
      "description": "Podatki od samochodów spalinowych oraz dopłaty do zakupu aut elektrycznych, również używanych, to ostatnio gorący temat. W tej drugiej kwestii wypowiedziała się dzisiaj minister funduszy Katarzyna Pełczyńska-Nałęcz, a jej słowa są cokolwiek zastanawiające.",
      "url": "https://motoryzacja.interia.pl/raport-samochody-elektryczne/news-doplaty-do-nowych-i-uzywanych-samochodow-ile-pieniedzy-dosta,nId,7517142",
      "urlToImage": "https://i.iplsc.com/-/000J5J6ZG7LFDKSB-C461-F4.jpg",
      "publishedAt": "2024-05-18T14:32:24Z",
      "content": "Spis treci:\r\nPrzypomnijmy, e wedug Krajowego Planu Odbudowy zaakceptowanego przez rzd PiS jeszcze w 2022 roku, bya mowa midzy innymi \"o stymulowaniu wzrostu wykorzystania transportu przyjaznego dla r… [+7484 chars]"
    },
    {
      "source": {
        "id": "breitbart-news",
        "name": "Breitbart News"
      },
      "author": "Lucas Nolan, Lucas Nolan",
      "title": "Lawsuit: Elon Musk's Tesla Committed Fraud by Misrepresenting Self-Driving Capabilities",
      "description": "A federal judge has ruled that Elon Musk's Tesla must face a lawsuit alleging that the company committed fraud by misrepresenting the self-driving capabilities of its vehicles.\nThe post Lawsuit: Elon Musk’s Tesla Committed Fraud by Misrepresenting Self-Drivin…",
      "url": "https://www.breitbart.com/tech/2024/05/18/lawsuit-elon-musks-tesla-committed-fraud-by-misrepresenting-self-driving-capabilities/",
      "urlToImage": "https://media.breitbart.com/media/2019/03/Elon-Musk-at-Model-Y-announcement.jpg",
      "publishedAt": "2024-05-18T14:31:43Z",
      "content": "A federal judge has ruled that Elon Musk’s Tesla must face a lawsuit alleging that the company committed fraud by misrepresenting the self-driving capabilities of its vehicles.\r\nArs Technica reports … [+3171 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "investing.com",
      "title": "The 'Magnificent 7' term needs to be retired after Q1 earnings: Goldman Sachs By",
      "description": "Goldman Sachs has observed a significant shift among the top technology companies, often dubbed the \"Magnificent 7,\" following their first-quarter results. Collectively, Apple Inc (NASDAQ: )., Amazon.com Inc (NASDAQ: )., Alphabet (NASDAQ: ) Inc., Meta Platfor…",
      "url": "https://biztoc.com/x/caaffbb3f133ab5e",
      "urlToImage": "https://c.biztoc.com/p/caaffbb3f133ab5e/s.webp",
      "publishedAt": "2024-05-18T14:22:04Z",
      "content": "Goldman Sachs has observed a significant shift among the top technology companies, often dubbed the \"Magnificent 7,\" following their first-quarter results.Collectively, Apple Inc (NASDAQ: )., Amazon.… [+326 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "GlobeNewswire"
      },
      "author": "EV.com",
      "title": "CORRECTION: EV.com Electrifies Sustainable Mobility Movement",
      "description": "With a Firm Commitment to Sustainability, EV.com launches new initiatives to support a greener future. With a Firm Commitment to Sustainability, EV.com launches new initiatives to support a greener future.",
      "url": "https://www.globenewswire.com/news-release/2024/05/18/2884557/0/en/CORRECTION-EV-com-Electrifies-Sustainable-Mobility-Movement.html",
      "urlToImage": "https://ml.globenewswire.com/Resource/Download/713bf8d5-9dd8-460b-99ea-1be54a210c1c",
      "publishedAt": "2024-05-18T14:17:00Z",
      "content": "New York, NY, May 18, 2024 (GLOBE NEWSWIRE) -- EV.com, a leader in the online electric vehicle marketplace, is excited to announce its renewed commitment to zero-emission mobility through a series of… [+2737 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CleanTechnica"
      },
      "author": "Arthur Frederick (Fritz) Hasler",
      "title": "What To Tell Family, Friends, & Neighbors So They Don’t Buy Another Gas Car!",
      "description": "No one should be buying a gas car these days. Here’s a list of reasons you can use to convince your family, friends, and neighbors to buy an electric car next time they need a new vehicle. Electric cars are a new, soon-to-be-dominant technology. Once you driv…",
      "url": "https://cleantechnica.com/2024/05/18/what-to-tell-family-friends-neighbors-so-they-dont-buy-another-gas-car/",
      "urlToImage": "https://cleantechnica.com/wp-content/uploads/2024/04/old-truck-1.jpeg",
      "publishedAt": "2024-05-18T14:10:32Z",
      "content": "Sign up for daily news updates from CleanTechnica on email. Or follow us on Google News!\r\nNo one should be buying a gas car these days. Here’s a list of reasons you can use to convince your family, f… [+7898 chars]"
    },
    {
      "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
      },
      "author": "ZEIT ONLINE: News -",
      "title": "Laut «Bild»: Zahl der linksextremen Gewalttaten ist 2023 gestiegen",
      "description": "Hier finden Sie Informationen zu dem Thema „Laut \"Bild\"“. Lesen Sie jetzt „Zahl der linksextremen Gewalttaten ist 2023 gestiegen“.",
      "url": "https://www.zeit.de/news/2024-05/18/zahl-der-linksextremen-gewalttaten-ist-2023-gestiegen",
      "urlToImage": "https://img.zeit.de/news/2024-05/18/zahl-der-linksextremen-gewalttaten-ist-2023-gestiegen-image-group/wide__1300x731",
      "publishedAt": "2024-05-18T14:10:11Z",
      "content": "Die Zahl der erfassten linksextremistischen Gewaltdelikte ist laut einem Medienbericht im vergangenen Jahr um 9 Prozent auf 916 gestiegen. Im Jahr 2022 seien es noch 842 Delikte gewesen, hieß es am S… [+1960 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Viewfromthewing.com"
      },
      "author": "Gary Leff",
      "title": "Absurd: Hertz Keeps Charging Tesla Renters Hundreds Of Dollars For Not Filling Up Gas",
      "description": "A week ago I wrote about a Hertz President Circle member charged $277 for returning a rented Tesla without filling it with gas. That's the second-most Hertz thing ever, after getting arrested because the rental company reported the car you rented stolen.\nBein…",
      "url": "https://viewfromthewing.com/absurd-hertz-keeps-charging-tesla-renters-hundreds-of-dollars-for-not-filling-up-gas/",
      "urlToImage": "https://viewfromthewing.com/wp-content/uploads/2023/10/tesla-model-3-hertz.jpg",
      "publishedAt": "2024-05-18T14:04:13Z",
      "content": "A week ago I wrote about a Hertz President Circle member charged $277 for returning a rented Tesla without filling it with gas. That’s the second-most Hertz thing ever, after getting arrested because… [+2613 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Bright.nl"
      },
      "author": "info@bright.nl (Andrei Stiru)",
      "title": "Autofabrikanten saboteren transitie naar elektrisch rijden, volgens nieuwe studie",
      "description": "Bijna alle grote autofabrikanten saboteren de transitie naar elektrisch rijden. Dat blijkt uit een studie van de denktank InfluenceMap. Slechts een handjevol bedrijven zijn goed bezig.",
      "url": "https://www.bright.nl/nieuws/1200694/autofabrikanten-saboteren-transitie-naar-elektrisch-rijden-volgens-nieuwe-studie.html",
      "urlToImage": "https://webp.br.cdn.pxr.nl/news/2024/05/18/e19f6bc6fbb22f8ca29f5d6af5fff9ceab1bc5a2.jpg?width=1200",
      "publishedAt": "2024-05-18T14:00:04Z",
      "content": "Bijna alle grote autofabrikanten saboteren de transitie naar elektrisch rijden. Dat blijkt uit een studie van de denktank InfluenceMap. Slechts een handjevol bedrijven zijn goed bezig.\r\nArtikel verde… [+1998 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "New York Post"
      },
      "author": "StackCommerce",
      "title": "Add Apple CarPlay and Android Auto to any car with this $85 touchscreen display",
      "description": "Road trip, anyone?",
      "url": "https://nypost.com/2024/05/18/shopping/7-wireless-car-display-is-39-off/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/05/carfeat_5054b7.jpg?quality=75&strip=all&w=1024",
      "publishedAt": "2024-05-18T14:00:00Z",
      "content": "Discover startups, services, products and more from our partner StackCommerce. New York Post edits this content, and may be compensated and/or receive an affiliate commission if you buy through our l… [+1991 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Daily Dot"
      },
      "author": "Braden Bjella",
      "title": "‘Those numbers don’t seem to add up’: Tesla driver says car lied about charge amount",
      "description": "While Tesla drivers may enjoy the technology and ease of charging their vehicles provide, they’ve also reported a host of issues utilizing their vehicles in everyday life.\n\n\nFor example, one Tesla Cybertruck owner went viral after claiming their vehicle broke…",
      "url": "https://www.dailydot.com/?p=1577806",
      "urlToImage": "https://uploads.dailydot.com/2024/05/tesla-charge.jpg?auto=compress&fm=pjpg",
      "publishedAt": "2024-05-18T14:00:00Z",
      "content": "While Tesla drivers may enjoy the technology and ease of charging their vehicles provide, theyve also reported a host of issues utilizing their vehicles in everyday life.\r\nFor example, one Tesla Cybe… [+3260 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Minneapolis Star Tribune"
      },
      "author": "Neal Justin",
      "title": "Review: Rob Schneider shows Mystic Lake crowd there's humor outside the liberal bubble",
      "description": "The \"Saturday Night Live\" alum lived up to his controversial reputation.",
      "url": "https://www.startribune.com/rob-schneider-comedy-tour-mystic-lake-casino-minnesota-saturday-night-live-review/600366947/",
      "urlToImage": "https://arc.stimg.co/startribunemedia/EGH2BWLKUBD3RM74FQP4AD3EVA.jpg?h=630&w=1200&fit=crop&bg=999&crop=faces",
      "publishedAt": "2024-05-18T13:52:57Z",
      "content": "You can't say Rob Schneider didn't warn us.\r\nBefore the opening acts could take the stage at Mystic Lake Casino, the headliner's voice came booming over the speaker system.\r\n\"Those of you still in yo… [+2814 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "aol.com",
      "title": "The Magnificent 7 companies are worth a combined $14 trillion",
      "description": "None The \"Magnificent Seven\" companies include Alphabet, Amazon, Apple, Meta, Microsoft, Nvidia, and Tesla. • None They're worth trillions — and their CEOs are remunerated accordingly. • None Here's who earns the most, how much they all made last year, and ho…",
      "url": "https://biztoc.com/x/08d7b1242409dc5f",
      "urlToImage": "https://c.biztoc.com/p/08d7b1242409dc5f/s.webp",
      "publishedAt": "2024-05-18T13:38:06Z",
      "content": "None The \"Magnificent Seven\" companies include Alphabet, Amazon, Apple, Meta, Microsoft, Nvidia, and Tesla.None They're worth trillions and their CEOs are remunerated accordingly.None Here's who earn… [+255 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "247wallst.com",
      "title": "Chinese Car Companies Make Some Tesla-Killing Claims",
      "description": "Chinese car companies are advancing in battery technology, now claiming ranges of 500-600 miles. They’re expanding from low-cost vehicles to mid-market, SUVs, and luxury cars within China. These cars aren’t currently in the U.S. due to government restrictions…",
      "url": "https://biztoc.com/x/1efb794c9dedff27",
      "urlToImage": "https://c.biztoc.com/p/1efb794c9dedff27/s.webp",
      "publishedAt": "2024-05-18T13:36:07Z",
      "content": "Chinese car companies are advancing in battery technology, now claiming ranges of 500-600 miles. Theyre expanding from low-cost vehicles to mid-market, SUVs, and luxury cars within China. These cars … [+227 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Iz.ru"
      },
      "author": "Анастасия Коссаковская, Ольга Анасьева",
      "title": "Десятки рейсов отменили в аэропорту Мюнхена из-за митинга экоактивистов",
      "description": "Аэропорт Мюнхена отменил десятки рейсов из-за митинга активистов климатического движения Last Generation («Последнее поколение»), которые осаждали аэропорт с раннего утра. Об этом в субботу, 18 мая, сообщила газета Le Figaro.",
      "url": "https://iz.ru/1698570/2024-05-18/desiatki-reisov-otmenili-v-aeroportu-miunkhena-iz-za-mitinga-ekoaktivistov",
      "urlToImage": "http://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2024-05/APO_4395%20copy.jpg?itok=PSvwMZjj",
      "publishedAt": "2024-05-18T13:30:56Z",
      "content": "- Last Generation (« »), . , 18 , Le Figaro.\r\n , . , « , ». , «, , , ».\r\n , , , .\r\n«, , . : , », .\r\n Le Figaro, Last Generation , , .\r\n Tesla, . . , , : « !». .\r\n Tesla , 11 . , 13 , Tesla . . ."
    },
    {
      "source": {
        "id": null,
        "name": "Olhardigital.com.br"
      },
      "author": "Leandro Costa Criscuolo",
      "title": "Tesla planeja desenvolver data center na China",
      "description": "Na corrida por avanços em IA, a Tesla quer usar dados provenientes da China que acelerariam a produção de carros autônomos\nO post Tesla planeja desenvolver data center na China apareceu primeiro em Olhar Digital.",
      "url": "https://olhardigital.com.br/2024/05/18/carros-e-tecnologia/tesla-planeja-desenvolver-data-center-na-china/",
      "urlToImage": "https://img.odcdn.com.br/wp-content/uploads/2024/05/Tesla2.jpg",
      "publishedAt": "2024-05-18T13:19:00Z",
      "content": "A Tesla já teria planos em andamento para impulsionar o desenvolvimento global de seu sistema de direção autônoma, e para desenvolver esse projeto, usaria um data center na China, informa a Reuters.\r… [+1785 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Jalopnik"
      },
      "author": "Jalopnik Staff",
      "title": "Fast Driving Cars, Slow Stopping Cars And A Lambo Dodge In This Week's Car Culture Roundup",
      "description": "Tesla’s charge port has become the North American Charging Standard (NACS), but what does it take for non-Tesla owners to take advantage of the brand’s ubiquitous Supercharger network? Online retailers like Amazon are full of NACS adapters that look like they…",
      "url": "https://jalopnik.com/fast-driving-cars-slow-stopping-cars-and-a-lambo-dodge-1851484872",
      "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/ea96474c48bd6afbe5c9e0c738e2c9e2.jpg",
      "publishedAt": "2024-05-18T13:00:00Z",
      "content": "Teslas charge port has become the North American Charging Standard (NACS), but what does it take for non-Tesla owners to take advantage of the brands ubiquitous Supercharger network? Online retailers… [+479 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Jalopnik"
      },
      "author": "Jalopnik Staff",
      "title": "Tesla Cybertuck Woes, EV Fears And Union Action In This Week's News Roundup",
      "description": "Parking lots full of Tesla vehicles are becoming impossible to ignore as the electric automaker seemingly can’t sell enough cars and trucks to match its rate of production. According to its own figures, the electric automaker produced 46,561 more vehicles tha…",
      "url": "https://jalopnik.com/tesla-cybertuck-woes-ev-fears-and-union-action-in-this-1851484871",
      "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/547dfc518fd2ea8e73730f9986a6112f.jpg",
      "publishedAt": "2024-05-18T13:00:00Z",
      "content": "The ubiquitous 0-to-60 test has become a standardized measure of a vehicles performance chops among industry pros and car meet aficionados, but that singular measurement doesnt paint the full picture… [+443 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Quartz India"
      },
      "author": "Quartz Bot",
      "title": "America's Tesla divide, Apple and Google target tech stalkers, Ford's EV losses: Tech news roundup",
      "description": "Hertz gambled and lost when it placed its big EV bet on Tesla a few years ago. It was a chance for the rental car company to shake up the industry, instead the company bought 30,000 Teslas, got scared away by depreciation and expensive repairs and now wants t…",
      "url": "https://qz.com/tesla-hertz-ford-evs-apple-google-android-tracking-1851484888",
      "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/997a685dc89d5545ee07cf322d97b8f4.jpg",
      "publishedAt": "2024-05-18T13:00:00Z",
      "content": "If someone slips a tracking device onto your person, your phone will now start telling you, regardless if youre an Apple or Android user. \r\nApple devices have long alerted users if an Air Tag or simi… [+262 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": null,
      "title": "Tesla Cybertuck Woes, EV Fears And Union Action In This Week's News Roundup",
      "description": null,
      "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_50eca17c-4455-4de6-bcd2-b120eb328bed",
      "urlToImage": null,
      "publishedAt": "2024-05-18T13:00:00Z",
      "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
    },
    {
      "source": {
        "id": "financial-post",
        "name": "Financial Post"
      },
      "author": "Bloomberg News",
      "title": "S&P Profit Recovery Revs Up on Big Tech and Strong Consumer",
      "description": "Now that Corporate America’s earnings season is drawing to a close, the takeaway is clear: A broad swath of companies say the worst of last year’s profit pain is over.",
      "url": "https://financialpost.com/pmn/business-pmn/sp-profit-recovery-revs-up-on-big-tech-and-strong-consumer",
      "urlToImage": "https://smartcdn.gprod.postmedia.digital/financialpost/wp-content/uploads/2024/05/healthy-financial-conditions-bode-well-for-profit-margins-s.jpg",
      "publishedAt": "2024-05-18T12:51:49Z",
      "content": "Now that Corporate Americas earnings season is drawing to a close, the takeaway is clear: A broad swath of companies say the worst of last years profit pain is over.\r\nAuthor of the article:\r\nswo{e230… [+7261 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "247wallst.com",
      "title": "Tesla Model 3 vs. Chevy Bolt: True Cost to Lease One",
      "description": "may have yet to fully reach the mainstream, as early adopters continue to toe the line, but they have certainly piqued the interest of consumers, especially with the $7,500 tax credit that comes with owning one. But leasing an EV also makes sense, offering dr…",
      "url": "https://biztoc.com/x/a5c4b41fb28d0425",
      "urlToImage": "https://c.biztoc.com/p/a5c4b41fb28d0425/s.webp",
      "publishedAt": "2024-05-18T12:40:07Z",
      "content": "may have yet to fully reach the mainstream, as early adopters continue to toe the line, but they have certainly piqued the interest of consumers, especially with the $7,500 tax credit that comes with… [+296 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "finance.yahoo.com",
      "title": "‘Single greatest talent acquisition opportunity’: Elon Musk firing Tesla’s Supercharger team proves an unprecedented gift for the EV industry",
      "description": "Thanks to Elon Musk, the “single greatest talent acquisition opportunity in the industry” fell right into the lap of Aaron and Stephanie Luque—and they weren’t about to let the opportunity pass them by. When the couple first founded their Georgia-based EV inf…",
      "url": "https://biztoc.com/x/6654176838a3d097",
      "urlToImage": "https://c.biztoc.com/p/6654176838a3d097/s.webp",
      "publishedAt": "2024-05-18T12:38:05Z",
      "content": "Thanks to Elon Musk, the single greatest talent acquisition opportunity in the industry fell right into the lap of Aaron and Stephanie Luqueand they werent about to let the opportunity pass them by.W… [+302 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "ANI",
      "title": "Amitabh Kant on Tesla: 'India won't make any further changes in its EV policy to suit a specific company'",
      "description": "India can'on being asked why Tesla didn't come to India after the CEO announced an India visit in April but cancelled at the last moment.",
      "url": "https://economictimes.indiatimes.com/industry/renewables/amitabh-kant-on-tesla-india-wont-make-any-further-changes-in-its-ev-policy-to-suit-a-specific-company/articleshow/110233803.cms",
      "urlToImage": "https://img.etimg.com/thumb/msid-110233907,width-1200,height-630,imgsize-25622,overlay-economictimes/photo.jpg",
      "publishedAt": "2024-05-18T12:34:24Z",
      "content": "India cannot have individual EV policies for every company, Amitabh Kant told on being asked why Tesla did not come to India after the CEO announced an India visit in April but cancelled it at the la… [+2426 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Slashdot.org"
      },
      "author": "feedfeeder",
      "title": "Forget Chinese EVs. Biden’s Tariffs Will Hit The Cheapest Tesla Model 3. - InsideEVs",
      "description": "Forget Chinese EVs. Biden’s Tariffs Will Hit The Cheapest Tesla Model 3.InsideEVs Americans have been driving Chinese-built cars for yearsBusiness Insider How Companies Dodge TariffsThe New York Times Editorial: China embraced electric vehicles. The U.S. didn…",
      "url": "https://slashdot.org/firehose.pl?op=view&amp;id=173906295",
      "urlToImage": null,
      "publishedAt": "2024-05-18T12:32:50Z",
      "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Secretchina.com"
      },
      "author": "www.secretchina.com",
      "title": "路透：马斯克拟设立中国数据中心 押注人工智能",
      "description": "特斯拉（Tesla）计划在中国开设数据中心，拟利用中国境内的数据来开发其全自动驾驶系统的全球应用，这象征了其首席执行官埃隆·马斯克（Elon Musk）的策略转向。",
      "url": "https://www.secretchina.com/news/gb/2024/05/18/1061796.html",
      "urlToImage": "https://www.secretchina.com/2017/images/kzglog-300.jpg",
      "publishedAt": "2024-05-18T12:14:21Z",
      "content": "2024518517Tesla·Elon Musk\r\nFull Self DrivingFSD\r\nAIFSD\r\nFSD\r\nNvidiaGPU\r\n4FSD\r\nFSD4FSD\r\n:\r\n:\r\n:\r\n."
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "businessinsider.com",
      "title": "The Magnificent 7 companies are worth a combined $14 trillion",
      "description": "Mark Zuckerberg with Satya Nadella, Jensen Huang, Sundar Pichai, Andy Jassy, Tim Cook, and Elon Musk are CEOs of the \"Magnificent Seven.\" Getty Images The \"Magnificent Seven\" companies include Alphabet, Amazon, Apple, Meta, Microsoft, Nvidia, and Tesla. They'…",
      "url": "https://biztoc.com/x/7acb37677edcbcb1",
      "urlToImage": "https://c.biztoc.com/p/7acb37677edcbcb1/s.webp",
      "publishedAt": "2024-05-18T12:14:05Z",
      "content": "Mark Zuckerberg with Satya Nadella, Jensen Huang, Sundar Pichai, Andy Jassy, Tim Cook, and Elon Musk are CEOs of the \"Magnificent Seven.\"Getty ImagesThe \"Magnificent Seven\" companies include Alphabet… [+310 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Ana Altchek,Jyoti Mann",
      "title": "The Magnificent 7 companies are worth a combined $14 trillion — here's how much their CEOs make",
      "description": "Microsoft, Apple, Nvidia, Alphabet, Amazon, Meta and Tesla are worth $14 trillion — and their CEOs are paid handsomely.",
      "url": "https://www.businessinsider.com/ceo-pay-apple-nvidia-microsoft-alphabet-meta-amazon-tesla-2024-5",
      "urlToImage": "https://i.insider.com/6642429ff27898f532d711c9?width=1200&format=jpeg",
      "publishedAt": "2024-05-18T12:06:01Z",
      "content": "Mark Zuckerberg with Satya Nadella, Jensen Huang, Sundar Pichai, Andy Jassy, Tim Cook, and Elon Musk are CEOs of the \"Magnificent Seven.\"Getty Images\r\n<ul><li>The \"Magnificent Seven\" companies includ… [+5824 chars]"
    },
    {
      "source": {
        "id": "el-mundo",
        "name": "El Mundo"
      },
      "author": "Félix Cerezo",
      "title": "Los coches chinos: el enemigo a batir para unos... y con el que aliarse para otros",
      "description": "Esta semana EEUU anunciaba aranceles del 100% a estos modelos, que siguen bajo la lupa de la UE por posibles subsidios. Mientras, varias marcas y países ven mejor colaborar con ellos o que, al menos, les pongan una fábrica. Leer",
      "url": "https://www.elmundo.es/motor/2024/05/18/66478dcfe4d4d8f82a8b45a7.html",
      "urlToImage": "https://phantom-elmundo.unidadeditorial.es/14119c522e0e6d2e343a43790a6e212d/f/webp/assets/multimedia/imagenes/2024/05/17/17159686834203.jpg",
      "publishedAt": "2024-05-18T12:02:11Z",
      "content": "En el verano de 2022, la Administración de Joe Biden aprobó la llamada Ley IRA, una norma claramente proteccionista con su industria del automóvil. El año pasado, el mismo presidente de los EEUU se p… [+8813 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "taz.de"
      },
      "author": "Hansjürgen Mai",
      "title": "Mercedes-Werk in den USA: Belegschaft gegen Organisierung",
      "description": "Die Auto-Gewerkschaft UAW hat bei ihrem Versuch, das Personal von Automobilherstellern in den Südstaaten für sich zu gewinnen, einen Dämpfer erhalten.",
      "url": "https://taz.de/Mercedes-Werk-in-den-USA/!6011234/",
      "urlToImage": "https://taz.de/picture/7008470/948/55414440-1.jpeg",
      "publishedAt": "2024-05-18T12:02:00Z",
      "content": "Die Auto-Gewerkschaft UAW hat bei ihrem Versuch, das Personal von Automobilherstellern in den Südstaaten für sich zu gewinnen, einen Dämpfer erhalten.\r\nSieg für den Autobauer, Niederlage für seine Be… [+4159 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Journal du geek"
      },
      "author": "Olivier",
      "title": "Cette astuce simple peut vous faire faire des économies lors de votre recharge au Superchargeur",
      "description": "Les propriétaires de Tesla ont découvert une méthode simple (et pas officielle) pour accélérer la charge de leurs véhicules électriques durant les journées ensoleillées. L'astuce permet de contrer les effets de la chaleur sur les performances des bornes Super…",
      "url": "https://www.journaldugeek.com/2024/05/18/une-astuce-simple-pour-accelerer-la-recharge-au-superchargeur/",
      "urlToImage": "https://www.journaldugeek.com/app/uploads/2024/05/Supercharger-Tesla.jpg",
      "publishedAt": "2024-05-18T12:00:23Z",
      "content": "Les automobilistes se posent souvent des questions sur les capacités de Tesla à maintenir des niveaux de qualité élevés pour les Superchargeurs, alors que l’entreprise a taillé dans le vif de ses eff… [+2760 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Overclockers.ru"
      },
      "author": "Breaking news",
      "title": "Недорогие натрий-ионные батареи от стартапа бывшего инженера Tesla могут удешевить электрокары",
      "description": "Новая разработка может позволить выпустить электромобиль стоимостью ниже отметки в $25 000.",
      "url": "https://overclockers.ru/blog/breaking-news/show/158564/Nedorogie-natrij-ionnye-batarei-ot-startapa-byvshego-inzhenera-Tesla-mogut-udeshevit-elektrokary",
      "urlToImage": "https://overclockers.ru/st/legacy/blog/429624/517512_O.jpg",
      "publishedAt": "2024-05-18T12:00:05Z",
      "content": ", Bedrock Materials, Tesla, , , NotebookCheck.\r\n, Bedrock Materials , , - , .\r\n , Tesla Model Y Model 3 -- , 500 .\r\n: Teslarati/MUNRO LIVE\r\n , - , , , - 25 000 , Tesla Model 2, .\r\n Bedrock Materials … [+29 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Justine Calma",
      "title": "The EV industry can’t shake its human rights abuse problem",
      "description": "Tesla, BYD, and VW use battery minerals from mining companies that have the most allegations of human rights abuse in a new report.",
      "url": "https://www.theverge.com/2024/5/18/24158518/ev-critical-mineral-mining-human-rights-abuse-allegations",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/_b5D34GPZmgokEt82isYadbjfoM=/0x0:3772x2515/1200x628/filters:focal(1886x1258:1887x1259)/cdn.vox-cdn.com/uploads/chorus_asset/file/25453128/1265758482.jpg",
      "publishedAt": "2024-05-18T12:00:00Z",
      "content": "Workers walk in Glencore’s Mutanda Mine, which Tesla sources cobalt from, in southeastern Democratic Republic of Congo, on June 19th, 2023.  | Photo by Emmet Livingstone / AFP via Getty Images\r\n\n \n\n … [+7267 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "investorplace.com",
      "title": "Tesla Stock Analysis: Can TSLA Rebound Against All Odds?",
      "description": "Tesla may have what it takes to eventually make a big comeback Tesla (NASDAQ: ) has many powerful, negative catalysts at this point. Among the most important items are the automaker’s continued market share losses amid tough competition in the U.S. and China …",
      "url": "https://biztoc.com/x/db4c959dd48917ac",
      "urlToImage": "https://c.biztoc.com/p/db4c959dd48917ac/s.webp",
      "publishedAt": "2024-05-18T11:52:06Z",
      "content": "Tesla may have what it takes to eventually make a big comebackTesla (NASDAQ: ) has many powerful, negative catalysts at this point. Among the most important items are the automakers continued market … [+283 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "fortune.com",
      "title": "Elon Musk firing Tesla's Supercharger team proves a gift for the EV industry",
      "description": "Thanks to Elon Musk, the “single greatest talent acquisition opportunity in the industry” fell right into the lap of Aaron and Stephanie Luque—and they weren’t about to let the opportunity pass them by. When the couple first founded their Georgia-based EV inf…",
      "url": "https://biztoc.com/x/7dcef89db3a59189",
      "urlToImage": "https://c.biztoc.com/p/7dcef89db3a59189/og.webp",
      "publishedAt": "2024-05-18T11:50:07Z",
      "content": "Thanks to Elon Musk, the single greatest talent acquisition opportunity in the industry fell right into the lap of Aaron and Stephanie Luqueand they werent about to let the opportunity pass them by.W… [+296 chars]"
    },
    {
      "source": {
        "id": "financial-post",
        "name": "Financial Post"
      },
      "author": "Bloomberg News",
      "title": "Canada is exploring higher tariffs on Chinese EVs, trade minister says",
      "description": "Canada is examining whether it needs to raise tariffs on Chinese-made EVs after the U.S. announced major new levies on them. Read more",
      "url": "https://financialpost.com/commodities/energy/electric-vehicles/canada-exploring-higher-tariffs-chinese-evs-trade-minister",
      "urlToImage": "https://smartcdn.gprod.postmedia.digital/financialpost/wp-content/uploads/2024/05/mary-ng-0521-ph.jpg",
      "publishedAt": "2024-05-18T11:41:38Z",
      "content": "Canada is examining whether it needs to raise tariffs on Chinese-made electric vehicles after the White House announced major new levies on them, Trade Minister Mary Ng said.\r\nWe are looking at this … [+1903 chars]"
    },
    {
      "source": {
        "id": "bild",
        "name": "Bild"
      },
      "author": "Burkhard Uhlenbroich",
      "title": "Linksextremistische Gewalttaten - Faeser warnt vor „äußerster Brutalität“",
      "description": "Die Sicherheitsbehörden warnen vor zunehmender Gewalt von Linksextremisten. 327 Menschen wurden bei Attacken im vergangenen Jahr verletzt",
      "url": "https://www.bild.de/politik/inland/linksextremismus-faeser-warnt-vor-aeusserster-brutalitaet-der-taeter-66482adf85f8ce475a2e2320",
      "urlToImage": "https://images.bild.de/66482adf85f8ce475a2e2320/fdc967a8889b8fbb2acc533d92989fc2,1b57a91d?w=1280",
      "publishedAt": "2024-05-18T11:40:09Z",
      "content": "Die Sicherheitsbehörden warnen vor zunehmender Gewalt linksextremistischer Gewalttäter!\r\nNach BILD-Informationen aus Sicherheitskreisen ist die Zahl der linksextremistischen Gewaltdelikte 2023 um neu… [+2350 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gazeta.ru"
      },
      "author": "Газета.Ru",
      "title": "В Мюнхене экоактивисты устроили акцию протеста на территории аэропорта",
      "description": "Экоактивисты из радикального движения Letzte Generation («Последнее поколение»), выступающие против изменения климата, проникли на территорию мюнхенского аэропорта, устроив там акцию протеста. В результате воздушный порт пришлось на некоторое время закрыть, с…",
      "url": "https://www.gazeta.ru/social/news/2024/05/18/23040643.shtml",
      "urlToImage": "https://img.gazeta.ru/files3/699/15943699/2022-12-14T112815Z_124111291_RC2M5Y9IU1M6_RTRMADP_3_CLIMATE-CHANGE-GERMANY-PROTESTS-pic_32ratio_900x600-900x600-96811.jpg",
      "publishedAt": "2024-05-18T11:23:45Z",
      "content": "Letzte Generation (« »), ,   , .     , DPA.\r\n«   ,  - », – .   ,   .\r\n  . ,   - , .\r\n,       .     3  .\r\n  , Tesla  , . , ,    12,5 . ,  ,   .\r\nLetzte Generation  ."
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "aol.com",
      "title": "‘Single greatest talent acquisition opportunity’: Elon Musk firing Tesla’s Supercharger team proves an unprecedented gift for the EV industry",
      "description": "Thanks to Elon Musk, the “single greatest talent acquisition opportunity in the industry” fell right into the lap of Aaron and Stephanie Luque—and they weren’t about to let the opportunity pass them by. When the couple first founded their Georgia-based EV inf…",
      "url": "https://biztoc.com/x/d7ab3b858c86221d",
      "urlToImage": "https://c.biztoc.com/p/d7ab3b858c86221d/s.webp",
      "publishedAt": "2024-05-18T11:18:04Z",
      "content": "Thanks to Elon Musk, the single greatest talent acquisition opportunity in the industry fell right into the lap of Aaron and Stephanie Luqueand they werent about to let the opportunity pass them by.W… [+290 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "coingape.com",
      "title": "AI News: Elon Musk Unveils Key Updates For Grok Amid OpenAI Hype",
      "description": "In a move that’s stirred conversations within the tech sphere, Tesla CEO Elon Musk recently made waves with his announcements, particularly in the realm of artificial intelligence (AI). Meanwhile, Elon Musk’s unveiling of key updates for Grok, a project under…",
      "url": "https://biztoc.com/x/71e91119977122c0",
      "urlToImage": "https://c.biztoc.com/p/71e91119977122c0/s.webp",
      "publishedAt": "2024-05-18T11:06:13Z",
      "content": "In a move thats stirred conversations within the tech sphere, Tesla CEO Elon Musk recently made waves with his announcements, particularly in the realm of artificial intelligence (AI). Meanwhile, Elo… [+288 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "cryptopotato.com",
      "title": "Could Flip Ripple’s XRP in 2024",
      "description": "Dogecoin’s total market capitalization was $19.8 billion at the time of writing, with the hash work-powered meme currency trading at $0.145. Meanwhile, Ripple XRP price moved markets at $0.5 per token, and its market cap stood at $27 billion, according to dat…",
      "url": "https://biztoc.com/x/1e57356eff59fb38",
      "urlToImage": "https://c.biztoc.com/p/1e57356eff59fb38/s.webp",
      "publishedAt": "2024-05-18T11:04:16Z",
      "content": "Dogecoins total market capitalization was $19.8 billion at the time of writing, with the hash work-powered meme currency trading at $0.145.Meanwhile, Ripple XRP price moved markets at $0.5 per token,… [+304 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "euronews.com",
      "title": "Elon Musk's X sheds the last of its Twitter branding by changing web address to x.com",
      "description": "The social media platform formerly known as Twitter has officially changed its URL address to x.com, months after shedding the iconic blue bird logo. The social media platform formerly known as Twitter has officially transitioned its website address from Twit…",
      "url": "https://biztoc.com/x/a9579731b6c50ddc",
      "urlToImage": "https://c.biztoc.com/p/a9579731b6c50ddc/s.webp",
      "publishedAt": "2024-05-18T11:04:07Z",
      "content": "The social media platform formerly known as Twitter has officially changed its URL address to x.com, months after shedding the iconic blue bird logo.The social media platform formerly known as Twitte… [+285 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Xataka.com"
      },
      "author": "Alberto de la Torre",
      "title": "Podías tener todo el dinero del mundo pero era imposible cambiarle las ruedas al Ferrari Enzo. Hasta ahora",
      "description": "Eran los primeros años del nuevo siglo cuando Ferrari presentó su nueva bomba. El Ferrari Enzo, que hacía honor al creador de la marca, llegaba para continuar una saga de superdeportivos de tirada limitada. Iniciada por el Ferrari 288 GTO, seguida por los F40…",
      "url": "https://www.xataka.com/movilidad/podias-tener-todo-dinero-mundo-que-era-imposible-cambiarle-ruedas-al-ferrari-enzo-ahora",
      "urlToImage": "https://i.blogs.es/c01ac1/ferrari-enzo-2002-1600-04/840_560.jpeg",
      "publishedAt": "2024-05-18T11:00:52Z",
      "content": "Eran los primeros años del nuevo siglo cuando Ferrari presentó su nueva bomba. El Ferrari Enzo, que hacía honor al creador de la marca, llegaba para continuar una saga de superdeportivos de tirada li… [+3553 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Nakedcapitalism.com"
      },
      "author": "Yves Smith",
      "title": "Links 5/18/2024",
      "description": "Our far-seeing daily links: animal music, anti-sex bed, Powell's Covid, China real estate rescue, Europe youth hearts far right, Israel poor prospects, pier promo, decoding Kharkiv, China-Russia monster meeting, Garland sanction progresses. Trump wants Biden …",
      "url": "https://www.nakedcapitalism.com/2024/05/links-5-18-2024.html",
      "urlToImage": "https://www.nakedcapitalism.com/wp-content/uploads/2024/05/00-BeanBeanCello.jpg",
      "publishedAt": "2024-05-18T10:59:12Z",
      "content": "Inca jars performing various animal soundspic.twitter.com/bec79W6GeU\r\n— Science girl (@gunsnrosesgirl3) May 15, 2024\r\nA lost branch of the river Nile flowed past the pyramids of Egypt New Scientist (… [+8331 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Tom Carter",
      "title": "Chinese drivers are demanding smart cars — and that's what they're getting",
      "description": "China's EV companies are packing their vehicles with high-tech features to woo drivers who want \"intelligent\" vehicles.",
      "url": "https://www.businessinsider.com/chinese-ev-makers-battle-for-market-dominance-with-smart-features-2024-5",
      "urlToImage": "https://i.insider.com/6644a0e6b4abc992e8c99fba?width=1200&format=jpeg",
      "publishedAt": "2024-05-18T10:54:01Z",
      "content": "Attendees at Beijing's auto show examine the SU7, the first EV made by Chinese smartphone company Xiaomi.VCG/Getty Images\r\n<ul><li>China's EV makers are packing their vehicles with high-tech extras i… [+4633 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "WebProNews"
      },
      "author": "Rich Ord",
      "title": "Tesla’s German Expansion Faces Fierce Resistance Amid Approval",
      "description": "The sprawling Grünheide site, already a hub of cutting-edge electric vehicle production, is set to expand, promising economic revitalization but igniting a firestorm of protests. As CEO Elon Musk pushes forward with his ambitious plans, the clash between indu…",
      "url": "https://www.webpronews.com/teslas-german-expansion-faces-fierce-resistance-amid-approval/",
      "urlToImage": "https://www.webpronews.com/wp-content/uploads/2024/05/Screenshot-2024-05-18-at-6.21.23 AM.jpg",
      "publishedAt": "2024-05-18T10:31:46Z",
      "content": "In a bold move that underscores its relentless drive for growth, Tesla has secured approval for a second Gigafactory in Germany despite fierce opposition from environmental activists. The sprawling G… [+18506 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hibridosyelectricos.com"
      },
      "author": "Isabel García Méndez",
      "title": "Quién es quién en la movilidad eléctrica: Elon Musk, el visionario de los coches eléctricos",
      "description": "Si hay un personaje hoy en día que represente como pocos el concepto de visionario, ése es Elon Musk. Dos son las acepciones que recoge la RAE sobre el término visionario y en las dos encaja perfectamente. La segunda acepción, \"que se adelanta a su tiempo o t…",
      "url": "https://www.hibridosyelectricos.com/coches/quien-es-quien-en-movilidad-electrica-elon-musk-visionario-coches_74147_102.html",
      "urlToImage": "https://www.hibridosyelectricos.com/uploads/s1/67/40/93/elon-musk-1.jpeg",
      "publishedAt": "2024-05-18T10:30:00Z",
      "content": "Si hay un personaje hoy en día que represente como pocos el concepto de visionario, ése es Elon Musk.\r\nDos son las acepciones que recoge la RAE sobre el término visionario y en las dos encaja perfect… [+8460 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Adevarul.ro"
      },
      "author": "Dana Arambescu",
      "title": "Tesla primește undă verde pentru extinderea fabricii din Germania",
      "description": "Aprobarea extinderii primei sale fabrici europene a fost acordată după ce Tesla și-a revizuit propunerile inițiale ca urmare a furiei provocate de tăierea propusă a peste 100 de hectare de copaci.",
      "url": "https://adevarul.ro/economie/tesla-primeste-unda-verde-pentru-extinderea-2362075.html",
      "urlToImage": "https://cdn.adh.reperio.news/image-b/b1cfab15-6261-4d44-9d86-2a61448e3b65/index.jpeg?p=f%3Djpeg%26w%3D1200%26h%3D630%26r%3Dcover",
      "publishedAt": "2024-05-18T10:27:24Z",
      "content": "Aprobarea extinderii primei sale fabrici europene a fost acordat dup ce Tesla i-a revizuit propunerile iniiale ca urmare a furiei provocate de tierea propus a peste 100 de hectare de copaci.\r\nConsili… [+1918 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Android.com.pl"
      },
      "author": "Borys Francuz",
      "title": "Tesla powiększy swoją gigafabrykę w Berlinie. Ma tam powstawać nawet milion elektryków rocznie",
      "description": "Mimo niedawnych zawirowań na rynku samochodów elektrycznych Tesla wciąż ma się dobrze, o czym świadczą najnowsze ruchy amerykańskiej firmy. Elon Musk i jego świta otrzymali bowiem zielone światło na rozbudowę swojej gigafabryki w Berlinie, z czego chętnie sko…",
      "url": "https://android.com.pl/moto/734734-tesla-powiekszy-gigafabryke-berlin/",
      "urlToImage": "https://static.android.com.pl/uploads/2024/05/shutterstock_2461501217-1280x853.jpg",
      "publishedAt": "2024-05-18T10:23:54Z",
      "content": "Mimo niedawnych zawirowa na rynku samochodów elektrycznych Tesla wci ma si dobrze, o czym wiadcz najnowsze ruchy amerykaskiej firmy. Elon Musk i jego wita otrzymali bowiem zielone wiato narozbudow sw… [+2633 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Slashdot.org"
      },
      "author": "feedfeeder",
      "title": "US Official Warns a Cell Network Flaw Is Being Exploited for Spying",
      "description": "Plus: Three arrested in North Korean IT workers fraud ring, Tesla staffers shared videos from owners&rsquo; cars, and more.",
      "url": "https://slashdot.org/firehose.pl?op=view&amp;id=173905573",
      "urlToImage": null,
      "publishedAt": "2024-05-18T10:13:42Z",
      "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Overclockers.ru"
      },
      "author": "Блогер",
      "title": "Подключаемые гибриды вносят основной вклад в продажи электромобилей",
      "description": "Рынок электромобилей ждут непростые времена",
      "url": "https://overclockers.ru/blog/Scorpion81/show/158551/Podkljuchaemye-gibridy-vnosyat-osnovnoj-vklad-v-prodazhi-elektromobilej",
      "urlToImage": "https://overclockers.ru/st/legacy/blog/213212/517478_O.jpg",
      "publishedAt": "2024-05-18T10:00:05Z",
      "content": ". 18% . , .\r\n Counterpoint , (PHEV). . 46% , .\r\n(BEVs) 7% . , , - .\r\n , . , .\r\n $1,3 Ford. 10000 , $132000. Ford PHEV.\r\n , 28%. . 2%, - .\r\nBYD , 13% PHEV. 100000 , 152%.\r\n Tesla, , 9%, 19%. . 10% ."
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Andy Greenberg",
      "title": "US Official Warns a Cell Network Flaw Is Being Exploited for Spying",
      "description": "Plus: Three arrested in North Korean IT workers fraud ring, Tesla staffers shared videos from owners’ cars, and more.",
      "url": "https://www.wired.com/story/ss7-vulnerability-spies-north-korea-tesla-breachforums/",
      "urlToImage": "https://media.wired.com/photos/6647d6aeaef4cb09881cd0a2/191:100/w_1280,c_limit/US-Official-Warns-a-Cell-Network-Flaw-Is-Being-Exploited-for-Spying-Security-GettyImages-1425154697.jpg",
      "publishedAt": "2024-05-18T10:00:00Z",
      "content": "Laser warfare, among all the long-unfulfilled imaginings of science fiction writers, is right up there with flying cars. Now it's finally becoming a reality. After decades of research, the US militar… [+5429 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Chip.com.tr"
      },
      "author": "CHIP Online",
      "title": "Burun kanaması, saç dökülmesi ve fazlası: Elektrikli araçlar, kullanıcılarını hasta mı ediyor?",
      "description": "Bazı elektrikli araç sahiplerinin iddiasına göre, elektrikli araçlar sürücülerini hasta ediyor. Birçok kullanıcı, burun kanaması yaşadığını, vücutlarının ağrıdığını ve saçlarının döküldüğünü bile iddia ediyor.",
      "url": "https://www.chip.com.tr/haber/burun-kanamasi-sac-dokulmesi-ve-fazlasi-elektrikli-araclar-kullanicilarini-hasta-mi-ediyor_163630.html",
      "urlToImage": "https://img.chip.com.tr/rcman/Cw1280h720q95gm/storage/files/images/2024/05/17/burun-kanamasi-sac-dokulmesi-ve-fazlasi-elektrikli-araclar-kullanicilarini-hasta-mi-ediyor-55vr.jpg",
      "publishedAt": "2024-05-18T09:54:04Z",
      "content": "Bazı elektrikli araç sahipleri, bu araçların kendi sağlıklarına zarar verdiğini iddia ediyor.\r\nElektrikli otomobil sürücülerinin, araçların frenleme ve hızlanma sistemleri nedeniyle hareket hastalığı… [+3610 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Origo.hu"
      },
      "author": "MTI",
      "title": "Klímaaktivisták miatt bénult meg több órára a müncheni reptér",
      "description": "Mintegy három órára le kellett zárni a müncheni nemzetközi repülőteret szombat reggel, miután klímaaktivisták egy csoportja bejutott a futópályákhoz. Mintegy 60 járatot töröltek, de budapestieket - a Liszt Ferenc-repülőtér honlapja szerint - nem érintett az e…",
      "url": "https://www.origo.hu/nagyvilag/2024/05/klimaaktivista-tuntetes-munchen-repter",
      "urlToImage": "https://cdn.origo.hu/2024/05/kpYdGnxUj1nNYBjnhA60LiMV3pAYPIdKHADIEtX7LIs/fill/1200/675/no/1/aHR0cHM6Ly9jbXNjZG4uYXBwLmNvbnRlbnQucHJpdmF0ZS9jb250ZW50LzllYjNhYzk0ZWI2MzRmNzlhYTM0MDkyZWZhYmFhMjgz.webp",
      "publishedAt": "2024-05-18T09:51:34Z",
      "content": "A rendrség beszámolója szerint mind a nyolc klímaaktivistát letartóztatták, köztük a futópályák különböz részein kettesével leül hat embert is, akik úgy jutottak be a zárt területre, hogy átvágták a … [+2084 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Investing.com"
      },
      "author": "Investing.com",
      "title": "The 'Magnificent 7' term needs to be retired after Q1 earnings: Goldman Sachs",
      "description": "The 'Magnificent 7' term needs to be retired after Q1 earnings: Goldman Sachs",
      "url": "https://www.investing.com/news/stock-market-news/the-magnificent-7-term-needs-to-be-retired-after-q1-earnings-goldman-sachs-3447102",
      "urlToImage": "https://i-invdn-com.investing.com/news/LYNXMPEA6L087_L.jpg",
      "publishedAt": "2024-05-18T09:39:55Z",
      "content": "Goldman Sachs has observed a significant shift among the top technology companies, often dubbed the \"Magnificent 7,\" following their first-quarter results.\r\nCollectively, Apple Inc (NASDAQ:AAPL)., Am… [+1685 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "wsj.com",
      "title": "How Hard Should Tesla Fight for Elon Musk's Attention?",
      "description": "The June vote on the CEO’s 2018 pay package raises questions about what a board should do with a restless but valued leader.",
      "url": "https://biztoc.com/x/b5c533ae1d50a4c0",
      "urlToImage": "https://c.biztoc.com/274/og.png",
      "publishedAt": "2024-05-18T09:38:04Z",
      "content": "The June vote on the CEOs 2018 pay package raises questions about what a board should do with a restless but valued leader.\r\nThis story appeared on wsj.com, 2024-05-18."
    },
    {
      "source": {
        "id": null,
        "name": "Terra.com.br"
      },
      "author": "Homework",
      "title": "10 profissões que serão diretamente impactadas pela revolução da IA",
      "description": "Uma mudança significativa está acontecendo no mercado de trabalho, com funções tradicionais sendo substituídas por sistemas automatizados",
      "url": "https://www.terra.com.br/economia/10-profissoes-que-serao-diretamente-impactadas-pela-revolucao-da-ia,d4a196fafb9588c274811fa7e09ad9bake3rhe8v.html",
      "urlToImage": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2024/05/17/10-profissoes-1hr5w9fzwota0.jpg",
      "publishedAt": "2024-05-18T09:15:29Z",
      "content": "ResumoIntegração da Inteligência Artificial no mercado de trabalho está causando verdadeira transformação em diversas profissões, com 97 a 75% dos empregos categorizados com alto risco de serem subst… [+7794 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Quartz India"
      },
      "author": "Quartz Staff",
      "title": "Google's $125 billion mistake, the Tesla divide, McDonald's new deal: The week's most popular stories",
      "description": "Google made a big mistake recently. The company accidentally erased the private Google Cloud account of a $125 billion Australian pension fund, UniSuper. Read more...",
      "url": "https://qz.com/google-tesla-mcdonalds-openai-chatgpt-ai-gamestop-1851483683",
      "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/f2396d05505c6b8ae1bf16a1c06855a5.jpg",
      "publishedAt": "2024-05-18T09:00:00Z",
      "content": "After years of surging car thefts in the United States, 2023 was no different. The National Insurance Crime Bureau (NICB) said in April that 1,020,729 cars were pilfered last year, up from 1,008,756 … [+19 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Wattsupwiththat.com"
      },
      "author": "Guest Blogger",
      "title": "BBC Comes to Terms With Collapsing EV Market",
      "description": "The BBC is confronting the possibility that the once promising surge in sales of EVs is going flat. Naturally, this is starting to cause a panic because all those pesky climate targets enshrined in law aren’t going to be met. Range anxiety and costs are the t…",
      "url": "https://wattsupwiththat.com/2024/05/18/bbc-comes-to-terms-with-collapsing-ev-market/",
      "urlToImage": "https://i0.wp.com/wattsupwiththat.com/wp-content/uploads/2023/10/evs-driving-off-a-cliff.webp?fit=1024%2C512&ssl=1",
      "publishedAt": "2024-05-18T09:00:00Z",
      "content": "The BBC is confronting the possibility that the once promising surge in sales of EVs is going flat. Naturally, this is starting to cause a panic because all those pesky climate targets enshrined in l… [+2863 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "James Morris, Contributor, \n James Morris, Contributor\n https://www.forbes.com/sites/jamesmorris/",
      "title": "Maserati MC20 Cielo Driven: Does Gas Still Thrill More Than Electric?",
      "description": "Critics say electric cars have no soul, so I drove Maserati's open-top MC20 Cielo as a comparison to some of the fastest EVs around. Exactly how much more fun was it?",
      "url": "https://www.forbes.com/sites/jamesmorris/2024/05/18/maserati-mc20-cielo-driven-does-gas-still-thrill-more-than-electric/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66479a22375d6dca147cdd00/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      "publishedAt": "2024-05-18T09:00:00Z",
      "content": "Among the criticisms diehard gearheads throw at electric vehicles is that they lack passion. Complaints revolve around the absence of noise, no gear changing, and the reduced driver involvement from … [+9560 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Jornada.com.mx"
      },
      "author": "Silvia Ribeiro*",
      "title": "Silvia Ribeiro*: Privatización del espacio y más allá",
      "description": "No les alcanza el planeta. Los hombres más ricos del mundo necesitan más espacio para seguir acumulando riqueza. Literalmente. Por eso los supermillonarios Elon Musk (fundador y/o principal dueño X/Twitter, Tesla, SpaceX) y Jeff Bezos (fundador y dueño princi…",
      "url": "https://www.jornada.com.mx/2024/05/18/opinion/015a1eco",
      "urlToImage": "https://www.jornada.com.mx/imagemeta/1200x630BN.jpg",
      "publishedAt": "2024-05-18T08:58:03Z",
      "content": "o les alcanza el planeta. Los hombres más ricos del mundo necesitan más espacio para seguir acumulando riqueza. Literalmente. Por eso los supermillonarios Elon Musk (fundador y/o principal dueño X/Tw… [+5075 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Jornada.com.mx"
      },
      "author": "Silvia Ribeiro*",
      "title": "Silvia Ribeiro*: Privatización del espacio y más allá",
      "description": "No les alcanza el planeta. Los hombres más ricos del mundo necesitan más espacio para seguir acumulando riqueza. Literalmente. Por eso los supermillonarios Elon Musk (fundador y/o principal dueño X/Twitter, Tesla, SpaceX) y Jeff Bezos (fundador y dueño princi…",
      "url": "https://www.jornada.com.mx/2024/05/18/economia/015a1eco",
      "urlToImage": "https://www.jornada.com.mx/imagemeta/1200x630BN.jpg",
      "publishedAt": "2024-05-18T08:58:03Z",
      "content": "o les alcanza el planeta. Los hombres más ricos del mundo necesitan más espacio para seguir acumulando riqueza. Literalmente. Por eso los supermillonarios Elon Musk (fundador y/o principal dueño X/Tw… [+5075 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "N-tv.de"
      },
      "author": "n-tv NACHRICHTEN",
      "title": "\"Rein protektionistisch\": Anti-China-Zölle der USA werden zum deutschen Problem",
      "description": "Mit Strafzöllen wollen sich die USA vor chinesischen Billigimporten schützen. Die Abschottungspolitik Washingtons sorgt in Brüssel für Alarmstimmung: Europa streitet noch über seine Haltung zu Importen aus China und fürchtet negative Umlenkungseffekte",
      "url": "https://www.n-tv.de/wirtschaft/Anti-China-Zoelle-der-USA-werden-zum-deutschen-Problem-article24944476.html",
      "urlToImage": "https://bilder1.n-tv.de/img/incoming/crop24944520/009132464-cImg_16_9-w1200/238345812.jpg",
      "publishedAt": "2024-05-18T08:53:20Z",
      "content": "Mit Strafzöllen wollen sich die USA vor chinesischen Billigimporten schützen. Die Abschottungspolitik Washingtons sorgt in Brüssel für Alarmstimmung: Europa streitet noch über seine Haltung zu Import… [+10311 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "PTI",
      "title": "Expecting good response from many companies on EV policy: DPIIT Secy",
      "description": "India expects positive responses from automobile companies on its electric-vehicle policy to attract global players like Tesla through tariff tweaks. The government aims to encourage manufacturers to establish bases in India without incurring costs. Duty conc…",
      "url": "https://economictimes.indiatimes.com/industry/renewables/expecting-good-response-from-many-companies-on-ev-policy-dpiit-secy/articleshow/110228531.cms",
      "urlToImage": "https://img.etimg.com/thumb/msid-110228564,width-1200,height-630,imgsize-41926,overlay-economictimes/photo.jpg",
      "publishedAt": "2024-05-18T08:25:11Z",
      "content": "The government on Saturday said India is expecting good response from many automobile companies on its electric-vehicle (EV) policy, which was released in March to attract global players like Tesla. … [+4857 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "sherwood.news",
      "title": "How Austin Lost Its Mojo",
      "description": "In October 2021, Elon Musk made headlines when he announced that he would be moving Tesla’s headquarters to Austin, Texas, following similar moves from tech giants Hewlett Packard Enterprise and Oracle the year before. These company relocations were part of a…",
      "url": "https://biztoc.com/x/842685a2c72c5cc8",
      "urlToImage": "https://c.biztoc.com/p/842685a2c72c5cc8/og.webp",
      "publishedAt": "2024-05-18T08:12:07Z",
      "content": "In October 2021, Elon Musk made headlines when he announced that he would be moving Teslas headquarters to Austin, Texas, following similar moves from tech giants Hewlett Packard Enterprise and Oracl… [+276 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "aier.org",
      "title": "When Ideological Bubbles Trump Economic Thinking",
      "description": "Sometimes smart people make remarkably naïve or deeply problematic comments because their view of the world has been molded by narrow ideology, reinforced by significant consensus in their social circles. Recently Esther Duflo, a Nobel prize winning economist…",
      "url": "https://biztoc.com/x/b9d11b27cb79b5c8",
      "urlToImage": "https://c.biztoc.com/p/b9d11b27cb79b5c8/og.webp",
      "publishedAt": "2024-05-18T08:12:04Z",
      "content": "Sometimes smart people make remarkably naïve or deeply problematic comments because their view of the world has been molded by narrow ideology, reinforced by significant consensus in their social cir… [+281 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Sapo.pt"
      },
      "author": "Pedro Simões",
      "title": "Tesla alerta novos clientes que os jogos da Steam já não estão nos carros elétricos",
      "description": "O sistema de entretenimento dos carros da Tesla é diferente do que a maioria dos utilizadores está habituado. Para além das normais apps de mapas e de música, há que contar até com a...",
      "url": "https://pplware.sapo.pt/motores/tesla-alerta-novos-clientes-que-os-jogos-da-steam-ja-nao-estao-nos-carros-eletricos/",
      "urlToImage": "https://pplware.sapo.pt/wp-content/uploads/2022/02/jogos_steam_tesla_1.jpg",
      "publishedAt": "2024-05-18T08:00:22Z",
      "content": "O sistema de entretenimento dos carros da Tesla é diferente do que a maioria dos utilizadores está habituado. Para além das normais apps de mapas e de música, há que contar até com a integração de pr… [+1891 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "TMZ"
      },
      "author": "TMZ Staff",
      "title": "Kanye West and Bianca Censori Dine at Denny's Amid Major Yeezy Changes",
      "description": "Kanye West and Bianca Censori chowing down at America's Diner isn't something you'd expect, but their affordable meal comes as a major shakeup goes down at Ye's company. New video obtained by TMZ shows Kanye -- with a white hoodie tight around his…\n Permalink",
      "url": "https://www.tmz.com/2024/05/18/kanye-west-bianca-censori-dennys-yeezy-mass-exodus-employees/",
      "urlToImage": "https://imagez.tmz.com/image/39/16by9/2024/05/15/3938ad74bf234b35bde2ee62dc54f473_xl.jpg",
      "publishedAt": "2024-05-18T08:00:16Z",
      "content": "Kanye West and Bianca Censori chowing down at America's Diner isn't something you'd expect, but their affordable meal comes as a major shakeup goes down at Ye's company.\r\nNew video obtained by TMZ sh… [+1452 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hibridosyelectricos.com"
      },
      "author": "Javier Gómara",
      "title": "Baidu se adelanta a Tesla y lanza en China un robotaxi que cuesta menos de 30.000 euros",
      "description": "La vida es evolución. La industria del automóvil ha evolucionado más en las últimas dos décadas que en los 100 primeros años de su historia. Tras desbancar al caballo como el mejor medio de transporte del mundo, vivimos en una era de constantes cambios. Vario…",
      "url": "https://www.hibridosyelectricos.com/coches/baidu-robotaxi-sexta-generacion-china_74106_102.html",
      "urlToImage": "https://www.hibridosyelectricos.com/uploads/s1/69/22/59/baidu-robotaxi-interior_17_2000x1126.jpeg",
      "publishedAt": "2024-05-18T07:30:00Z",
      "content": "La vida es evolución. La industria del automóvil ha evolucionado más en las últimas dos décadas que en los 100 primeros años de su historia. Tras desbancar al caballo como el mejor medio de transport… [+3929 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "foxbusiness.com",
      "title": "Mercedes-Benz workers in Alabama vote against union in major blow to UAW",
      "description": "U.S. workers at a Mercedes-Benz plant in Alabama handed a stinging loss to the United Auto Workers on Friday, rejecting the union in a vote it had expected would build on a win at a Tennessee Volkswagen plant and push it deeper into the U.S. South. It marked …",
      "url": "https://biztoc.com/x/3daa7a567158bfbf",
      "urlToImage": "https://c.biztoc.com/p/3daa7a567158bfbf/og.webp",
      "publishedAt": "2024-05-18T07:24:05Z",
      "content": "U.S. workers at a Mercedes-Benz plant in Alabama handed a stinging loss to the United Auto Workers on Friday, rejecting the union in a vote it had expected would build on a win at a Tennessee Volkswa… [+294 chars]"
    },
    {
      "source": {
        "id": "die-zeit",
        "name": "Die Zeit"
      },
      "author": "ZEIT ONLINE: News -",
      "title": "Autoindustrie: Grüne Liga sieht keine Vorteile in der Tesla-Erweiterung",
      "description": "Hier finden Sie Informationen zu dem Thema „Autoindustrie“. Lesen Sie jetzt „Grüne Liga sieht keine Vorteile in der Tesla-Erweiterung“.",
      "url": "https://www.zeit.de/news/2024-05/18/gruene-liga-sieht-keine-vorteile-in-der-tesla-erweiterung",
      "urlToImage": "https://img.zeit.de/news/2024-05/18/gruene-liga-sieht-keine-vorteile-in-der-tesla-erweiterung-image-group/wide__1300x731",
      "publishedAt": "2024-05-18T07:21:29Z",
      "content": "Der Umweltverband Grüne Liga befürchtet mit der Erweiterung des Fabrikgeländes von US-Elektroautobauer Tesla negative Folgen für die Umwelt. «Der Wald, der nicht gerodet werden soll, ist Teil des Beb… [+2789 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "STERN.de"
      },
      "author": "STERN.de",
      "title": "Autoindustrie: Grüne Liga sieht keine Vorteile in der Tesla-Erweiterung",
      "description": "Die Gemeindevertreter von Grünheide haben für eine Erweiterung des Tesla-Geländes gestimmt. Befürworter verweisen auf weniger Wald, der gerodet werden soll. Die Grüne Liga sieht weiter Risiken.",
      "url": "https://www.stern.de/gesellschaft/regional/berlin-brandenburg/autoindustrie--gruene-liga-sieht-keine-vorteile-in-der-tesla-erweiterung-34722372.html",
      "urlToImage": "https://image.stern.de/34722374/t/S9/v1/w1440/r1.7778/-/18--urnnewsmldpacom200901012405189978283v3w800h600l637t458r1915b1374jpeg---175c6439e5b4514d.jpg",
      "publishedAt": "2024-05-18T07:21:29Z",
      "content": "Die Gemeindevertreter von Grünheide haben für eine Erweiterung des Tesla-Geländes gestimmt. Befürworter verweisen auf weniger Wald, der gerodet werden soll. Die Grüne Liga sieht weiter Risiken.\r\nDer … [+1951 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Patronlardunyasi.com"
      },
      "author": "Patronlar Dünyası",
      "title": "Tesla yeni araçlarından oyun desteğini kaldırmaya başladı",
      "description": "Elektrikli otomobil pazarının en büyük isimlerinden Tesla, yeni araçlardan Steam oyun desteğini kaldırmaya başladı.",
      "url": "https://www.patronlardunyasi.com/tesla-yeni-araclarindan-oyun-destegini-kaldirmaya-basladi",
      "urlToImage": "https://image.patronlardunyasi.com/static/content/24-05/18/tesla-steam.jpg",
      "publishedAt": "2024-05-18T07:08:39Z",
      "content": "Yeni jenerasyon birçok Tesla aracn içinde Steam üzerinden oyun oynanabiliyor. Bu araçlarn içinde çok güçlü bir AMD imzal bilgisayar sistemi yer alyor, böylelikle park halinde birçok oyun direkt olara… [+2475 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Sapo.pt"
      },
      "author": "Pedro Simões",
      "title": "É o fim do Twitter! Agora todos os links da rede social apontam para x.com",
      "description": "Foi há quase um ano que Elon Musk anunciou a maior mudança do Twitter de todos os tempos. A rede social que o dono da Tesla comprou iria mudar de nome e adotar apenas...",
      "url": "https://pplware.sapo.pt/redes_sociais/e-o-fim-do-twitter-agora-todos-os-links-da-rede-social-apontam-para-x-com/",
      "urlToImage": "https://pplware.sapo.pt/wp-content/uploads/2024/05/twiiter_X_fim_1.jpg",
      "publishedAt": "2024-05-18T07:00:38Z",
      "content": "Foi há quase um ano que Elon Musk anunciou a maior mudança do Twitter de todos os tempos. A rede social que o dono da Tesla comprou iria mudar de nome e adotar apenas uma letra para se identificar, o… [+2121 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Www.dn.se"
      },
      "author": null,
      "title": "Elbilar dyra att försäkra – Tesla i särklass",
      "description": "",
      "url": "https://www.dn.se/motor/elbilar-dyra-att-forsakra-tesla-i-sarklass/",
      "urlToImage": "https://static.bonniernews.se/gcs/bilder/dn-mly/78c3acf4-d2c9-4448-b444-546042385390.jpeg?interpolation=lanczos-none&fit=around%7C1024:576&crop=1024:h;center,top&output-quality=80",
      "publishedAt": "2024-05-18T06:32:57Z",
      "content": "En utskrift från Dagens Nyheter, 2024-05-18 08:37\r\nArtikelns ursprungsadress: https://www.dn.se/motor/elbilar-dyra-att-forsakra-tesla-i-sarklass/"
    },
    {
      "source": {
        "id": null,
        "name": "Svenska.yle.fi"
      },
      "author": null,
      "title": "Kvanthopp: De elektriska Formel E-bilarna visar vägen mot en mer hållbar bilracing",
      "description": "Framtidens bilracing vrålar mindre, men fart saknas inte.",
      "url": "https://svenska.yle.fi/a/7-10057048",
      "urlToImage": "https://images.cdn.yle.fi/image/upload/f_auto,fl_progressive/q_auto/w_2560,h_1440,c_crop,x_0,y_165/w_1200/v1715936620/39-128671266471d4040db7.jpg",
      "publishedAt": "2024-05-18T06:15:46Z",
      "content": "Håll i hatten de här sakerna är inga elvispar! En Formel E-bil accelererar fortare än en Formel 1, med en bråkdel av energiförbrukningen.\r\nNär jag var i tonåren hade mina klasskompisar posters med Fo… [+17647 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Journal du geek"
      },
      "author": "Thomas Estimbre",
      "title": "Elon Musk finit d’enterrer Twitter avec ce changement sur X",
      "description": "Après plusieurs mois de tergiversations, Elon Musk officialise enfin le passage de Twitter à « X.com ». Un petit pas pour les utilisateurs, un grand pas pour le réseau social.",
      "url": "https://www.journaldugeek.com/2024/05/18/elon-musk-finit-denterrer-twitter-avec-ce-changement-sur-x/",
      "urlToImage": "https://www.journaldugeek.com/app/uploads/2024/05/x-twitter-smartphone.jpg",
      "publishedAt": "2024-05-18T06:03:41Z",
      "content": "Un peu moins d’un an après avoir renommé Twitter en X, Elon Musk achève enfin le changement d’identité de son réseau social. Le milliardaire américain confirme que « tous les systèmes de base » de la… [+2485 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Frandroid"
      },
      "author": "Vincent Sergère",
      "title": "Mauvaise nouvelle pour les voitures électriques de Volkswagen et Renault et le risque d’un PC Windows XP sur Internet en 2024 – Tech’spresso",
      "description": "Vous n’avez pas eu le temps de suivre l’actualité hier ? Voici ce qui a marqué le vendredi 17 mai : des mauvaises nouvelles pour les voitures électriques à 20 000 euros de Volkswagen et Renault, et la conséquence de connecter un PC sous Windows XP à Internet …",
      "url": "https://www.frandroid.com/actualites-generales/2024486_mauvaise-nouvelle-pour-les-voitures-electriques-de-volkswagen-et-renault-et-le-risque-dun-pc-windows-xp-sur-internet-en-2024-techspresso",
      "urlToImage": "https://images.frandroid.com/wp-content/uploads/2024/03/volkswagen-id7-tourer-gtx-00012.jpg",
      "publishedAt": "2024-05-18T06:01:34Z",
      "content": "Vous navez pas eu le temps de suivre lactualité hier? Voici ce qui a marqué le vendredi 17 mai : des mauvaises nouvelles pour les voitures électriques à 20 000 euros de Volkswagen et Renault, et la c… [+1425 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Portfolio.hu"
      },
      "author": "Portfolio.hu",
      "title": "Így függ össze az e-autó piac átalakulása és az ESG térnyerése",
      "description": "Hívjuk bárhogy is, a fenntarthatósági, ESG tényezők mára elválaszthatatlan részeivé váltak a vállalati stratégiáknak. Ezen belül is fontos az e-autók térnyerése, ám e téren újabb paradigmaváltás következett be: a kínai e-autók immár a magyar piacon is tarolna…",
      "url": "https://www.portfolio.hu/uzlet/20240518/igy-fugg-ossze-az-e-auto-piac-atalakulasa-es-az-esg-ternyerese-686537",
      "urlToImage": "https://pcdn.hu/articles/images-xl/e/l/e/elektromos-auto-614299.jpg",
      "publishedAt": "2024-05-18T05:00:00Z",
      "content": "A vállalati stratégiák, a fenntarthatóság növelése és az ESG szemlélet ersítésének kiváló példája az e-autók gyártóinak világa. Akit érdekel a személyautók piaca vagy általában az új autók, különösen… [+9089 chars]"
    },
    {
      "source": {
        "id": "fortune",
        "name": "Fortune"
      },
      "author": "Stefan Nicola, Bloomberg",
      "title": "Electric mobility has 'won the race' but Volkswagen hits brakes on EV strategy",
      "description": "The automaker is selling so many combustion engine cars that it’s on track to overshoot its emissions allowance for next year.",
      "url": "https://fortune.com/europe/2024/05/18/electric-mobility-won-race-volkswagen-hits-brake-ev-strategy/",
      "urlToImage": "https://fortune.com/img-assets/wp-content/uploads/2024/05/GettyImages-2153173885-e1715940602414.jpg?resize=1200,600",
      "publishedAt": "2024-05-18T05:00:00Z",
      "content": "Volkswagen AGs all-in on electric vehicles plan is no more.The namesake VW brand, which pitched its ID family of electric cars as central to its future, admitted last week it will need more plug-in h… [+3623 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Iltalehti.fi"
      },
      "author": null,
      "title": "Haluatko miljonääriksi -kilpailija pudotti valtavasti painoa – Eri mieltä Antti Holman kanssa",
      "description": "Niko Koutosen, 21, painonpudotusprojekti on vielä kesken. Kannuksesta lähtöisin oleva opiskelija Niko Koutonen, 21, on mielestään oiva kilpailija tv:n miljonäärivisaan kolmestakin eri syystä. Ensinnäkin hän on puhelias, minkä lisäksi hänellä on hyvä yleistiet…",
      "url": "https://www.iltalehti.fi/tv-ja-leffat/a/812affe0-c728-43c0-b1d2-72f0fba2dbbd",
      "urlToImage": "https://img.ilcdn.fi/Jf0UPU3d56JUC0QT7Ty4NQGLUXw=/1200x630/top/filters:watermark(assets.ilcdn.fi/ilsome_v2.jpg,25,0,0)/img-s3.ilcdn.fi/087a0d0ce113e40995dd718705b83dc7b2cb28973b6d1186eed70a2fd439af91.jpg",
      "publishedAt": "2024-05-18T04:53:34Z",
      "content": "Kannuksesta lähtöisin oleva opiskelija Niko Koutonen, 21, on mielestään oiva kilpailija tv:n miljonäärivisaan kolmestakin eri syystä. Ensinnäkin hän on puhelias, minkä lisäksi hänellä on hyvä yleisti… [+1872 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Slashdot.org"
      },
      "author": "feedfeeder",
      "title": "Dow ends above 40000 milestone, indexes notch up weekly gains - Reuters.com",
      "description": "Dow ends above 40000 milestone, indexes notch up weekly gainsReuters.com The Dow hit a new record. What it tells us about the economy, what it means for 401(k)s.USA TODAY Dow closes at record high above 40,000 to cinch a five-week winning streakCNBC Goldman S…",
      "url": "https://slashdot.org/firehose.pl?op=view&amp;id=173904065",
      "urlToImage": null,
      "publishedAt": "2024-05-18T04:53:08Z",
      "content": "Sign up for the Slashdot newsletter! OR check out the new Slashdot job board to browse remote jobs or jobs in your areaDo you develop on GitHub? You can keep using GitHub but automatically sync your … [+268 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Techreport.com"
      },
      "author": "Krishi Chowdhary",
      "title": "Tesla Rolls Out Another Round of Mass Layoff: 600 Employees Fired in California",
      "description": "Tesla decided to cut an additional 600 jobs at the company’s manufacturing plant and engineering headquarters in California – at its Fremont and Palo Alto locations to be precise. The...\nThe post Tesla Rolls Out Another Round of Mass Layoff: 600 Employees Fir…",
      "url": "https://techreport.com/news/tesla-fires-600-employees-california/",
      "urlToImage": "https://techreport.com/wp-content/uploads/2024/05/david-von-diemar-ZBWn5DvO0hg-unsplash-scaled.jpg?_t=1716007261",
      "publishedAt": "2024-05-18T04:41:00Z",
      "content": "<ul><li> Tesla cuts 600 more jobs from California as a part of its plan to cut 10% of its global workforce this year.</li><li> Multiple departments and both senior-level and entry-level employees hav… [+3654 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Lewrockwell.com"
      },
      "author": "No Author",
      "title": "A Biography of Human Thought",
      "description": "I don’t know who actually compiles this information, but typically you see states ranked in various magazines and advertisements.  They use criteria like best schools, lowest crime, happiness score, income level, etc…, so what if we jammed that up a might bit…",
      "url": "https://www.lewrockwell.com/2024/05/no_author/a-biography-of-human-thought/",
      "urlToImage": "https://lrc-cdn.s3.amazonaws.com/assets/2021/02/LRC-share.jpg",
      "publishedAt": "2024-05-18T04:01:00Z",
      "content": "I dont know who actually compiles this information, but typically you see states ranked in various magazines and advertisements.  They use criteria like best schools, lowest crime, happiness score, i… [+3311 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Autobild.de"
      },
      "author": "Thomas Geiger",
      "title": "Elektro-Schocker aus China",
      "description": "Taycan Turbo GT, Model S Plaid oder Air Sapphire. Jetzt bekommen die elektrischen Extremisten Konkurrenz aus China. Denn Zeekr ringt mit dem 001 FR um die Pole Position – und startet bald auch bei uns.",
      "url": "https://www.autobild.de/artikel/zeekr-001-fr-erster-test-25870489.html",
      "urlToImage": "https://i.auto-bild.de/ir_img/3/6/0/5/1/7/1/Zeekr_001_FR_tge_24_16_9-65ed9ed9c71f6f20.jpg?impolicy=og_images",
      "publishedAt": "2024-05-18T04:00:00Z",
      "content": "Es wird langsam eng auf der Überholspur der Electric Avenue und die Luft für die Werkstuner immer dünner. Denn während sich AMG &amp; Co sichtlich schwer tun mit der Transformation, ziehen die neuen … [+4129 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Arrl.org"
      },
      "author": null,
      "title": "2024 ARRL National Convention Kicks off at Dayton Hamvention",
      "description": "By: Sam Shaner, KE1SAMA massive turnout of hams of all ages are flocking to numerous attractions at the 2024 ARRL National Convention, hosted at Dayton Hamvention®. Local scattered showers don’t seem to be raining on this parade; outside Tesla Building 2, see…",
      "url": "http://www.arrl.org/news/view/2024-arrl-national-convention-kicks-off-at-dayton-hamvention",
      "urlToImage": "http://www.arrl.org//www.arrl.org/files/image/About_ARRL/ARRL_logo_with_title.jpg",
      "publishedAt": "2024-05-18T03:42:00Z",
      "content": "05/17/2024By: Sam Shaner, KE1SAM\r\nA massive turnout of hams of all ages are flocking to numerous attractions at the 2024 ARRL National Convention, hosted at Dayton Hamvention®. Local scattered shower… [+1737 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Www.nzz.ch"
      },
      "author": "René Höltschi (Ht)",
      "title": "«Sie werden als Gemeindevertreter kein schönes Leben mehr haben»: Elon Musk und Tesla spalten die Brandenburger Gemeinde Grünheide",
      "description": "Das einzige E-Auto-Werk von Tesla in Europa beschert einer kleinen Brandenburger Gemeinde Arbeitsplätze und Steuereinnahmen. Doch Gegner und Befürworter der Ansiedlung stehen sich unversöhnlich gegenüber.",
      "url": "https://www.nzz.ch/wirtschaft/gruenheide-wie-elon-musks-tesla-werk-eine-brandenburger-gemeinde-spaltet-ld.1830960",
      "urlToImage": "https://img.nzz.ch/2024/05/17/cb51c0c1-21af-4e14-a016-e8ec762d8f83.jpeg?width=1200&height=674&fit=bound&quality=75&auto=webp&crop=3000,1685,x0,y216&wmark=nzz",
      "publishedAt": "2024-05-18T03:30:00Z",
      "content": "Autos der Marke Tesla stehen zum Transport bereit auf dem Werksgelände der Tesla Gigafactory in Grünheide bei Berlin. Künftig sollen sie verstärkt auf der Schiene befördert werden.\r\nDie ersten Buhruf… [+7865 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Www.nzz.ch"
      },
      "author": "René Höltschi (Ht)",
      "title": "Grünheide: Wie der US-Konzern Tesla von Elon Musk eine Brandenburger Gemeinde spaltet",
      "description": "Das einzige E-Auto-Werk von Tesla in Europa beschert einer kleinen Brandenburger Gemeinde Arbeitsplätze und Steuereinnahmen. Doch die Ansiedlung hat den Ort tief gespalten.",
      "url": "https://www.nzz.ch/wirtschaft/gruenheide-wie-elon-musks-telsa-werk-eine-brandenburger-gemeinde-spaltet-ld.1830960",
      "urlToImage": "https://img.nzz.ch/2024/05/17/cb51c0c1-21af-4e14-a016-e8ec762d8f83.jpeg?width=1200&height=674&fit=bound&quality=75&auto=webp&crop=3000,1685,x0,y216&wmark=nzz",
      "publishedAt": "2024-05-18T03:30:00Z",
      "content": "Autos der Marke Tesla stehen zum Transport bereit auf dem Werksgelände der Tesla Gigafactory in Grünheide bei Berlin. Künftig sollen sie verstärkt auf der Schiene befördert werden.\r\nDie ersten Buhruf… [+7865 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Slashdot.org"
      },
      "author": "theweatherelectric",
      "title": "Rematch! Tesla Cybertruck vs. Porsche 911 Drag Race! (This Time It's Not Rigged)",
      "description": "Eric Tingwall for MotorTrend writes, \"Back in December, Elon Musk released the Tesla Cybertruck into the world with an incredible claim: “It can tow a Porsche 911 across the quarter mile faster than the Porsche 911 can go by itself,” Musk said after showing a…",
      "url": "https://slashdot.org/submission/17320633/rematch-tesla-cybertruck-vs-porsche-911-drag-race-this-time-its-not-rigged",
      "urlToImage": null,
      "publishedAt": "2024-05-18T03:24:22Z",
      "content": "Eric Tingwall for MotorTrend writes, \"Back in December, Elon Musk released the Tesla Cybertruck into the world with an incredible claim: “It can tow a Porsche 911 across the quarter mile faster than … [+675 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "forbes.com.au",
      "title": "Tesla cuts 600 jobs in California amid mass layoffs",
      "description": "Over 600 jobs will be cut across Tesla’s workforce in California, including senior-level positions at a manufacturing plant and the company’s engineering headquarters, according to a filing, the latest layoffs for the Elon Musk-owned firm after announcing mas…",
      "url": "https://biztoc.com/x/b16fcab31eb681b3",
      "urlToImage": "https://c.biztoc.com/p/b16fcab31eb681b3/s.webp",
      "publishedAt": "2024-05-18T02:52:12Z",
      "content": "Over 600 jobs will be cut across Teslas workforce in California, including senior-level positions at a manufacturing plant and the companys engineering headquarters, according to a filing, the latest… [+229 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "finance.yahoo.com",
      "title": "Why VinFast Auto Stock Soared Higher This Week",
      "description": "Shares of VinFast Auto (NASDAQ: VFS) stock shot up over 60% this week, according to data from S&P Global Market Intelligence. The Vietnamese automotive group that makes electric vehicles (EVs) saw sizable early demand for its affordable SUV that is going to b…",
      "url": "https://biztoc.com/x/8928515f75bc0b36",
      "urlToImage": "https://c.biztoc.com/p/8928515f75bc0b36/s.webp",
      "publishedAt": "2024-05-18T02:50:05Z",
      "content": "Shares of VinFast Auto (NASDAQ: VFS) stock shot up over 60% this week, according to data from S&amp;P Global Market Intelligence. The Vietnamese automotive group that makes electric vehicles (EVs) sa… [+306 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "benzinga.com",
      "title": "Alabama Mercedes-Benz Workers Reject UAW Unionization Bid In A Blow To Organized Labor's Southern Strategy",
      "description": "In a significant setback for organized labor’s Southern strategy, workers at two Mercedes-Benz factories in Alabama have voted against unionization, dealing a blow to the United Automobile Workers (UAW) campaign to expand its influence in the region. What Hap…",
      "url": "https://biztoc.com/x/0e9988ed3e43ba52",
      "urlToImage": "https://c.biztoc.com/p/0e9988ed3e43ba52/s.webp",
      "publishedAt": "2024-05-18T02:50:05Z",
      "content": "In a significant setback for organized labors Southern strategy, workers at two Mercedes-Benz factories in Alabama have voted against unionization, dealing a blow to the United Automobile Workers (UA… [+285 chars]"
    }
  ]
  constructor() {
    super();
    console.log("hello i m a connstructor")
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
<div className="row">
      {this.state.articles.map((element) => {
     return  <div className="col-md-4" key={element.url}>
        <NewsItem  title={element.title.slice(0, 45)} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
      </div>
       })}
    </div>
  
      
      </div>
    )
  }
}

export default News
