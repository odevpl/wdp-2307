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
