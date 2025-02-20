import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Numbers from "./components/Numbers/Numbers";
import PastDeals from "./components/PastDeals/PastDeals";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Numbers />
      <PastDeals />
    </>
  );
}

export default App;
