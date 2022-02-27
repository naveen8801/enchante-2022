export const initialState = {
  auth: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER-AUTH':
      return { ...state, auth: action.payload };
    default:
      return state;
  }
};

export default reducer;
  