import { useState } from 'react';
import '../../styles/searchBar.css';
// import client from '../../apis/client';
// import { getSearchResults } from '../../apis/searchApi'
import { items } from './mock';
import { useDispatch } from 'react-redux';
import { getSearchResult } from '../../actions/searchResult'
import { useNavigate } from 'react-router-dom';
// var data = require('./MOCK_DATA.json');

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [videos, setVideos] = useState([]);
  let navigate = useNavigate();


  const dispatch = useDispatch()

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    dispatch(getSearchResult(searchTerm))
    navigate('/search')
  };

  return (
    <div className="App">
      <div className="search-container">
        <div className="search-inner">
          <input type="text" value={value} onChange={onChange} />
          <button onClick={() => onSearch(value)}> Search </button>
        </div>
        <div className="dropdown">
          {items
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.snippet.title.toLowerCase();
              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.snippet.title)}
                className="dropdown-row"
                key={item.snippet.title}>
                {item.snippet.title}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
