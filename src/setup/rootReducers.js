import { combineReducers } from 'redux';
import CountReducer from '../reducers/countReducer';
import AddChanelIdReducer from '../reducers/addHistoryReducer';

const initialState = {
  count: '',
  chanelId: '',
  // sidebar: { isCollapsed: false, isVisible: false },
};

const appReducer = combineReducers({
  count: CountReducer,
  chanelId: AddChanelIdReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
export { initialState };
