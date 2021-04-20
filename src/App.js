import React from "react"
import './App.scss';
import Header from "./components/pages/Header"
import Banner from "./components/pages/Banner"
import Fleet from "./components/pages/Fleet"
import FindDealer from "./components/pages/FindDealer"
import News from "./components/pages/News"
import Footer from "./components/pages/Footer"

function App() {
  return ( 
    <div>
      <Header />
      <Banner />
      <Fleet />
      <FindDealer />
      <News />
      <Footer />
    </div>
  );

}

export default App;
