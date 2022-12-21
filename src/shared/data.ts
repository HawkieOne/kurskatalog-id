import { Templates } from "./constants";
import { Course } from "./interfaces";
import { v4 as uuidv4 } from "uuid";

const createLayoutBlock = (
  x: number,
  y: number,
  w: number,
  h: number,
  content: Course
) => {
  return {
    x,
    y,
    w,
    h,
    i: uuidv4(),
    content,
  };
};

export const getCourse = (code: string) => {
  const course = courses.find((course: Course) => code === course.code);
  if (course) {
    return course;
  } else {
    return {
      name: "",
      points: 0,
      link: "",
      level: "",
      code: "",
      rating: 0,
      group: "course"
    } as Course;
  }
};

export const courses: Course[] = [
  {
    "name": "Interaktionsteknik och design",
    "description": "Kursen introducerar centrala teknikområden för en gränssnittsdesigner. Speciellt introduceras system, systemtänkande, och modellering för interaktionsteknik och design. Ett specifikationsspråk introduceras (UML). Via en designuppgift i grupp introduceras designprocessen samtidigt som kommunikationsförmågan tränas. Kursen förmedlar också grundläggande kunskaper och färdigheter i användning av matematiska modeller relevanta för medieteknik. Kursen är uppdelad i två moment: Moment 1, teoridel 4.5 hp (Theory 4,5 ECTS). Moment 2, tillämpning 3 hp (Application 3 ECTS).",
    "prerequisite": "Fysik B, Kemi A, Matematik E. Eller: Fysik 2, Kemi 1, Matematik 4 (områdesbehörighet 9/A9)",
    "points": 7.5,
    "link": "https://www.umu.se/utbildning/kurser/interaktionsteknik-och-design/",
    "level": "Grundnivå",
    "code": "5TF020",
    "rating": 0,
    "group": "course"
  },
  {
    "name": "Programmeringsteknik med C och Matlab",
    "points": 7.5,
    "pace": 100,
    "period": "Hösttermin",
    "year": 2022,
    "description": "Kursen behandlar grunderna i problemlösning med hjälp av datorprogram. Grundläggande begrepp så som algoritm, iteration, implementation och kompilering definieras. I momentet ingår en introduktion till hur man löser problem med hjälp av algoritmer på ett systematiskt sätt. Vidare presenteras de mest grundläggande byggstenarna i ett programmeringsspråk som gör att algoritmerna kan översättas till program. Under kursen ges en fördjupad introduktion till studieteknik och kursens uppläggning stimulerar studentens användande av strukturerad studieteknik. Under kursens gång kommer studenten att skriva program i C och Matlab.",
    "prerequisite": "Grundläggande behörighet och Matematik 4 eller Matematik D",
    "link": "https://www.umu.se/utbildning/kurser/programmeringsteknik-med-c-och-matlab/",
    "level": "Grundnivå",
    "startDate": "29 september 2022",
    "endDate": "31 oktober 2022",
    "location": "Umeå",
    "code": "5DV157",
    "registerCode": "UMU-57221",
    "rating": 0,
    "group": "course"
  },
  {
    "name": "Envariabelanalys 1",
    "description": "På kursen introduceras begreppen gränsvärde, kontinuitet och derivata och regler för att beräkna derivata och gränsvärde av produkter, kvoter och sammansättningar ges. Vidare behandlas medelvärdessatsen, inverser till trigonometriska funktioner, den naturliga logaritmen, exponentialfunktionen, extremvärdesproblem, metoder för att skissa grafer, Newtons metod för att approximera nollställen och Taylorapproximation. På kursen ingår obligatoriska datorlaborationer.",
    "prerequisite": "Grundläggande behörighet och Matematik 4 eller Matematik D",
    "points": 7.5,
    "link": "https://www.umu.se/utbildning/kurser/envariabelanalys-13/",
    "level": "Grundnivå",
    "code": "5MA197",
    "rating": 0,
    "group": "course"
  },
  {
    "name": "Envariabelanalys 2",
    "description": "Kursen ges för studenter som går på Ämneslärarprogrammet eller som har för avsikt att ta ut en lärarexamen. Kursen ges också för verksamma lärare i fortbildningssyfte. Övriga studenter hänvisas till att söka på den andra anmälningskoden. På kursen introduceras Riemannintegralen och dess grundläggande egenskaper. Integralkalkylens fundamentalsats och medelvärdessats samt olika integrationsmetoder t ex variabelsubstitution och partiell integration behandlas. Kursen behandlar båglängd och generaliserad integral. Vidare behandlas följder och serier och konvergenskriterier för dessa utreds. Dessutom berörs första ordningens differentialekvationer och linjära av högre ordning. Obligatoriska datorlaborationer ingår.",
    "prerequisite": "För tillträde till kursen krävs en kurs i matematisk analys omfattande minst 7,5 hp  eller motsvarande.",
    "points": 7.5,
    "link": "https://www.umu.se/utbildning/kurser/envariabelanalys-22/",
    "level": "Grundnivå",
    "code": "6MA046",
    "rating": 0,
    "group": "course"
  },
  {
    "name": "Interaktionsteknik, kommunikation och medier",
    "description": "I kursen skall den studerande tillägna sig kunskaper och färdigheter i muntlig och skriftlig kommunikation. Vidare behandlas kommunikationsteori, interaktion och feedback. Ur ett tekniskt perspektiv belyses hur möjligheterna till en fördjupad interaktivitet påverkar och utvecklar möjligheterna till kommunikation av data, attityder och livsstilar. Den studerande ska även tillägna sig kunskaper i medieanalys, retorik och sociosemiotik samt kunskaper inom inhämtande av meningsfull användarinformation.",
    "prerequisite": "Fysik B, Kemi A, Matematik E. Eller: Fysik 2, Kemi 1, Matematik 4 (områdesbehörighet 9/A9)",
    "points": 7.5,
    "link": "https://www.umu.se/utbildning/kurser/interaktionsteknik-kommunikation-och-medier/",
    "level": "Grundnivå",
    "code": "5EL279",
    "rating": 0,
    "group": "course"
  },
  {
    "name": "Datastrukturer och algoritmer (C)",
    "points": 7.5,
    "pace": 50,
    "period": "Vårtermin",
    "year": 2023,
    "description": "Kursen behandlar grundläggande abstrakta datatyper, grundläggande algoritmer, komplexitetsanalys, tillämpningsexempel och olika problemlösningsansatser. Under kursen används programspråket C. Grundläggande abstrakta datatyper som behandlas är bland andra lista, stack, kö, träd, mängd, graf och tabell. Datatypernas informella och formella specifikationer, generella egenskaper och användningsområden liksom olika implementationsmöjligheter och deras specifika egenskaper behandlas. Vidare behandlas grundläggande algoritmer förknippade med olika abstrakta datatyper, deras komplexitet och karakteristiska egenskaper för typiska problem (till exempel sökning, sortering och traversering). Komplexitetsanalys av algoritmer  introduceras och man lär sig beskriva resultatet av en sådan analys med hjälp av Ordo-notation. Grundläggande problemlösningsstrategier behandlas, till exempel divide and conquer, brute force, greedy och dynamisk programmering. Teoridelarna i kursen tillämpas genom problemlösning (att konstruera algoritmer) och programmering (att överföra algoritmer till källkod i ett programspråk). Färdigheter som testning, felsökning och dokumentation övas. Komplexitet hos enkla algoritmer undersöks.",
    "prerequisite": "Univ: För tillträde till kursen krävs en grundläggande kurs i programmeringsmetodik i programspråket C (tex 5DV104 eller 5DV114) eller motsvarande kunskaper.",
    "link": "https://www.umu.se/utbildning/kurser/datastrukturer-och-algoritmer-c/",
    "level": "Grundnivå",
    "startDate": "16 januari 2023",
    "endDate": "21 mars 2023",
    "location": "Umeå",
    "code": "5DV149",
    "registerCode": "UMU-57314",
    "rating": 0,
    "group": "course"
  },
  {
    "name": "Projektledning 1",
    "description": "Kursen ger grundläggande kunskaper och färdigheter i tillämpad projektledning och projektarbete. Ett projekt genomförs i grupper om minst 3 studenter, med fördel från olika ämnesbakgrund. Modeller, metoder och verktyg för projektstyrning enligt ISO 21500, PMBoK Guide, ICB (IPMA) och LIPS används, det vill säga: Initiering: Förstudie – analysera förutsättningar och specificera uppdraget. Planering: Projektstart – sätta samman projektteamet och producera planer för genomförandet. Genomförande: – arbeta i projektet och leverera resultaten. Projektuppföljning: – avstämning av planer, ändringshantering och riskbemötande. Avslut och effekthemtagning: - utvärdera och avveckla projektet. Områden som även berörs under kursen: Mötesteknik, presentationsteknik, förhandlingsteknik, kommunikation, kravspecifikation, utredningsprojekt, tidsplanering, riskhantering, förändringsledning, projektekonomi, kvalitetsverktyg, gruppdynamik, ledarskap, team-roller och team-utveckling, feedback, motivation, projektmognad, kunskapshantering och certifiering samt grunderna i agil projektledning. Kursen ger också grundläggande kunskaper i hur en hälsofrämjande och socialt ansvarstagande organisation skapas genom god arbetsmiljö. ",
    "prerequisite": "För tillträde till kursen krävs minst 45 avklarade högskolepoäng.",
    "points": 7.5,
    "link": "https://www.umu.se/utbildning/kurser/projektledning-12/",
    "level": "Grundnivå",
    "code": "5EL223",
    "rating": 0,
    "group": "course"
  },
  {
    "name": "Objektorienterad programmeringsmetodik",
    "description": "Kursen ger en introduktion till objektorienterad problemlösning och programmering. Innehållet baseras på programvaruutvecklingsprocessens olika delar, från problembeskrivning till lösning. I detta ingår analys, designimplementation, testning, debuggning och dokumentation. Kursen behandlar grundläggande objektorienterad analys och design som introduceras med CRC-kort (Class, Responsibilities, Collaborations) och rollspelsdiagram (RPD). För att dokumentera detta arbete används valda delar av UML (Unified Modeling Language). Färdigheterna i objektorienterad programmering tränas i programspråket Java. Kursen behandlar begreppen referenser, metoder, parameteröverföring, objekt, klass, arv, Java-interfaces, abstrakta klasser, input, output, filer och undantagshantering. Dessutom ges en introduktion till användning av programbibliotek. Utöver detta ingår programspråkskoncept som till exempel syntax, semantik och abstraktion. Färdigheter som testning, debuggning och dokumentation tränas.",
    "prerequisite": "",
    "points": 7.5,
    "link": "https://www.umu.se/utbildning/kurser/objektorienterad-programmeringsmetodik/",
    "level": "Grundnivå",
    "code": "5DV133",
    "rating": 0,
    "group": "course"
  },
  {
    "name": "Linjär algebra",
    "description": "Kursen ges för studenter som går på Ämneslärarprogrammet eller som har för avsikt att ta ut en lärarexamen. Kursen ges också för verksamma lärare i fortbildningssyfte. Övriga studenter hänvisas till att söka på den andra anmälningskoden. Kursen är indelad i två moment. Moment 1 (6,5 hp): Teori och problemlösning. Momentet behandlar linjära ekvationssystem, matriser och determinanter. Vidare behandlas centrala begepp inom vektorgeometrin såsom vektorer i planet och rummet, skalärprodukt, vektorprodukt, avstånd, projektioner och andra linjära avbildningar. På kursen behandlas teorin for allmänna vektorrum. Begreppen linjärt oberoende, bas, dimension av vektorrum, inre produktrum samt egenvärden och egenvektorer introduceras. Slutligen studeras ortogonalitet samt diagonalisering av matriser. Moment 2 (1 hp): Laborationer.   ",
    "prerequisite": "Grundläggande behörighet och Matematik 4 eller Matematik D",
    "points": 7.5,
    "link": "https://www.umu.se/utbildning/kurser/linjar-algebra/",
    "level": "Grundnivå",
    "code": "6MA036",
    "rating": 0,
    "group": "course"
  },
  {
    "name": "Datakommunikation och internet",
    "description": "Kursen är indelad i tre olika moment: Modul 1, Grundläggande principer , 2.0 hp Modulen ger en introduktion till både datornät och datakommunikation. De grundläggande begreppen som lagerkonceptet och protokollstacken introduceras. Modulen inleds med en grundläggande förståelse för begreppen multiplexering och dataöverföring. Därefter behandlas tillförlitlig dataöverföring och pipelining. Vidare behandlas feldetektering och felkorrigering samt olika MAC-protokoll. Modulen introducerar adressering fokuserat på länklagret och lokala nätverk inkluderande relevanta nätverkselement, metoder och algoritmer samt översättning mellan MAC-adresser och IP-adresser. Grundläggande nätverksäkerhet behandlas inkluderande symmetrisk och asymmetrisk kryptering samt begrepp som autentisering, konfidentialitet och integritet. Flera metoder som exempelvis digital signering ingår. Modul 2, Protokoll och realtidsapplikationer, 2.5 hp Denna modul syftar till att ge en grundläggande förståelse för hur Internets applikation-, transport- och nätverkslager är konstruerade. Grundläggande protokoll och dess funktionalitet behandlas. Speciellt studeras förutsättningar för samt tekniker och metoder för realtidsapplikationer. Modul 3, Nätverksprogrammering, 3.0 hp Modulen utgörs av en laborationskurs med ett antal obligatoriska inlämningsuppgifter. En viktig del av arbetet består av design och implementation av en nätverksapplikation. Man arbetar praktiskt i programspråket Java med stor tyngd på sockets och praktiskt användning av protokoll.",
    "prerequisite": "För tillträde till kursen krävs, förutom grundläggande behörighet, kurserna Objektorienterad programmeringsmetodik (5DV133) samt Datastrukturer och algoritmer (5DV149/5DV150) eller motsvarande kunskaper.",
    "points": 7.5,
    "link": "https://www.umu.se/utbildning/kurser/datakommunikation-och-internet/",
    "level": "Grundnivå",
    "code": "5DV212",
    "rating": 0,
    "group": "course"
  },
  {
    "name": "Psykets Arkitektur för Interaktion och Design",
    "description": "",
    "prerequisite": "Samma behörighetskrav som för antagning till Civilingenjörsprogrammet i interaktion och design.",
    "points": 7.5,
    "link": "https://www.umu.se/utbildning/kurser/psykets-arkitektur-for-interaktion-och-design/",
    "level": "Grundnivå",
    "code": "2PS030",
    "rating": 0,
    "group": "course"
  },
  {
    "name": "Statistik för teknologer",
    "description": "Moment 1 (3 hp): Grundläggande sannolikhetsteori. Begreppen sannolikhet, diskret och kontinuerlig slumpvariabel, sannolikhetsfunktion, täthetsfunktion, fördelningsfunktion, väntevärde, varians, standardavvikelse, kovarians och korrelation definieras. Vidare behandlas de i tekniska sammanhang vanligast förekommande standardfördelningarna med speciell tonvikt på normalfördelningen, fördelningar för linjärkombinationer av oberoende slumpvariabler med och utan normalfördelningsantagande (tillämpning av centrala gränsvärdessatsen) samt approximationer av väntevärden och varians för icke-linjära funktioner av slumpvariabler. Moment 2 (3 hp): Grundläggande statistikteori med speciell tonvikt på tekniska tillämpningar. Begreppen punktskattning, väntevärdesriktighet, effektivitet, hypotes, signifikansnivå, styrka, typ I- och II-fel, förkastelseområde, p-värde och konfidensgrad definieras. t-, Chi2- och F-fördelningarna tillämpas vid hypotesprövning och intervallskattning för ett och två stickprov. I kursen behandlas även teckentest, Wilcoxons rangsummetest, analys av kontingenstabeller, grunderna i ensidig variansanalys samt enkel och multipel regressionsanalys. Moment 3: (1,5 hp) Datorlaborationer med statistisk programvara.",
    "prerequisite": "För tillträde till kursen krävs 15 hp matematik inkluderande derivator och integraler eller motsvarande kunskaper.",
    "points": 7.5,
    "link": "https://www.umu.se/utbildning/kurser/statistik-for-teknologer2/",
    "level": "Grundnivå",
    "code": "5MS069",
    "rating": 0,
    "group": "course"
  },
  {
    "name": "Webbteknik för ingenjörer",
    "points": 7.5,
    "pace": 50,
    "period": "Vårtermin",
    "year": 2023,
    "description": "I kursen ingår att göra tillgängliga, tilltalande och väl fungerande webbplatser. Kursen behandlar standarder så att innehåll, utseende och tekniskt beteende är separerade från varandra vilket medför att webbplatserna fungerar i olika webbläsare, på olika enheter och för personer med olika typer av handikapp. Platserna byggs upp med hjälp av teknikerna HTML, HTML5, CSS, CSS3, JavaScript och jQuery och responsiv webbdesign. Kursen behandlar även informationssökning, validering, användbarhet samt layout. I kursen används något webbverktyg samt ett publiceringssystem, t.ex. Dreamweaver och Wordpress.",
    "prerequisite": "För tillträde till kursen krävs 7.5 hp i Grundläggande programmering i ett objektorienterat språk eller motsvarande.",
    "link": "https://www.umu.se/utbildning/kurser/webbteknik-for-ingenjorer/",
    "level": "Grundnivå",
    "startDate": "16 januari 2023",
    "endDate": "21 mars 2023",
    "location": "Ortsoberoende",
    "code": "5TF019",
    "registerCode": "UMU-54905",
    "rating": 0,
    "group": "course"
  },
  {
    "name": "Hållbar utveckling för ingenjörer",
    "description": "Kursens övergripande mål är att ge studenterna de kunskaper, färdigheter och förhållningssätt som krävs för att kunna arbeta för en hållbar utveckling i den framtida yrkesrollen som ingenjör. Under kursen behandlas komplexa hållbarhetsutmaningar samt hållbarhetsaspekter från ett individuellt till globalt perspektiv.",
    "prerequisite": "Grundläggande behörighet och Fysik 2, Kemi 1, Matematik 3c eller Matematik D",
    "points": 7.5,
    "link": "https://www.umu.se/utbildning/kurser/hallbar-utveckling-for-ingenjorer/",
    "level": "Grundnivå",
    "code": "5TF080",
    "rating": 0,
    "group": "course"
  },
  {
    "name": "Design för användarupplevelse",
    "description": "Kursen introducerar de processer och arbetsmetoder som används inom industridesign och interaktionsdesign. Fokus ligger på att introducera designmetodikens grunder och hur olika aspekter av grafisk formgivning, typografi, layout, ljuddesign och haptic kan influera designen av ett användargränssnitt, både när det gäller förståelsen av och uttrycket hos gränssnittet. I kursen ges en historisk översikt över industridesigneryrkets framväxt, en introduktion till kreativa och analytiska designmetoder samt grunderna i olika visualiserings- och kommunikationstekniker. Under projektarbete ska studenterna tillämpa dessa kunskaper i ett praktiskt projekt som tar fasta på tjänstedesign och interaktionsdesign, med särskild hänsyn till samspelet mellan gränssnittets form och funktion och användarens upplevelse. Designprocess och designmetodik 1,5 hp (Design process and design methodology) Designhistoria 1,5 hp (Design history) Verktyg för designvisualisering, 3 hp (Tools for design visualisation) Skissteknik 1,5 hp (Sketching techniques) Grafisk form 1,5 hp (Graphic design) Projektarbete 6 hp (Project work):projektarbete i grupp, individuell skrivuppgift med valbar del.",
    "prerequisite": "Grundläggande behörighet och Fysik 2, Kemi 1, Matematik 4 eller Matematik E",
    "points": 15.0,
    "link": "https://www.umu.se/utbildning/kurser/design-for-anvandarupplevelse3/",
    "level": "Grundnivå",
    "code": "5ID219",
    "rating": 0,
    "group": "course"
  },
  {
    "name": "Människa-datorinteraktion med inriktning mot kognition och design",
    "description": "Kursen behandlar metaforer och konceptuella modeller, interaktionstekniker, naturligt språk, gester, direktmanipulation, datorstöd för samarbete, utvecklingsmetoder, designstöd, prototyper, verktyg, uppgiftsanalys och utvärderingstekniker.",
    "prerequisite": "",
    "points": 7.5,
    "link": "https://www.umu.se/utbildning/kurser/manniska-datorinteraktion-med-inriktning-mot-kognition-och-design/",
    "level": "Grundnivå",
    "code": "5DV045",
    "rating": 0,
    "group": "course"
  },
  {
    "name": "Artificiell intelligens - grunderna",
    "description": "Kursen ger en grundläggande introduktion till såväl klassisk AI (artificiell intelligens) som icke-klassisk AI. Den tar upp fundamentala förutsättningar, problem och utmaningar för AI även ur filosofiskt perspektiv. Följande ämnen behandlas: AI:s bakgrund och historia i huvuddrag. Fundamentala problem och utmaningar, t,ex, - realism, sprödhet, skalbarhet, realtidskrav, ramproblemet, homunculusproblemet, substratproblemet, symbolgrund, vardagskunskap, vardagsresonerande. Sökning - grunder, t.ex. problem, lösning, tillståndsrum, bredden-först, djupet-först, heuristik, A*, lokal sökning och optimering. Kunskapsrepresentation: logik som uttrycksform (syntax och semantik för satslogik och predikatlogik). Agentparadigm: hierarkiska paradigmet, reaktiva paradigmet, hybridparadigm.Klassisk planering-exekvering,. Reaktiva agenter, Braitenbergfordon, subsumptionsarkitektur, potentialfältsarkitektur. Robotars fysiska uppbyggnad. Teleoperation och semiautonoma robotar. Förkroppsligad kognition och situerad kognition. Neurala nätverk: bakgrund och grunder. Artificiell evolution, genetiska algoritmer - kort introduktion. Multipla autonoma agenter, svärmintelligens, stigmergi, emergens. Lärande - kort introduktion. AI-teknologiers samhälleliga påverkan",
    "prerequisite": "För tillträde till kursen krävs 60 hp inom huvudområdet datavetenskap/kognitionsvetenskap eller 2 års avklarade studier inom utbildningsprogram motsvarande 120 hp, i båda fallen inkluderande en grundläggande kurs i programmeringsmetodik om minst 7.5hp  (tex 5DV157, 5DV158, 5DV176 eller 5DV177) samt antingen minst 7.5hp inom Datastrukturer och algoritmer (tex 5DV149 eller 5DV150) eller minst 7.5hp inom Applikationsprogrammering i Python (tex 5DA000) eller motsvarande kunskaper.",
    "points": 7.5,
    "link": "https://www.umu.se/utbildning/kurser/artificiell-intelligens---grunderna2/",
    "level": "Grundnivå",
    "code": "5DV124",
    "rating": 0,
    "group": "course"
  },
  {
    "name": "Databasteknik och webbaserade system",
    "description": "Kursen behandlar metoder för att lagra och bearbeta data samt tekniker för att utveckla databasdrivna, webbaserade system. Kursen baserar sig på ASP.NET MVC, ENTITY FRAMEWORK,  C-Sharp, Visual Studio och SQL SERVER. Under kursens senare del bedrivs ett verklighetsnära projekt.",
    "prerequisite": "För tillträde till kursen krävs en kurs i Grundläggande programmering, 7.5 hp samt någon av kurserna Webbutveckling, 7.5hp (5EL107) eller Datakommunikation I, 7.5 hp (5EL144) eller motsvarande.",
    "points": 7.5,
    "link": "https://www.umu.se/utbildning/kurser/databasteknik-och-webbaserade-system/",
    "level": "Grundnivå",
    "code": "5TF048",
    "rating": 0,
    "group": "course"
  },
  {
    "name": "Grundläggande signalbehandling av media",
    "points": 7.5,
    "pace": 50,
    "period": "Vårtermin",
    "year": 2023,
    "description": "Kursen handlar om tekniker och principer som ligger till grund för signalbehandlingen av ljud och bilder. I kursen studeras mediesignalers egenskaper och hur de kan påverkas för att bättre kunna användas för avancerade uppgifter. Moment som behandlas är faltning, fouriertransform, sampling, rekonstruktion, filtrering samt bildbehandling. Grunderna i stokastisk signalbehandling ingår också. Kursen är uppdelad i två moment: Teoridel, 3,5 hp (Theoretical part, 3.5 ECTS) och laborationsdel, 4 hp (Laboratory part, 4 ECTS). ",
    "prerequisite": "För tillträde till kursen krävs Envariabelanalys 1, 7.5 hp, Statistik för teknologer, 7.5 hp, och Linjär algebra, 7.5 hp eller motsvarande.",
    "link": "https://www.umu.se/utbildning/kurser/grundlaggande-signalbehandling-av-media/",
    "level": "Grundnivå",
    "startDate": "16 januari 2023",
    "endDate": "21 mars 2023",
    "location": "Umeå",
    "code": "5EL265",
    "registerCode": "UMU-54319",
    "rating": 0,
    "group": "course"
  },
  {
    "name": "Design och tjänsteutveckling för Internet of Things",
    "points": 7.5,
    "pace": 50,
    "period": "Vårtermin",
    "year": 2023,
    "description": "Kursen behandlar, från ett systemtekniskt perspektiv, de komponenter som är av betydelse för Internet of Things. I kursen studeras enkel sensorteknik för insamling av information från omgivningen och hur detta kopplar till fysiska servrar och molntjänster. Kursen behandlar också hur saker, tjänster och information designas för att skapa värde kopplat till Internet och Things och dess möjligheter. Kursen är uppdelad i två moment: Teoridel, 3,5 hp (Theoretical part, 3.5 ECTS) och laborationsdel, 4 hp (Laboratory part, 4 ECTS). ",
    "prerequisite": "För tillträde till kursen krävs Programmeringsteknik med C och Matlab 7,5 hp, Envariabelanalys 1, 7.5 hp, och Linjär algebra, 7,5 hp (5MA160) eller motsvarande.",
    "link": "https://www.umu.se/utbildning/kurser/design-och-tjansteutveckling-for-internet-of-things/",
    "level": "Grundnivå",
    "startDate": "16 januari 2023",
    "endDate": "21 mars 2023",
    "location": "Umeå",
    "code": "5EL266",
    "registerCode": "UMU-54320",
    "rating": 0,
    "group": "course"
  },
  {
    "name": "Produktutveckling i medieteknik med metoden \"Design-Build-Test\"",
    "points": 7.5,
    "pace": 25,
    "period": "Vårtermin",
    "year": 2023,
    "description": "Kursen består till största delen av ett projekt. I projektarbetet tillämpar studenten ingenjörmässiga arbetsmetoder genom planering, utveckling och realisering av tekniska system. Projektet utförs i grupp och utformas efter beställning från en kund. Arbetsgången omfattar hela utvecklingskedjan från idé till test av prototyp eller färdigt system. Projektgruppen ska i samråd med beställaren förhandla fram en kravspecifikation som är relevant med hänsyn till tid och resurser. Projektarbetet dokumenteras i en skriftlig rapport samt redovisas muntligt för andra projektgrupper och för beställaren. Kursen innehåller även föreläsningar/seminarier som ger insikt i ingenjörsmässighet och den moderna ingenjörens yrkesroll och arbetsmetoder. Föreläsningarna utgår från idéerna kring CDIO (Conceive, Design, Implement, Operate), hållbar teknikutveckling och entreprenörskap.",
    "prerequisite": "För tillträde till kursen krävs 90 hp tidigare studier som skall inkludera Projektledning 1, 7.5 hp och Människa-datorinteraktion med inriktning mot kognition och design, 7.5 hp eller motsvarande kunskaper.",
    "link": "https://www.umu.se/utbildning/kurser/produktutveckling-i-medieteknik-med-metoden-design-build-test2/",
    "level": "Avancerad nivå",
    "startDate": "16 januari 2023",
    "endDate": "4 juni 2023",
    "location": "Umeå",
    "code": "5TF073",
    "registerCode": "UMU-54908",
    "rating": 0,
    "group": "course"
  },
  {
    "name": "Applikationsutveckling för internet",
    "description": "Kursen behandlar metoder för att lagra och bearbeta data samt tekniker för att utveckla och driftsätta databasdrivna webbaserade flerskiktade system. Den behandlar även hur man kan dra nytta av webbtjänster baserade på SOAP och json och andra webb-apier i de system man utvecklar. Kursen baserar sig på ASP.NET MVC, ENTITY FRAMEWORK, C-Sharp, Visual Studio och SQL Server. Under kursens senare del bedrivs ett verklighetsnära projekt.",
    "prerequisite": "Minst 60 hp avklarade kurser inom huvudområdet Medieteknik eller minst två års sammanlagda studier som skall innefatta Databasteknik och webbaserade system, 7.5 hp (5TF048) eller Databasteknik, 7.5 hp (5DV120) eller motsvarande.",
    "points": 7.5,
    "link": "https://www.umu.se/utbildning/kurser/applikationsutveckling-for-internet/",
    "level": "Grundnivå",
    "code": "5TF042",
    "rating": 0,
    "group": "course"
  },
  {
    "name": "Examensarbete för civilingenjörsprogrammet i Interaktionsteknik och design",
    "description": "Kursen innefattar ett självständigt arbete inom området Interaktionsteknik och design och är vanligtvis förlagd till näringslivs- eller högskolemiljö. Den innehåller problemlösning med ämnesmässig fördjupning i förhållande till kurser som studenten tidigare läst. Arbetet skall dessutom innehålla en fördjupningsdel där studenten visar att han/hon kan applicera och utveckla kunskap förvärvad under programstudierna. Fördjupningen ska relatera till existerande vetenskapliga ståndpunkter och resultat samt dokumenteras enligt praxis. Examensarbetet presenteras skriftligt i rapportform samt muntligt i disputationsform. Studenten skall även förbereda och genomföra en opposition på ett annat examensarbete.",
    "prerequisite": "För tillträde till kursen krävs att studenten uppfyller samtliga krav under rubrik \"4.3 Övriga krav\" i examensbeskrivningen för Civilingenjörsexamen i Interaktionsteknik och design. Dessutom skall någon av kurserna Aktuell utveckling inom interaktionsteknik och design, 9.5 hp eller Student Conference in Computing Science, 7.5 hp  ingå. I undantagsfall kan dispens ges av programansvarig. Beroende på examensarbetets inriktning kan krav på särskilda förkunskaper krävas.",
    "points": 30.0,
    "link": "https://www.umu.se/utbildning/kurser/examensarbete-for-civilingenjorsprogrammet-i-interaktionsteknik-och-design/",
    "level": "Avancerad nivå",
    "code": "5TF049",
    "rating": 0,
    "group": "course"
  }
];

