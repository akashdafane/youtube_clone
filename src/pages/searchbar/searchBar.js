import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchResult } from '../../actions/searchResult';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/index';
import { SearchIcon } from '../../constants/iconConstants';
import '../../styles/searchBar.css';

const SearchBar = () => {
  const items = useSelector(
    (state) => state?.searchResult?.searchResults || [],
  );

  const [value, setValue] = useState('');

  let navigate = useNavigate();

  const dispatch = useDispatch();

  const onChange = (event) => {
    setValue(event?.target?.value);
    if (event?.target?.value?.length > 0) {
      setTimeout(() => {
        dispatch(getSearchResult(event?.target?.value));
      }, 1000);
    }
  };

  const onSearch = (searchTerm) => {
    if (searchTerm.length > 0) {
      setValue(searchTerm);
      dispatch(getSearchResult(searchTerm));
      navigate('/search');
    }
  };

  return (
    <div className="App">
      <div className="search-container">
        <div className="search-inner">
          <Input type="text" isControlled value={value} onChange={onChange} />
          <div onClick={() => onSearch(value)}>
            <SearchIcon />
          </div>
        </div>
        <div className="dropdown">
          {items
            .filter((item) => {
              const searchTerm = value?.toLowerCase();
              const fullName = item?.snippet?.title?.toLowerCase();
              return (
                searchTerm &&
                fullName?.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item?.snippet?.title)}
                className="dropdown-row"
                key={item?.snippet?.title}>
                {item?.snippet?.title}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
