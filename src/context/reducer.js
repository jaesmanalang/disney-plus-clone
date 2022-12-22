import {
  GET_DATA_BEGIN,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
  GET_FEATURED_DATA_BEGIN,
  GET_FEATURED_DATA_SUCCESS,
  GET_FEATURED_DATA_FAILURE,
} from "./actions";

export default function reducer(state, action) {
  switch (action.type) {
    case GET_DATA_BEGIN:
    case GET_FEATURED_DATA_BEGIN: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    }

    case GET_DATA_FAILURE:
    case GET_FEATURED_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    case GET_FEATURED_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        featuredData: action.payload,
      };
    }
  }
}
