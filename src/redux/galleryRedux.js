//variables
const SET_ACTIVE_GALLERY_ITEM = 'SET_ACTIVE_GALLERY_ITEM';
//selectors
export const getFeaturedProductsId = state => state.featuredProductsId;
export const getTopSellerProductsId = state => state.topSellerProductsId;
export const getSaleOffProductsId = state => state.saleOffProductsId;
export const getTopRatedProductsId = state => state.topRatedProductsId;
export const getActiveGalleryItem = state => state.gallery;
// action creators
export const setActiveGalleryItem = payload => ({
  type: SET_ACTIVE_GALLERY_ITEM,
  payload,
});

const galleryReducer = (statePart = '', action) => {
  switch (action.type) {
    case SET_ACTIVE_GALLERY_ITEM:
      return action.payload;
    default:
      return statePart;
  }
};

export default galleryReducer;
