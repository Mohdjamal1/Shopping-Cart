//This is Fetching Data Action File
export const dataFetching = () => {
  return {
    type: "DATA_FETCHING"
  };
};
export const dataFetchSuccess = (data) => {
  return {
    type: "FETCH_SUCCESS",
    payload: data
  };
};
export const fetchError = (err) => {
  return {
    type: "FETCH_ERROR",
    payload: err
  };
};

//Async function for fetching data from API
export function fetchData() {
  return function (dispatch) {
    dispatch(dataFetching());
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        dispatch(dataFetchSuccess(data));
      })
      .catch((err) => dispatch(fetchError(err.message)));
  };
}
