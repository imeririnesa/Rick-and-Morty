import { useLanguage } from '../context/LanguageContext'; // Import the custom hook to use language context

const Footer = () => {
  const { changeLanguage } = useLanguage(); // Access the changeLanguage function from context

  return (
    <footer className="footer">
      {/* Button to change language to English */}
      <button onClick={() => changeLanguage('en')}>
        English
      </button>

      {/* Button to change language to Deutsch */}
      <button onClick={() => changeLanguage('de')}>
        Deutsch
      </button>
    </footer>
  );
};

export default Footer;
