import CharacterList from "./components/Characters";
import './App.css'
import Header from "./layout/Header";
import Footer from './layout/Footer';
import { LanguageProvider } from "./context/LanguageContext";

const App = () => {
  return <div className="app-container">
      <LanguageProvider>
        <Header/>
        <main className="main">
          {/* Character List Component */}
            <CharacterList /> 
        </main>
        {/* Footer with Language Switcher */}
        <Footer />
      </LanguageProvider>
    </div>
  
};


export default App;

