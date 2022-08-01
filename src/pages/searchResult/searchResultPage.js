import React from 'react';
import { useSelector } from 'react-redux';
import Videos from './videos';

const SearchResultPage = () => {
  const result = useSelector(
    (state) => state?.searchResult?.searchResults || [],
  );

  return (
    <div>
      {result &&
        result?.length > 0 &&
        result.map((value) => (
          <>
            <Videos
              id={value?.id?.videoId}
              title={value?.snippet?.title}
              description={value?.snippet?.description}
            />
          </>
        ))}
    </div>
  );
};

export default SearchResultPage;
