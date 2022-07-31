import { CHANEL_ID, REMOVE_HISTORY } from '../actions/addHistory';

export const initialState = {
  chanelId: [],
};

const AddChanelIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANEL_ID: {
      return {
        chanelId: [...state.chanelId, { data: action.payload } || []],
      };
    }
    case REMOVE_HISTORY: {
      const newList = state.chanelId.filter((e) => e?.data?.id !== action?.id);
      return {
        ...state.chanelId,
        chanelId: newList,
      };
    }
    default: {
      return state;
    }
  }
};

export default AddChanelIdReducer;
