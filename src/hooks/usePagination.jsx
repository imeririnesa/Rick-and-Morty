import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../queries/queries';

const usePagination = (status, species) => {
  const [page, setPage] = useState(1);
  const { data, loading, error, fetchMore, refetch } = useQuery(GET_CHARACTERS, {
    variables: { page, status, species },
  });

  const loadMore = () => {
    if (data?.characters.info.next) {
      fetchMore({
        variables: { page: data.characters.info.next },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
  
          // Filter out duplicates based on the id
          const existingCharacterIds = new Set(prev.characters.results.map(character => character.id));
  
          const uniqueNewResults = fetchMoreResult.characters.results.filter(
            newCharacter => !existingCharacterIds.has(newCharacter.id)
          );
  
          return {
            characters: {
              ...fetchMoreResult.characters,
              results: [
                ...prev.characters.results,
                ...uniqueNewResults, // Only append unique characters
              ],
            },
          };
        },
      });
    }
  };
  


  return {
    data,
    loading,
    error,
    loadMore,
    setPage,
    refetch,
    page,
  };
};

export default usePagination;
