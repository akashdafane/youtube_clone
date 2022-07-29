export const CHANEL_ID = 'CHANEL_ID';

export const AddChanelId = (id) => (dispatch) => {
  return dispatch({
    type: CHANEL_ID,
    payload: id,
  });
};
