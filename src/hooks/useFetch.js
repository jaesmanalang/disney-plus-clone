import { useEffect, useReducer } from "react";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "fetch_data_begin":
      return {
        ...state,
        isLoading: true,
      };
    case "fetch_data_success":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case "fetch_data_failure":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default function useFetch(url) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let subscribed = true;
    dispatch({ type: "fetch_data_begin" });
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (subscribed) {
          dispatch({
            type: "fetch_data_success",
            payload: data.results,
          });
        }
      })
      .catch((error) => {
        if (subscribed) {
          dispatch({
            type: "fetch_data_failure",
            payload: error,
          });
        }
      });

    return () => {
      subscribed = false;
    };
  }, [url]);

  return state;
}
