import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.phonebook.contacts;
const getFilter = state => state.phonebook.filter;
const getIsLoading = state => state.phonebook.loading;

const getVisibleContacts = createSelector(
  [getFilter, getContacts],
  (filter, contacts) => {
    // if (!filter && !contacts) {
    //     return
    // }
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export default {
  getContacts,
  getFilter,
  getIsLoading,
  getVisibleContacts,
};
