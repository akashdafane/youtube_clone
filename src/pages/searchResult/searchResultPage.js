import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Videos from './videos';


const SearchResultPage = () => {
  const result = useSelector(
    (state) => state?.searchResult?.searchResults || [],
  );

  let navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/watch/${id}`);
  };

  return (
    <div>
      {result &&
        result?.length > 0 &&
        result.map((value) => (
          <>
          <Videos
            handleNavigation={handleNavigation}
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
