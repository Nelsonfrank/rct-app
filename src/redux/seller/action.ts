import * as Types from './types';

// Fetch buyers action creators
export const FetchAllBuyersRequest = () => {
  return {
    type: Types.FETCH_BUYERS_REQUEST,
  };
};

export const FetchAllBuyersSuccess = (buyers: Array<any>) => {
  return {
    type: Types.FETCH_BUYERS_SUCCESS,
    payload: buyers,
  };
};

export const FetchAllBuyersError = (error: Array<any>) => {
  return {
    type: Types.FETCH_BUYERS_ERROR,
    error,
  };
};

// Fetch sellerById action creators
export const FetchBuyerByIdRequest = () => {
  return {
    type: Types.FETCH_BUYER_BY_ID_REQUEST,
  };
};

export const FetchBuyerByIdSuccess = (seller: Array<any>) => {
  return {
    type: Types.FETCH_BUYER_BY_ID_SUCCESS,
    payload: seller,
  };
};

export const FetchBuyerByIdError = (error: Array<any>) => {
  return {
    type: Types.FETCH_BUYER_BY_ID_ERROR,
    error,
  };
};

// Fetch Tender action creators
export const FetchGivenTenderRequest = () => {
  return {
    type: Types.FETCH_GIVEN_TENDERS_REQUEST,
  };
};

export const FetchGivenTenderSuccess = (givenTender: Array<any>) => {
  return {
    type: Types.FETCH_GIVEN_TENDERS_SUCCESS,
    payload: givenTender,
  };
};

export const FetchGivenTenderError = (error: Array<any>) => {
  return {
    type: Types.FETCH_GIVEN_TENDERS_ERROR,
    error,
  };
};
