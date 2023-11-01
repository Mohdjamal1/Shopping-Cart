let initialState = {
  loading: false,
  data: [],
  error: null
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DATA_FETCHING":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload, error: null };
    case "FETCH_ERROR":
      return { ...state, loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default fetchReducer;
