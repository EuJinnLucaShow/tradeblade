import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Numbers from "./components/Numbers/Numbers";
import PastDeals from "./components/PastDeals/PastDeals";
import AboutUs from "./components/AboutUs/AboutUs";
import Tariffs from "./components/Tariffs/Tariffs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Faq from "./components/Faq/Faq";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Numbers />
      <PastDeals />
      <AboutUs />
      <Tariffs />
      <Faq />
    </>
  );
}

export default App;
