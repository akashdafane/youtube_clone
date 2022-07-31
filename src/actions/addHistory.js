export const CHANEL_ID = 'CHANEL_ID';
export const REMOVE_HISTORY = 'REMOVE_HISTORY';

export const AddChanelId = (id, title, channel) => (dispatch) => {
  return dispatch({
    type: CHANEL_ID,
    payload: { id, title, channel },
  });
};

export const removeHistory = (id) => (dispatch) => {
  return dispatch({
    type: REMOVE_HISTORY,
    id: id,
  });
};