export const subjects = [
  "Allmänna ingenjörskurser",
  "Datavetenskap",
  "Medieteknik",
  "Industridesign",
  "Matematik och matematisk statistik",
  "Psykologi",
  "Teknik för interaktion",
  "Teknik för interaktion yrkesförberedande",
  "Examensarbete",
];

export const colors = [
  "bg-cream",
  "bg-red-300",
  "bg-blue-300",
  "bg-emerald-300",
  "bg-slate-300",
  "bg-violet-300",
];

export const sortOptions = {
  nameRising: "Alfabet (A - Ö)",
  nameFalling: "Alfabet (Ö - A)",
  pointsRising: "Poäng - stigande",
  pointsFalling: "Poäng - fallande",
  studyPaceRising: "Studietakt - stigande",
  studyPaceFalling: "Studietakt - fallande",
}

export const templates = [Templates.id, Templates.empty, Templates.upload];

// export const CleanBuildingBlock = {
//   x: 0,
//   y: 0,
//   w: 1,
//   h: 1,
//   i: "0",
//   content: TestCourse,
// };

// export const CleanBuildingBlockNoResize: BuildingBlock = {
//   x: 7,
//   y: 0,
//   w: 1,
//   h: 1,
//   i: "5",
//   content: TestCourse,
//   isResizable: false,
//   type: "clean",
// };

