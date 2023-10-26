import React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <ToastContainer />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer />
    </div>
  );
}

export default App;
