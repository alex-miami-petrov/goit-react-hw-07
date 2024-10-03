import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from './contactsOps';

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
     .addCase(addContact.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items.push(payload);
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
     .addCase(deleteContact.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = state.items.filter(contact => contact.id !== payload)
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
    })
  //   addContact: (state, { payload }) => {
  //     state.items.push(payload);
  //   },
  //   deleteContact: (state, { payload }) => {
  //     state.items = state.items.filter((contact) => contact.id !== payload);
  //   },
  //   setLoading: (state, { payload }) => {
  //     state.loading = payload;
  //   },
  //   setError: (state, { payload }) => {
  //     state.error = payload;
  //   },
  //   clearError: (state) => {
  //     state.error = null;
  //   },
  // },
});

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const { addContact, deleteContact, setLoading, setError, clearError } =
  contactsSlice.actions;

export default contactsSlice.reducer;
