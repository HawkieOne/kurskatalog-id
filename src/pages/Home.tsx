import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import IconButton from "../components/IconButton";
import Navbar from "../components/Navbar";
import Text from "../components/Text";
import Title from "../components/Title";

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-between">
      <main className="h-full flex flex-col justify-between bg-cream">
        <Navbar />
        <div className="flex flex-col items-center space-y-4 px-4">
          <Title>Kurskatalog</Title>
          <Text>
            Vi på Interaktion & Design har ett stort urval av kurser att välja
            bland. Och med många valfria poäng att fylla kan det vara svårt att
            hitta rätt. Denna onlinekatalog samlar information om kurser och
            hjälper dig göra bra val.
          </Text>
        </div>
        <div className="hidden sm:flex justify-center space-x-16">
          <IconButton icon={<p>HEJ</p>} text="Byggare" size="large" to="/byggare"/>
          <IconButton icon={<p>HEJ</p>} text="Kurser" size="large" to="/kurser"/>
          <IconButton
            icon={<p>HEJ</p>}
            text="Obligatoriska kurser"
            size="large"
            to="/obligatoriskt"
          />
        </div>
        <div className="hidden sm:block">
            <Footer />
        </div>
        <div className="sm:hidden">
          <AppBar />
        </div>
      </main>
    </div>
  );
}
