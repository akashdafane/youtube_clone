import { combineReducers } from 'redux';
import AddChanelIdReducer from '../reducers/addHistoryReducer';
import SearchResultReducer from '../reducers/searchResult';
import WatchLaterReducer from '../reducers/watchLater';

const initialState = {
  // chanelId: '',
  searchResult: '',
  // sidebar: { isCollapsed: false, isVisible: false },
};

const appReducer = combineReducers({
  chanelId: AddChanelIdReducer,
  watchLaterData: WatchLaterReducer,
  searchResult: SearchResultReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
export { initialState };
