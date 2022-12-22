import { createContext, useContext, useReducer } from "react";
import { GET_DATA_BEGIN, GET_DATA_FAILURE, GET_DATA_SUCCESS } from "./actions";
import reducer from "./reducer";

const initialState = {
  data: [],
  featuredMovie: null,
  isLoading: false,
  error: null,
};

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function getData(url) {
    dispatch({ type: GET_DATA_BEGIN });
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: GET_DATA_SUCCESS, payload: data.results });
      })
      .catch((error) => {
        dispatch({ type: GET_DATA_FAILURE, payload: error });
      });
  }

  return (
    <AppContext.Provider value={{ ...state, getData }}>
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  return useContext(AppContext);
}

export { AppProvider, initialState, useAppContext };
