import User1 from '../../../../../assets/images/2.png';
import User2 from '../../../../../assets/images/10.jpg';
import User3 from '../../../../../assets/images/11.jpg';
import User4 from '../../../../../assets/images/9.jpg';
import User5 from '../../../../../assets/images/12.png';
export const ListDataPlaceholder: {
  id: number;
  image: string;
  ownerName: string;
  description: string;
  variety: string;
  grade: string;
  pickupLocation: string;
  stock?: string;
}[] = [
  {
    id: 1,
    image: User2,
    ownerName: 'East Africa milling Ltd',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Cum at veritatis consequatur, sapiente iste optio ea quisquam? Quasi eos 
                  exercitationem saepe assumenda nam quaerat esse perspiciatis quam, consequatur tempora quod!`,
    variety: 'Super Kyela',
    grade: 'One',
    pickupLocation: 'Mbeya',
    stock: '15,000kgs',
  },
  {
    id: 2,
    image: User3,
    ownerName: 'Albert Lema',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Cum at veritatis consequatur, sapiente iste optio ea quisquam? Quasi eos 
                  exercitationem saepe assumenda nam quaerat esse perspiciatis quam, consequatur tempora quod!`,
    variety: 'Magugu',
    grade: 'One',
    pickupLocation: 'Babati',
    stock: '15,000kgs',
  },
  {
    id: 3,
    image: User4,
    ownerName: 'WWA Association Group',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Cum at veritatis consequatur, sapiente iste optio ea quisquam? Quasi eos 
                  exercitationem saepe assumenda nam quaerat esse perspiciatis quam, consequatur tempora quod!`,
    variety: 'Super Shinyanga',
    grade: 'One',
    pickupLocation: 'Shinganya Mjini',
    stock: '15,000kgs',
  },
  {
    id: 4,
    image: User5,
    ownerName: 'Boboa milling Ltd',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Cum at veritatis consequatur, sapiente iste optio ea quisquam? Quasi eos 
                  exercitationem saepe assumenda nam quaerat esse perspiciatis quam, consequatur tempora quod!`,
    variety: 'Super Kyela',
    grade: 'One',
    pickupLocation: 'Mbeya',
    stock: '15,000kgs',
  },
  {
    id: 5,
    image: User1,
    ownerName: 'Mbeya mjini Association Group',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Cum at veritatis consequatur, sapiente iste optio ea quisquam? Quasi eos 
                  exercitationem saepe assumenda nam quaerat esse perspiciatis quam, consequatur tempora quod!`,
    variety: 'Super Kyela',
    grade: 'One',
    pickupLocation: 'Mbeya',
    stock: '15,000kgs',
  },
];
