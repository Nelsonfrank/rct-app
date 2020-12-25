import * as Actions from './types';

const initialState = {};

const reducer = (state = initialState, action: any) => {
  switch (action.types) {
    case Actions.FETCH_SELLERS_REQUEST:
      return { ...state, loading: true };
    case Actions.FETCH_SELLERS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: [],
      };
    case Actions.FETCH_SELLERS_ERROR:
      return {
        loading: false,
        data: [],
        error: action.error,
      };
    case Actions.FETCH_SELLER_BY_ID_REQUEST:
      return { ...state, loading: true };
    case Actions.FETCH_SELLER_BY_ID_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: [],
      };
    case Actions.FETCH_SELLER_BY_ID_ERROR:
      return {
        loading: false,
        data: [],
        error: action.error,
      };
    case Actions.FETCH_TENDER_REQUESTS:
      return { ...state, loading: true };
    case Actions.FETCH_TENDER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: [],
      };
    case Actions.FETCH_TENDER_ERROR:
      return {
        loading: false,
        data: [],
        error: action.error,
      };
    case Actions.FETCH_PLATFORMS_REQUEST:
      return { ...state, loading: true };
    case Actions.FETCH_PLATFORMS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: [],
      };
    case Actions.FETCH_PLATFORMS_ERROR:
      return {
        loading: false,
        data: [],
        error: action.error,
      };
    case Actions.FETCH_PLATFORM_BY_ID_REQUEST:
      return { ...state, loading: true };
    case Actions.FETCH_PLATFORM_BY_ID_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: [],
      };
    case Actions.FETCH_PLATFORM_BY_ID_ERROR:
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
