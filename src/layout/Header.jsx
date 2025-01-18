import { useLanguage } from '../context/LanguageContext';
const Header = () => {
  const { language } = useLanguage();  // Get the current language from the context

  return (
    <header className="header">
      <h1>
        <a href='/'>
          {language === 'de' ? 'Rick und Morty Erforscher' : 'Rick and Morty Explorer'}
        </a>
      </h1>
    </header>
  );
};

export default Header;
