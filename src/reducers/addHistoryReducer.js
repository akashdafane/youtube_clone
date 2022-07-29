import { CHANEL_ID } from '../actions/addHistory';

export const initialState = {
  chanelId: [],
};

const AddChanelIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANEL_ID: {
      console.log('ccc')
      return {
        // ...state,
        // chanelId: action.payload
        // chanelId: [...state.chanelId, {data : action.payload } || []],
        chanelId: state.chanelId.push({data: action.payload})
        // chanelId: state.chanelId.concat(action.payload),
      };
    }
    default: {
      return state;
    }
  }
};

export default AddChanelIdReducer;
