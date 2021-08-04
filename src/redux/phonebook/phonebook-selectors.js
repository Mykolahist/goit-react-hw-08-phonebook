import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.phonebook.filter;
const getContacts = state => state.phonebook.contacts;
const getLoading = state => state.phonebook.loading;
const getError = state => state.phonebook.error;

const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export default {
  getFilter,
  getContacts,
  getFilteredContacts,
  getLoading,
  getError,
};
