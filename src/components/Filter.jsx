import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext'; // Importing the custom hook

const Filter = ({ status, setStatus, species, setSpecies, sort, setSort }) => {
  const [debouncedSpecies, setDebouncedSpecies] = useState(species);

  const { language, translations } = useLanguage(); // Accessing language context

  // Debounce species input
  useEffect(() => {
    const handler = setTimeout(() => {
      setSpecies(debouncedSpecies);
    }, 700);

    return () => {
      clearTimeout(handler);
    };
  }, [debouncedSpecies, setSpecies]);

  const handleStatusChange = (e) => setStatus(e.target.value);
  const handleSpeciesChange = (e) => setDebouncedSpecies(e.target.value);
  const handleSortChange = (e) => setSort(e.target.value);

  return (
    <div className="filters">
      {/* Status Filter */}
      <div className="filter-wrapper filter-status">
        <label>{translations[language].status}</label> {/* Dynamically translated label */}
        <select value={status} onChange={handleStatusChange}>
          <option value="">{translations[language].all}</option> {/* Dynamic options */}
          <option value="Alive">{translations[language].alive}</option>
          <option value="Dead">{translations[language].dead}</option>
          <option value="unknown">{translations[language].unknown}</option>
        </select>
      </div>

      {/* Species Filter */}
      <div className="filter-wrapper filter-search">
        <label>{translations[language].species}</label> {/* Dynamically translated label */}
        <input
          type="text"
          value={debouncedSpecies}
          onChange={handleSpeciesChange}
          placeholder="Species" 
        />
      </div>

      {/* Sorting Options */}
      <div className="filter-wrapper filter-sort">
        <label>{translations[language].sortBy}</label> {/* Dynamically translated label */}
        <select value={sort} onChange={handleSortChange}>
          <option value="name">{translations[language].name}</option> {/* Dynamic options */}
          <option value="origin">{translations[language].origin}</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
