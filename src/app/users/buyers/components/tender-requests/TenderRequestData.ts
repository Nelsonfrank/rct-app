import Request1 from '../../../../../assets/images/14.jpg';
import Request2 from '../../../../../assets/images/6.jpg';
import Request3 from '../../../../../assets/images/7.jpg';
import Request4 from '../../../../../assets/images/13.jpg';
import Request5 from '../../../../../assets/images/11.jpg';

export const ListDataPlaceholder: {
  id: number;
  image: string;
  ownerName: string;
  description: string;
  variety: string;
  grade: string;
  pickupLocation: string;
  stock: string;
}[] = [
  {
    id: 1,
    image: Request1,
    ownerName: 'Wamama Union Association',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Cum at veritatis consequatur, sapiente iste optio ea quisquam? Quasi eos 
                  exercitationem saepe assumenda nam quaerat esse perspiciatis quam, consequatur tempora quod!`,
    variety: 'Super Kyela',
    grade: 'One',
    pickupLocation: 'Kilosa',
    stock: '14,342kgs',
  },
  {
    id: 2,
    image: Request2,
    ownerName: 'Ally juma',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Cum at veritatis consequatur, sapiente iste optio ea quisquam? Quasi eos 
                  exercitationem saepe assumenda nam quaerat esse perspiciatis quam, consequatur tempora quod!`,
    variety: 'Super Mtibwa',
    grade: 'One',
    pickupLocation: 'Morogoro',
    stock: '14,342kgs',
  },
  {
    id: 3,
    image: Request3,
    ownerName: 'Alfred john',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Cum at veritatis consequatur, sapiente iste optio ea quisquam? Quasi eos 
                  exercitationem saepe assumenda nam quaerat esse perspiciatis quam, consequatur tempora quod!`,
    variety: 'Super Pwani',
    grade: 'One',
    pickupLocation: 'Pwani',
    stock: '14,342kgs',
  },
  {
    id: 4,
    image: Request4,
    ownerName: 'Frank David',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Cum at veritatis consequatur, sapiente iste optio ea quisquam? Quasi eos 
                  exercitationem saepe assumenda nam quaerat esse perspiciatis quam, consequatur tempora quod!`,
    variety: 'Super Ngorongoro',
    grade: 'One',
    pickupLocation: 'Arusha',
    stock: '14,342kgs',
  },
  {
    id: 5,
    image: Request5,
    ownerName: 'East Africa milling Ltd',
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Cum at veritatis consequatur, sapiente iste optio ea quisquam? Quasi eos 
                  exercitationem saepe assumenda nam quaerat esse perspiciatis quam, consequatur tempora quod!`,
    variety: 'Super Kyela',
    grade: 'One',
    pickupLocation: 'Shinyanya',
    stock: '14,342kgs',
  },
];
