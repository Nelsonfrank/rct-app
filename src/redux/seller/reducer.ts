import * as Actions from './types';

const initialState = {};

const reducer = (state = initialState, action: any) => {
  switch (action.types) {
    case Actions.FETCH_BUYERS_REQUEST:
      return { ...state, loading: true };
    case Actions.FETCH_BUYERS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: [],
      };
    case Actions.FETCH_BUYERS_ERROR:
      return {
        loading: false,
        data: [],
        error: action.error,
      };
    case Actions.FETCH_BUYER_BY_ID_REQUEST:
      return { ...state, loading: true };
    case Actions.FETCH_BUYER_BY_ID_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: [],
      };
    case Actions.FETCH_BUYER_BY_ID_ERROR:
      return {
        loading: false,
        data: [],
        error: action.error,
      };
    case Actions.FETCH_GIVEN_TENDERS_REQUEST:
      return { ...state, loading: true };
    case Actions.FETCH_GIVEN_TENDERS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: [],
      };
    case Actions.FETCH_GIVEN_TENDERS_ERROR:
      return {
        loading: false,
        data: [],
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