export const templateEmpty = [
  {
    year: 1,
    courses: [createLayoutBlock(0, 0, 1, 1, getCourse("5TF020"))],
  },
  {
    year: 2,
    courses: [],
  },
  {
    year: 3,
    courses: [],
  },
  {
    year: 4,
    courses: [],
  },
  {
    year: 5,
    courses: [],
  },
];

export const templateID = [
  {
    year: 1,
    courses: [
      createLayoutBlock(0, 0, 1, 2, getCourse("5TF020")),
      createLayoutBlock(1, 0, 1, 2, getCourse("5DV157")),
      createLayoutBlock(2, 0, 1, 2, getCourse("5MA197")),
      createLayoutBlock(3, 0, 1, 2, getCourse("6MA046")),
      createLayoutBlock(4, 0, 2, 1, getCourse("5EL279")),
      createLayoutBlock(4, 1, 2, 1, getCourse("5DV149")),
      createLayoutBlock(6, 0, 2, 1, getCourse("5EL223")),
      createLayoutBlock(6, 1, 2, 1, getCourse("5DV133"))
    ],
  },
  {
    year: 2,
    courses: [
      createLayoutBlock(0, 0, 2, 1, getCourse("6MA036")),
      createLayoutBlock(0, 1, 2, 1, getCourse("5DV212")),
      createLayoutBlock(2, 0, 2, 1, getCourse("2PS030")),
      createLayoutBlock(2, 1, 2, 1, getCourse("5MS069")),
      createLayoutBlock(4, 0, 2, 1, getCourse("5TF019")),
      createLayoutBlock(4, 1, 2, 1, getCourse("5TF080")),
      createLayoutBlock(6, 0, 2, 1, getCourse("5ID219")),
    ],
  },
  {
    year: 3,
    courses: [
      createLayoutBlock(0, 0, 2, 1, getCourse("5DV045")),
      createLayoutBlock(0, 1, 2, 1, getCourse("5DV124")),
      createLayoutBlock(2, 0, 2, 1, getCourse("5TF048")),
      createLayoutBlock(4, 0, 2, 1, getCourse("5EL266")),
      createLayoutBlock(4, 1, 2, 1, getCourse("5EL265")),
      createLayoutBlock(3, 2, 3, 1, getCourse("5TF073")),
      createLayoutBlock(6, 0, 2, 1, getCourse("5TF042")),
    ],
  },
  {
    year: 4,
    courses: [
      createLayoutBlock(4, 0, 4, 3, getCourse("5TF049")),
    ],
  },
  {
    year: 5,
    courses: [
      createLayoutBlock(4, 0, 4, 3, getCourse("5TF049")),
    ],
  },
];

