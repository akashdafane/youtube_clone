import { CHANEL_ID } from '../actions/addHistory';

export const initialState = {
  chanelId: [],
};

const AddChanelIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANEL_ID: {
      return {
        ...state,
        chanelId: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default AddChanelIdReducer;
