import axios from 'axios';

axios.defaults.baseURL = 'http://142.93.210.105:1122';

/**
 * Fetch list of all sellers
 * @function
 * @name GetAllUsers
 */
export const GetAllUsers = () => {
  return axios
    .get(`/api/v1/seller/offset/0`)
    .then((response) => response)
    .catch((error) => error);
};

/**
 * Create new seller
 * @param token
 * @function
 * @name AddSeller
 */
export const AddSeller = (payload: any, adminId: any, token: any) => {
  return axios
    .post(`/api/v1/seller/${adminId}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((error) => error);
};

/**
 * Delete seller
 * @param sellerId
 * @function
 * @name DeleteSeller
 */
export const DeleteSeller = (sellerId: any, adminAccessToken: any) => {
  return axios
    .delete(`/api/v1/seller/${sellerId}`, {
      headers: {
        Authorization: `Bearer ${adminAccessToken}`,
      },
    })
    .then((response) => response)
    .catch((error) => error);
};

/**
 * Disable seller
 * @param sellerId
 * @function
 * @name DisableSeller
 */
export const DisableSeller = (
  sellerId: any,
  payload: { toggle: string },
  adminAccessToken: string,
) => {
  return axios
    .put(`/api/v1/seller/toggle/${sellerId}`, payload, {
      headers: {
        Authorization: `Bearer ${adminAccessToken}`,
      },
    })
    .then((response) => response)
    .catch((error) => error);
};

/**
 * Update seller
 * @param sellerId
 * @function
 * @name UpdateSeller
 */
export const UpdateSellerById = (
  sellerId: any,
  payload: any,
  adminAccessToken: string,
) => {
  return axios
    .put(`/api/v1/seller/toggle/${sellerId}`, payload, {
      headers: {
        Authorization: `Bearer ${adminAccessToken}`,
      },
    })
    .then((response) => response)
    .catch((error) => error);
};
/**
 * Complete User Registration
 * @param payload
 * @function
 * @name CompleteRegistration
 */
export const CompleteRegistration = (payload: any) => {
  return axios
    .put(`/api/v1/user/complete`, payload)
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

/**
 * Create Platform
 * @param payload
 * @param token
 */
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

export const GetAllPlatform = () => {
  return axios
    .get(`/api/v1/platform/offset/0`)
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

export const GetAllLeader = (token: string) => {
  return axios
    .get(`/api/v1/leader`, {
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
    .catch((error) => error.message);
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
    .catch((error) => error.message);
};

export const AddVariety = (payload: any, token: string) => {
  return axios
    .post(`/api/v1/variety`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((error) => error.message);
};

export const GetAllVariety = () => {
  return axios
    .get(`/api/v1/variety`)
    .then((response) => response)
    .catch((error) => error.message);
};

export const AddPriceRate = (payload: any) => {
  return axios
    .post(`/api/v1/price-rate`, payload)
    .then((response) => response)
    .catch((error) => error);
};

export const GetPriceRate = () => {
  return axios
    .get(`/api/v1/price-rate`)
    .then((response) => response)
    .catch((error) => error);
};
