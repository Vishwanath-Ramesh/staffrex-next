import {
  HIDE_LOADER,
  HIDE_TOAST,
  SET_STATIC_DATA,
  SHOW_LOADER,
  SHOW_TOAST,
} from './actionTypes';

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function showToast(data) {
  return {
    type: SHOW_TOAST,
    payload: data,
  };
}

export function hideToast() {
  return {
    type: HIDE_TOAST,
  };
}

export function setData(data) {
  return {
    type: SET_STATIC_DATA,
    payload: data,
  };
}
