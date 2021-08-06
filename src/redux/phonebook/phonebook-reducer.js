import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  findContacts,
  deleteContactSuccess,
  deleteContactRequest,
  deleteContactError,
} from './phonebook-actions';

const initialState = [];

const contactReducer = createReducer(initialState, {
  [fetchContactSuccess]: (state, { payload }) => payload,
  [addContactSuccess]: (state, action) => [...state, action.payload],
  [deleteContactSuccess]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const loadingReducer = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const filterReducer = createReducer('', {
  [findContacts]: (_, action) => action.payload,
});

const errorReducer = createReducer(null, {});

export default combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  loading: loadingReducer,
  error: errorReducer,
});

// example

// function contactReducer(state = initialState, {type, payload}) {
//     switch (type) {
//         case actionTypes.ADD_CONTACT:
//             return [...state, payload];
//         case actionTypes.DEL_CONTACT:
//             return state.filter(({id}) => id !== payload)
//         default: return state;
//     }
// }

// function filterReducer(state = '', action) {
//     switch (action.type) {
//         case actionTypes.FILTER_CONTACT:
//             return action.payload
//         default: return state;
//     }
// }
