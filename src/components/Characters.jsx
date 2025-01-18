import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext'; // Importing the custom hook
import Filter from './Filter';
import LoadMoreButton from './LoadMore';
import usePagination from '../hooks/usePagination';

const CharacterList = () => {
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const [sort, setSort] = useState('name');

  const {
    data,
    loading: paginatedLoading,
    error,
    loadMore,
  } = usePagination(status, species, sort);

  const { language, translations } = useLanguage(); // Using the language context
  const charactersToDisplay = data?.characters?.results || [];

  // Sorting characters based on selected criteria
  const sortedResults = [...charactersToDisplay].sort((a, b) => {
    if (sort === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sort === 'origin') {
      return a.origin?.name?.localeCompare(b.origin?.name) || 0;
    }
    return 0;
  });

  return (
    <div>
      {/* Filter Component */}
      <Filter 
        status={status} 
        setStatus={setStatus} 
        species={species} 
        setSpecies={setSpecies} 
        sort={sort} 
        setSort={setSort} 
      />

      {/* Loading and Error Handling */}
      {paginatedLoading ? (
        <span className="spinner">
          {/* SVG spinner */}
          <svg
            fill="#000000"
            viewBox="0 -0.5 25 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.818 6.664s0 0-.001 0c-1.02 0-1.847-.827-1.847-1.847s.827-1.847 1.847-1.847 1.847.827 1.847 1.847c0 .51-.207.972-.541 1.306-.324.334-.776.541-1.277.541-.01 0-.019 0-.029 0zm-2.97 7.182s0 0-.001 0c-1.02 0-1.847-.827-1.847-1.847s.827-1.847 1.847-1.847 1.847.827 1.847 1.847c0 .51-.207.972-.541 1.306-.324.334-.776.541-1.278.541-.01 0-.021 0-.031 0h.002zM12 3c-1.02 0-1.847-.827-1.847-1.847S10.98-.694 12-.694 13.847.133 13.847 1.153c0 .51-.207.972-.541 1.306-.324.334-.776.541-1.277.541-.01 0-.019 0-.029 0z"></path>
          </svg>
        </span>
      ) : error ? (
        <span className="error">{translations[language].errorMessage || 'An error occurred. Please try again.'}</span>
      ) : (
        <>
          {/* Character List */}
          <ul className="char-list list-style-none">
  {sortedResults.length > 0 ? (
    sortedResults.map((char) => {
      return (
        <li className="char-list-item" key={char.id}>
          <h3>{char.name}</h3>
          <p>Status: {char.status} </p> {/* Removed translation for status */}
          <p>{translations[language].species} {char.species}</p>
          <p>{translations[language].gender} &nbsp;
            {translations[language].genderOptions[char.gender.toLowerCase()] || translations[language].genderOptions.other}
          </p>
          <p>{translations[language].origin}: {char.origin?.name || translations[language].unknown} </p>
        </li>
      );
    })
  ) : (
    <p>{translations[language].noCharactersFound || 'No characters found.'}</p>
  )}
</ul>

          {/* Load More Button */}
          <LoadMoreButton onClick={loadMore} />
        </>
      )}
    </div>
  );
};

export default CharacterList;
