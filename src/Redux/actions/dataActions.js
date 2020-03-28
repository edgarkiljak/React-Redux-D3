import { DBDATA_LOADED } from './action-types';
import { getDBdata } from '../../data/index';

export const loadDBData = () => dispatch => {
  getDBdata().then(data =>
    dispatch({
      type: DBDATA_LOADED,
      payload: data
    })
  );
};
