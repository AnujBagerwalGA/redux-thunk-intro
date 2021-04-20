// Reducer is use to store State

import {
  LIST_DELETE,
  LIST_DISPLAY,
  LIST_ADD,
  LIST_UPDATE,
  LIST_INSERT,
  API_CALL,
} from './ListActions';

const initialState = {
  id: '',
  inputText: '',
  list: [],
  error: {},
};

// reducer require to props - (1) Initial State (2) actions
const ListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LIST_DISPLAY:
      return state.list;

    case LIST_ADD:
      return {
        ...state,
        inputText: payload,
        error: {},
      };

    case LIST_INSERT: {
      const { id, inputText, list } = state;
      if (inputText) {
        let data = Object.assign([], list);
        if (id) {
          data[id] = { id: id, name: inputText };
        } else {
          data.push({ id: list.length + 1, name: inputText });
        }
        return {
          ...state,
          id: '',
          list: data,
          inputText: '',
        };
      } else {
        return {
          ...state,
          list: state.list,
          error: { message: 'Please Enter Task' },
        };
      }
    }

    case LIST_UPDATE: {
      let { name } = state.list[payload];
      return {
        ...state,
        inputText: name,
        id: payload,
      };
    }

    case LIST_DELETE: {
      var array = [...state.list];
      array.splice(payload, 1);
      return { ...state, list: array };
    }

    case API_CALL: {
      let data = [];
      let len = state.list.length;
      for (let i = 0; i < payload.length; i++) {
        data.push({ id: len + 1, name: payload[i].name });
        len++;
      }
      return {
        ...state,
        list: [...state.list, ...data],
        error: {},
        id: '',
        inputText: '',
      };
    }

    default:
      return state;
  }
};

export default ListReducer;
