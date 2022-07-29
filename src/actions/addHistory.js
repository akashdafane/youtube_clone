export const CHANEL_ID = 'CHANEL_ID';

export const AddChanelId = (id, title, channel) => (dispatch) => {
  return dispatch({
    type: CHANEL_ID,
    payload: {id, title, channel}
  });
};
