/* selectors */
export const getPromoted = state => state.promoted;

/* reducer */
export default function promotedReducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
