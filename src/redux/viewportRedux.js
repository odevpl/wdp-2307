//variables
const UPDATE_VIEWPORT = 'UPDATE_VIEWPORT';

//selectors
export const getViewport = state => state.viewport;

// action creators
export const updateViewport = payload => ({
  type: UPDATE_VIEWPORT,
  payload,
});

const viewportReducer = (statePart = '', action) => {
  switch (action.type) {
    case UPDATE_VIEWPORT:
      return action.payload;
    default:
      return statePart;
  }
};

export default viewportReducer;