export const emptyCourse: Course = {
  name: "",
  points: -1,
  link: "",
  level: "",// CAN ONLY BE SOME VALUES
  code: "",
  registerCode: "",
  description: "",
  prerequisite: "",
  rating: -1,
  group: "course"
}

export const customCourse: Course = {
  name: "",
  points: 7.5,
  pace: 50,
  link: "",
  level: "",// CAN ONLY BE SOME VALUES
  code: "",
  registerCode: "",
  description: "",
  prerequisite: "",
  rating: -1,
  startDate: "2018-07-22",
  endDate: "2018-07-22",
  group: "custom"
}

export const exchangeCourse: Course = {
  name: "Utbyte",
  points: -1,
  link: "",
  level: "",// CAN ONLY BE SOME VALUES
  code: "",
  registerCode: "",
  description: "",
  prerequisite: "",
  rating: -1,
  group: "exchange"
}

export const workingCourse: Course = {
  name: "Arbete",
  points: -1,
  link: "",
  level: "",// CAN ONLY BE SOME VALUES
  code: "",
  registerCode: "",
  description: "",
  prerequisite: "",
  rating: -1,
  group: "working"
}

export const yearOffCourse: Course = {
  name: "Övrigt",
  points: -1,
  link: "",
  level: "",// CAN ONLY BE SOME VALUES
  code: "",
  registerCode: "",
  description: "",
  prerequisite: "",
  rating: -1,
  group: "yearOff"
}
