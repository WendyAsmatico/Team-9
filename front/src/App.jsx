import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header/header';
import Contact from './Components/Contact/Contact';
import Accueil from './Components/Accueil/Accueil';
import image from './assets/fond-nature-aquarelle-peinte-main_23-2148941599.avif'
import TreeMap from './components/Map';

function App() {
  return (
    <Router>
      <div className="App" style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
      }}>
        <Header />
        <Routes>
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/map" element={<TreeMap />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );

}

export default App;
