const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [],

  cart: {
    products: [],
  },

  gallery: 'aenean-ru-bristique-1',

  featuredProductsId: [
    'aenean-ru-bristique-1',
    'aenean-ru-bristique-2',
    'aenean-ru-bristique-3',
    'aenean-ru-bristique-4',
    'aenean-ru-bristique-5',
    'aenean-ru-bristique-24',
  ],
  topSellerProductsId: [
    'aenean-ru-bristique-6',
    'aenean-ru-bristique-7',
    'aenean-ru-bristique-8',
    'aenean-ru-bristique-9',
    'aenean-ru-bristique-10',
    'aenean-ru-bristique-23',
  ],
  saleOffProductsId: [
    'aenean-ru-bristique-11',
    'aenean-ru-bristique-12',
    'aenean-ru-bristique-13',
    'aenean-ru-bristique-14',
    'aenean-ru-bristique-15',
    'aenean-ru-bristique-22',
  ],
  topRatedProductsId: [
    'aenean-ru-bristique-16',
    'aenean-ru-bristique-17',
    'aenean-ru-bristique-18',
    'aenean-ru-bristique-19',
    'aenean-ru-bristique-20',
    'aenean-ru-bristique-21',
  ],

  promoted: {
    productsId: [
      'aenean-ru-bristique-1',
      'aenean-ru-bristique-2',
      'aenean-ru-bristique-3',
    ],
    banners: [
      {
        id: 1,
        bannerTitle: 'Indoor Furniture',
        bannerSubtitle: 'Save up to 50% of all furniture',
        picture: '/images/sofas/sofa-2.jpg',
      },
      {
        id: 2,
        bannerTitle: 'Outdoor Furniture',
        bannerSubtitle: 'Save up to 75% of choosen furniture',
        picture: '/images/dinings/dining-5.jpg',
      },
    ],
  },
  viewport: 'desktop',

  promotions: {
    firstLine: 'GUEST ROOM',
    secondLine: 'SOFA',
    thirdLine: '-20%',
    fourthLine: 'OFFICE CHAIR',
    fifthLine: 'COLLECTION',
    sixthLine: '$200.00',
    seventhLine: 'SPECIAL COLLECTION',
    eighthLine: 'SAVE UP 45% OF FURNITURE',
  },
  compared: {
    products: [],
  },
};

export default initialState;
