// Action Create is action that we are passing to store
// we can manipulate data before passing to store

import axios from 'axios'; // Axios is use to call API // we can use fetch also.
import {
  LIST_DISPLAY,
  LIST_DELETE,
  LIST_INSERT,
  LIST_ADD,
  LIST_UPDATE,
  API_CALL,
} from './ListActions';

export const getListData = () => {
  return {
    type: LIST_DISPLAY,
  };
};

export const setListData = () => {
  return {
    type: LIST_INSERT,
  };
};

export const addListData = (payload) => {
  return {
    type: LIST_ADD,
    payload,
  };
};

export const updateListData = (payload) => {
  return {
    type: LIST_UPDATE,
    payload,
  };
};

export const deleteListData = (payload) => {
  return {
    type: LIST_DELETE,
    payload: payload,
  };
};

export const setApiData = (payload) => {
  return {
    type: API_CALL,
    payload,
  };
};

export const setApiListData = (id) => {
  return (dispatch) => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return axios
      .get(url)
      .then((res) => {
        dispatch(setApiData(res.data));
      })
      .catch((err) => {
        alert('Something Went Wrong !!!');
      });
  };
};
