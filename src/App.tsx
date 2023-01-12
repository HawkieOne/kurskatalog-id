import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "react-toggle/style.css";
import { RecoilRoot } from "recoil";
import Main from "./Main";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Kurskatalog</title>
          <link rel="icon" type="image/png" href="kurskatalog.ico" sizes="128x128" />
        </Helmet>
        <RecoilRoot>
          <Main />
        </RecoilRoot>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
