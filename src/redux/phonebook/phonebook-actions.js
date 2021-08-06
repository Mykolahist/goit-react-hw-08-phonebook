// import { v4 as uuidv4 } from "uuid";
import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction(
  'phonebook/fetchContactRequest',
);
export const fetchContactSuccess = createAction(
  'phonebook/fetchContactSuccess',
);
export const fetchContactError = createAction('phonebook/fetchContactError');

export const addContactRequest = createAction('phonebook/addContactRequest');
export const addContactSuccess = createAction('phonebook/addContactSuccess');
export const addContactError = createAction('phonebook/addContactError');

export const deleteContactRequest = createAction(
  'phonebook/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'phonebook/deleteContactSuccess',
);
export const deleteContactError = createAction('phonebook/deleteContactError');

export const findContacts = createAction('phonebook/find');
