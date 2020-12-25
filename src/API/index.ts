import axios from 'axios';

axios.defaults.baseURL = 'http://142.93.210.105:1122';

/**
 * Fetch list of all sellers
 * @function
 * @name GetAllUsers
 */
export const GetAllUsers = () => {
  return axios
    .get(`/api/v1/seller`)
    .then((response) => response)
    .catch((error) => error);
};

/**
 * Get seller by id
 * @function
 * @name GetSellerById
 */
export const GetSellerById = (sellerId: string) => {
  return axios
    .get(`/api/v1/seller/${sellerId}`)
    .then((response) => response)
    .catch((error) => error);
};

export const GetSellerByPlatform = (platformId: string) => {
  return axios
    .get(`/api/v1/seller/platform/${platformId}`)
    .then((response) => response)
    .catch((error) => error);
};

export const GetAllTenderRequests = () => {
  return axios
    .get(`/api/v1/seller/tender`)
    .then((response) => response)
    .catch((error) => error);
};

export const GetTenderRequestById = (tenderRequestId: string) => {
  return axios
    .get(`/api/v1/seller/tender/${tenderRequestId}`)
    .then((response) => response)
    .catch((error) => error);
};

export const PostTenderRequest = (payload: PostTenderRequestType) => {
  return axios
    .post(`/api/v1/seller/tender`, payload)
    .then((response) => response)
    .catch((error) => error);
};

export const CreatePlatform = (payload: CreatePlatformTypes) => {
  return axios
    .post(`/api/v1/platform`, payload)
    .then((response) => response)
    .catch((error) => error);
};

export const FetchAllPlatform = () => {
  return axios
    .get(`/api/v1/platform`)
    .then((response) => response)
    .catch((error) => error);
};

export const FetchPlatformByRegion = (regionId: string) => {
  return axios
    .get(`/api/v1/platform/region/${regionId}`)
    .then((response) => response)
    .catch((error) => error);
};

export const FetchPlatformByCountry = (countryId: string) => {
  return axios
    .get(`/api/v1/platform/country/${countryId}`)
    .then((response) => response)
    .catch((error) => error);
};

export const FetchPlatformById = (platformId: string) => {
  return axios
    .get(`/api/v1/platform/${platformId}`)
    .then((response) => response)
    .catch((error) => error);
};
