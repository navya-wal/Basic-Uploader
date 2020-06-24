const initialState = {
  fav: [],
  wishlist: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FAV':
      return {
        ...state,
        fav: action.payload
      }
    case 'SET_WL':
      return {
        ...state,
        wishlist: action.payload
      }
    default:
      return {
        ...state
      }
  }
}