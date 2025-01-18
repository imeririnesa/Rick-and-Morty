import  { createContext, useState, useContext } from 'react';

// Create the language context
const LanguageContext = createContext();

// Create a custom hook to use the language context
export const useLanguage = () => {
  return useContext(LanguageContext);
};

const translations = {
    en: {
      status: 'Status:',
      all: 'All',
      alive: 'Alive',
      dead: 'Dead',
      unknown: 'Unknown',
      species: 'Species:',
      speciesPlaceholder: 'Enter species',
      sortBy: 'Sort By:',
      name: 'Name',
      origin: 'Origin',
      gender: 'Gender:',
      genderOptions: {
        male: 'Male',
        female: 'Female',
        other: 'Other'
      }
    },
    de: {
      status: 'Status:',
      all: 'Alle',
      alive: 'Lebendig',
      dead: 'Tot',
      unknown: 'Unbekannt',
      species: 'Spezies:',
      speciesPlaceholder: 'Geben Sie die Spezies ein',
      sortBy: 'Sortieren nach:',
      name: 'Name',
      origin: 'Herkunft',
      gender: 'Geschlecht:',
      genderOptions: {
        male: 'Männlich',
        female: 'Weiblich',
        other: 'Andere'
      }
    }
    // You can add more languages here
  };
  
  

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language is English

  // Function to change the language
  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};
