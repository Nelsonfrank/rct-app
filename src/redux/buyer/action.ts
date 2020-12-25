import * as Types from './types';
// Fetch Sellers action creators
export const FetchAllSellersRequest = () => {
  return {
    type: Types.FETCH_SELLERS_REQUEST,
  };
};

export const FetchAllSellersSuccess = (sellers: Array<any>) => {
  return {
    type: Types.FETCH_SELLERS_SUCCESS,
    payload: sellers,
  };
};

export const FetchAllSellersError = (error: Array<any>) => {
  return {
    type: Types.FETCH_SELLERS_ERROR,
    error,
  };
};

// Fetch SellerById action creators
export const FetchSellerByIdRequest = () => {
  return {
    type: Types.FETCH_SELLER_BY_ID_REQUEST,
  };
};

export const FetchSellerByIdSuccess = (seller: Array<any>) => {
  return {
    type: Types.FETCH_SELLER_BY_ID_SUCCESS,
    payload: seller,
  };
};

export const FetchSellerByIdError = (error: Array<any>) => {
  return {
    type: Types.FETCH_SELLER_BY_ID_ERROR,
    error,
  };
};

// Fetch Tender action creators
export const FetchTenderRequests = () => {
  return {
    type: Types.FETCH_TENDER_REQUESTS,
  };
};

export const FetchTenderSuccess = (tenderRequests: Array<any>) => {
  return {
    type: Types.FETCH_TENDER_SUCCESS,
    payload: tenderRequests,
  };
};

export const FetchTenderError = (error: Array<any>) => {
  return {
    type: Types.FETCH_TENDER_ERROR,
    error,
  };
};

// Fetch Platforms action creators
export const FetchPlatformsRequest = () => {
  return {
    type: Types.FETCH_PLATFORMS_REQUEST,
  };
};

export const FetchPlatformsSuccess = (platform: Array<any>) => {
  return {
    type: Types.FETCH_PLATFORMS_SUCCESS,
    payload: platform,
  };
};

export const FetchPlatformsError = (error: Array<any>) => {
  return {
    type: Types.FETCH_PLATFORMS_ERROR,
    error,
  };
};

// Fetch platformById Action creators
export const FetchPlatformByIdRequest = () => {
  return {
    type: Types.FETCH_PLATFORM_BY_ID_REQUEST,
  };
};

export const FetchPlatformByIdSuccess = (platform: Array<any>) => {
  return {
    type: Types.FETCH_PLATFORM_BY_ID_SUCCESS,
    payload: platform,
  };
};

export const FetchPlatformByIdError = (error: Array<any>) => {
  return {
    type: Types.FETCH_PLATFORM_BY_ID_ERROR,
    error,
  };
};
