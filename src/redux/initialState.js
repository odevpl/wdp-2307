const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      oldPrice: 55,
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      picture: 'images/beds/bed-1.jpg',
      isFavorite: true,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      stars: 0,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      picture: 'images/beds/bed-2.jpg',
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      myStars: 4,
      promo: 'sale',
      newFurniture: true,
      picture: 'images/beds/bed-3.jpg',
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      stars: 4,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      picture: 'images/beds/bed-4.jpg',
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      oldPrice: 35,
      price: 30,
      stars: 2,
      myStars: 3,
      promo: 'sale',
      newFurniture: true,
      picture: 'images/beds/bed-5.jpg',
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'chair',
      oldPrice: 35,
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      picture: 'images/chairs/chair-1.jpg',
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'chair',
      oldPrice: 35,
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      picture: 'images/chairs/chair-2.jpg',
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'chair',
      oldPrice: 35,
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      picture: 'images/chairs/chair-3.jpg',
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'chair',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      picture: 'images/chairs/chair-4.jpg',
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'chair',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      picture: 'images/chairs/chair-5.jpg',
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'sofa',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      picture: 'images/sofas/sofa-1.jpg',
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'sofa',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      picture: 'images/sofas/sofa-2.jpg',
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'sofa',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      picture: 'images/sofas/sofa-3.jpg',
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'sofa',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      picture: 'images/sofas/sofa-4.jpg',
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'sofa',
      oldPrice: 75,
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      picture: 'images/sofas/sofa-5.jpg',
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'table',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      picture: 'images/tables/table-1.jpg',
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'table',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      picture: 'images/tables/table-2.jpg',
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'table',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      picture: 'images/tables/table-3.jpg',
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'table',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      picture: 'images/tables/table-4.jpg',
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'table',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      picture: 'images/tables/table-5.jpg',
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'dining',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      picture: 'images/dinings/dining-1.jpg',
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'dining',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      picture: 'images/dinings/dining-2.jpg',
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'dining',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      picture: 'images/dinings/dining-3.jpg',
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'dining',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      picture: 'images/dinings/dining-4.jpg',
      isFavorite: false,
    },
    {
      id: 'aenean-ru-bristique-25',
      name: 'Aenean Ru Bristique 25',
      category: 'dining',
      price: 30,
      stars: 2,
      myStars: 0,
      promo: 'sale',
      newFurniture: true,
      picture: 'images/dinings/dining-5.jpg',
      isFavorite: false,
    },
  ],
  cart: {
    products: [],
  },

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
};

export default initialState;
