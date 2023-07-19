import images from './images';

const wines = [
  {
    title: 'Dia White Wine',
    price: 'Rs. 520',
    tags: '750 ml',
  },
  {
    title: 'Fratelli Cabernet Franc Shiraz',
    price: 'Rs. 850',
    tags: '750 ml',
  },
  {
    title: 'Dia Red Wine',
    price: 'Rs. 540',
    tags: ' 750 ml',
  },
  {
    title: 'J Noon India | Red Wine',
    price: 'Rs. 2500',
    tags: '750 ml',
  },
  {
    title: 'Fratelli Cabernet Sauvignon',
    price: 'Rs. 850',
    tags: '750 ml',
  },
];

const Quick_Bites = [
  {
    title: 'Mexican Cheese Nachos',
    price: 'Rs. 299',
    tags: '',
  },
  {
    title: "Chicken Popcorn",
    price: 'Rs. 359',
    tags: '',
  },
  {
    title: 'Beer Corn Fritters',
    price: 'Rs. 299',
    tags: '',
  },
  {
    title: 'Cheese Balls',
    price: 'Rs 390',
    tags: '',
  },
  {
    title: 'Fish Finger',
    price: 'Rs. 359',
    tags: '',
  },
  {
    title: 'Veg Manchurian',
    price: 'Rs. 309',
    tags: '',
  },
  {
    title: 'House Fries',
    price: 'Rs. 259',
    tags: '',
  },
  {
    title: 'Garlic Bread',
    price: 'Rs. 359',
    tags: '',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Restaurant of the year.',
    subtitle: '           ',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: '          ',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: '        ',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: '        ',
  },
];

export default { wines, Quick_Bites, awards };
