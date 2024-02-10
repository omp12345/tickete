import "./App.css";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";

import Header from "./Components/Header";
import Midbottom from "./Components/Midbottom";
import Midsection from "./Components/Midsection";
import TotalPay from "./Components/TotalPay";

function App() {
  return (
    <>
      <div className="app">
        <Header />

        <Midsection />

        <Midbottom />

        <TotalPay />

        <FAQ />

        <Footer />
      </div>
    </>
  );
}

export default App;
