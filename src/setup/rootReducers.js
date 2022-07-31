import { combineReducers } from 'redux';
import CountReducer from '../reducers/countReducer';
import AddChanelIdReducer from '../reducers/addHistoryReducer';
import SearchResultReducer from '../reducers/searchResult';
import WatchLaterReducer from '../reducers/watchLater';

const initialState = {
  count: '',
  // chanelId: '',
  searchResult: '',
  // sidebar: { isCollapsed: false, isVisible: false },
};

const appReducer = combineReducers({
  count: CountReducer,
  chanelId: AddChanelIdReducer,
  watchLaterData: WatchLaterReducer,
  searchResult: SearchResultReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
export { initialState };
