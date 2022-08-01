import { combineReducers } from 'redux';
import HistoryReducer from '../reducers/historyReducer';
import SearchResultReducer from '../reducers/searchResult';
import WatchLaterReducer from '../reducers/watchLaterReducer';

const initialState = {
  // chanelId: '',
  searchResult: '',
  // sidebar: { isCollapsed: false, isVisible: false },
};

const appReducer = combineReducers({
  historyData: HistoryReducer,
  watchLaterData: WatchLaterReducer,
  searchResult: SearchResultReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
export { initialState };
