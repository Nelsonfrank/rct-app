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

export const CreatePlatform = (
  payload: CreatePlatformTypes,
  token: string | null,
) => {
  return axios
    .post(`/api/v1/platform`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((error) => error);
};

export const CreateLeader = (
  payload: { dial_code: string; phone_number: string; name: string },
  platformId: string | null,
  token: string,
) => {
  return axios
    .post(`/api/v1/leader/${platformId}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
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

export const UserLogin = (payload: any) => {
  return axios
    .post(`/api/v1/user/signin`, payload)
    .then((response) => response)
    .catch((error) => error);
};

export const CreateToken = (payload: any) => {
  return axios
    .post(`/api/v1/user/createotp`, payload)
    .then((response) => response)
    .catch((error) => error);
};

export const VerifyToken = (payload: any) => {
  return axios
    .post(`/api/v1/user/verifyotp`, payload)
    .then((response) => response)
    .catch((error) => error);
};

export const GenerateToken = (token: any) => {
  return axios
    .post(`/api/v1/session/generatetoken/${token}`)
    .then((response) => response)
    .catch((error) => error);
};

export const RefreshToken = (token: any) => {
  return axios
    .post(`/api/v1/session/refreshtoken`, token)
    .then((response) => response)
    .catch((error) => error);
};

export const GetUserInformation = (token: any) => {
  return axios
    .get(`/api/v1/user/information`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((error) => error);
};

export const ManagementLogin = (payload: any) => {
  return axios
    .post(`/api/v1/user/signin-password`, payload)
    .then((response) => response)
    .catch((error) => error);
};

export const GenerateTokenByPassword = (payload: any) => {
  return axios
    .post(`/api/v1/session/generatetoken-by-password`, payload)
    .then((response) => response)
    .catch((error) => error);
};
