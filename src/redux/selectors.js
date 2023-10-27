import { createSelector } from '@reduxjs/toolkit';

const selectContactsState = state => state.contacts;
const selectFilterState = state => state.filter;

export const selectContacts = createSelector(
  selectContactsState,
  contactsState => contactsState.items
);

export const selectIsLoading = createSelector(
  selectContactsState,
  contactsState => contactsState.isLoading
);

export const selectError = createSelector(
  selectContactsState,
  contactsState => contactsState.error
);

export const selectFilter = createSelector(
  selectFilterState,
  filterState => filterState
);
