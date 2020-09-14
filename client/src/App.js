import React from 'react';
import Header from './Header/Header';
import About from './About-Rates-Testimonials/About';
import Rates from './About-Rates-Testimonials/Rates';
import Contact from './Contact/Contact/Contact';
import Footer from './Footer/Footer';

function App() {
  return (
<>
<nav>
  <h1>Anne Slovin Voice Studio</h1>
  <ul>
    <li>About</li>
    <li>Philosophy</li>
    <li>Rates/Policies</li>
    <li>Testimonials</li>
    <li>Contact</li>
  </ul>
</nav>
<Header/>
<About/>
<Rates/>
<Contact/>
<Footer/>
</>
  );
}

export default App;
