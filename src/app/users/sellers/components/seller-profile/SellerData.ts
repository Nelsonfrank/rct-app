import profile1 from '../../../../../assets/images/10.jpg';
import profile2 from '../../../../../assets/images/2.png';
import profile3 from '../../../../../assets/images/3.jpg';

export const SellerProfileData: {
  id: number;
  fullName: string;
  userCategory: string;
  firstName: string;
  lastName: string;
  phone: string;
  nationality: string;
  email: string;
  website: string;
  profileImg: string;
  recentTenders: {
    id: number;
    tenderImg: string;
    title: string;
    descript: string;
  }[];
  scaleStatus: string;
  experience: string;
  tags: string[];
  tenderDetails: {
    variety: string;
    grade: string;
    stock?: string;
    request?: string;
    location?: string;
    pickupLocation?: string;
  }[];
}[] = [
  {
    id: 1,
    fullName: 'John Emanuel',
    userCategory: 'seller',
    firstName: ' John',
    lastName: 'Emanuel',
    phone: '+255 688 532 234',
    nationality: 'Tanzanian',
    email: 'string',
    website: 'https://rct.co.tz',
    scaleStatus: 'large',
    experience: '11-20',
    profileImg: profile1,
    recentTenders: [
      {
        id: 1,
        tenderImg: profile1,
        title: 'string',
        descript: 'string',
      },
      {
        id: 2,
        tenderImg: profile1,
        title: 'string',
        descript: 'string',
      },
      {
        id: 3,
        tenderImg: profile1,
        title: 'string',
        descript: 'string',
      },
    ],
    tags: ['RTC Approved', 'TBS Certified', 'Individual'],
    tenderDetails: [
      {
        variety: 'kyela',
        grade: '1',
        stock: '1.5 tonnes',
        pickupLocation: 'string',
        request: 'string',
        location: 'string',
      },
    ],
  },
  {
    id: 2,
    fullName: 'Emanuel John',
    userCategory: 'seller',
    firstName: ' John',
    lastName: 'Emanuel',
    phone: '+255 688 532 234',
    nationality: 'Tanzanian',
    website: 'https://rct.co.tz',
    email: 'string',
    profileImg: profile2,
    scaleStatus: 'large',
    experience: '11-20',
    tags: ['RTC Approved', 'TBS Certified', 'Individual'],
    recentTenders: [
      {
        id: 1,
        tenderImg: profile2,
        title: 'string',
        descript: 'string',
      },
      {
        id: 2,
        tenderImg: profile2,
        title: 'string',
        descript: 'string',
      },
      {
        id: 3,
        tenderImg: profile2,
        title: 'string',
        descript: 'string',
      },
    ],
    tenderDetails: [
      {
        variety: 'kyela',
        grade: '1',
        stock: '1.5 tonnes',
        pickupLocation: 'string',
        request: 'string',
        location: 'string',
      },
    ],
  },
  {
    id: 3,
    fullName: 'Emanuel Johnathan',
    userCategory: 'seller',
    firstName: ' John',
    lastName: 'Emanuel',
    phone: '+255 688 532 234',
    nationality: 'Tanzanian',
    website: 'https://rct.co.tz',
    email: 'string',
    profileImg: profile3,
    scaleStatus: 'large',
    experience: '11-20',
    tags: ['RTC Approved', 'TBS Certified', 'Individual'],
    recentTenders: [
      {
        id: 1,
        tenderImg: profile3,
        title: 'string',
        descript: 'string',
      },
      {
        id: 2,
        tenderImg: profile3,
        title: 'string',
        descript: 'string',
      },
      {
        id: 3,
        tenderImg: profile3,
        title: 'string',
        descript: 'string',
      },
    ],
    tenderDetails: [
      {
        variety: 'kyela',
        grade: '1',
        stock: '1.5 tonnes',
        pickupLocation: 'string',
        request: 'string',
        location: 'string',
      },
    ],
  },
];
