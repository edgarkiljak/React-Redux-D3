import { DBDATA_LOADED, UPDATE_SELECTED_SERVER } from './action-types';
import { getDBdata } from '../../data/index';

export const loadDBData = () => dispatch => {
  getDBdata().then(data =>
    dispatch({
      type: DBDATA_LOADED,
      payload: data
    })
  );
};

/**
 * index of the maching currently in view
 * @param {number} index
 */
export const updateSelectedServer = index => dispatch => {
  dispatch({
    type: UPDATE_SELECTED_SERVER,
    payload: index
  });
};
