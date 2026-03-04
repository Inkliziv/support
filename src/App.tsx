import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialRights from './components/SocialRights';
import JobBoard from './components/JobBoard';
import SupportMap from './components/SupportMap';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AccessibilityWidget from './components/AccessibilityWidget';

function App() {
  const [largeText, setLargeText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('large-text', largeText);
  }, [largeText]);

  useEffect(() => {
    document.body.classList.toggle('high-contrast', highContrast);
  }, [highContrast]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Asosiy mazmunni o'tkazib yuboring
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <SocialRights />
        <JobBoard />
        <SupportMap />
        <ContactForm />
      </main>
      <Footer />
      <AccessibilityWidget
        largeText={largeText}
        setLargeText={setLargeText}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
      />
    </>
  );
}

export default App;
