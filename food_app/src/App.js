import React from 'react'
import Hero from './components/hero/Hero'
import Navbars from './components/Navbar/Navbars'
import Food from './components/food/Food';
import Footer from './components/footer/Footer';


// Import images
import Craft1 from './assets/craft1.jpg'
import Craft2 from './assets/craft2.jpg'
import Chicken from './assets/chicken.jpg'
import Burger from './assets/burger.jpg'
import HeroBg from './assets/hero.jpg'

function App() {
  return (
    <>
      <Navbars />
      <Hero />
      <Food bgImg1={Craft1} bgImg2={Craft2} />
      <Food bgImg={Chicken} />
      <Food bgImg={Burger}/>
      <Footer />
    </>
  );
}

export default App;
