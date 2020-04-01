import {
  UPDATE_SELECTED_SERVER,
  DBDATA_LOADED
} from '../../redux/actions/action-types';
import dataReducer from '../../redux/reducers/dashboard';

describe('testing reducers', () => {
  test(' UPDATE_SELECTED_SERVER case default ', () => {
    const action = { type: 'test_action' };
    const initialState = { data: [], selectedServer: 0 };
    expect(dataReducer(undefined, action)).toEqual(initialState);
  });

  test(' UPDATE_SELECTED_SERVER returns updated state ', () => {
    const action = { type: 'UPDATE_SELECTED_SERVER', payload: 1 };
    const expectedState = { data: [], selectedServer: 1 };
    expect(dataReducer(undefined, action)).toEqual(expectedState);
  });
});
