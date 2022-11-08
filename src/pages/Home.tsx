import AppBar from "../components/AppBar";
import Footer from "../components/Footer";
import IconButton from "../components/IconButton";
import Text from "../components/Text";
import Title from "../components/Title";
import { TextVariant, TitleVariant } from "../shared/constants";
import { AiFillBuild } from 'react-icons/ai';
import { BsList, BsViewList } from 'react-icons/bs';

export default function Home() {
  return (
    <main className="h-full flex flex-col justify-between bg-white">
      <div className="h-full flex flex-col justify-evenly items-center">
      <div className="w-3/5 flex flex-col items-center space-y-4 px-4">
        <Title>Kurskatalog</Title>
        <Text size={TextVariant.medium}>
          Vi på Interaktion & Design har ett stort urval av kurser att välja
          bland. Och med många valfria poäng att fylla kan det vara svårt att
          hitta rätt. Denna onlinekatalog samlar information om kurser och
          hjälper dig göra bra val.
        </Text>
      </div>
      <div className="hidden sm:flex justify-center space-x-16 red-">
        <IconButton
          icon={<AiFillBuild size={"2.5em"} />}
          text="Byggare"
          size="large"
          to="/byggare"
        />
        <IconButton icon={<BsViewList size={"2.5em"} />} text="Kurser" size="large" to="/kurser" />
        <IconButton
          icon={<BsList size={"2.5em"} />}
          text="Kursplan"
          size="large"
          to="/obligatoriskt"
        />
      </div>
      </div>
      <div className="hidden sm:block">
        <Footer />
      </div>
      <div className="sm:hidden">
        <AppBar />
      </div>
    </main>
  );
}
