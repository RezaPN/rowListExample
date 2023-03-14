import {
  GET_LIST_PLACEHOLDER_ERROR,
  GET_LIST_PLACEHOLDER_PROCESS,
  GET_LIST_PLACEHOLDER_SUCCESS,
} from '../../actions';

const initState = {
  result: null,
  loading: false,
};

const initStates = {
  result: [],
  loading: false,
};

export function getListPlaceholder(state = initState, action) {
  switch (action.type) {
    case GET_LIST_PLACEHOLDER_PROCESS:
      return {
        ...initState,
        loading: true,
        result: null,
        error: null,
      };
    case GET_LIST_PLACEHOLDER_SUCCESS:
      return {
        ...state,
        result: action.result,
        loading: false,
        error: null,
      };
    case GET_LIST_PLACEHOLDER_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
        result: null,
      };
    default:
      return state;
  }
}
