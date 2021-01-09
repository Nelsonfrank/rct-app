interface PostTenderRequestType {
  quantity: string;
  selling_price: string;
}

interface CreatePlatformTypes {
  platform_name: string;
  platform_country_dial_code: string;
  platform_region: string;
  image_string: string;
}

interface userLoginProps {
  dial_code: string;
  phoneNumber: string;
}
