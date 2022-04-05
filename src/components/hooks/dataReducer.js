import {
  HIDE_LOADER,
  HIDE_TOAST,
  SET_STATIC_DATA,
  SHOW_LOADER,
  SHOW_TOAST,
} from './actionTypes';

function reducer(state, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        showLoader: true,
      };

    case SHOW_TOAST:
      return {
        ...state,
        notification: {
          message: action.payload.message,
          show: true,
          severity: action.payload.severity,
        },
      };

    case HIDE_TOAST:
      return {
        ...state,
        notification: {
          message: '',
          show: false,
          severity: '',
        },
      };

    case HIDE_LOADER:
      return {
        ...state,
        showLoader: false,
      };

    case SET_STATIC_DATA:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
