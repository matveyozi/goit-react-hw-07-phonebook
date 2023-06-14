import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
 {name: 'dsadsa',
  number: 321123,
  id:nanoid()
},
 {name: 'dsadsa',
  number: 321123,
  id:nanoid()
},
 {name: 'dsadsa',
  number: 321123,
  id:nanoid()
},
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        state.push(payload)
      },
      prepare(name, number) {
        return {
          payload: { id: nanoid(), name, number },
        };
      },
    },

    deleteContact(state, { payload }) {
      return state.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;