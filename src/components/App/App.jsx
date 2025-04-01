import { useState, useEffect } from 'react';
import './App.css';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <div className="form-and-search-container">
        <ContactForm />
        <SearchBox />
      </div>
      <ContactList />
    </div>
  );
}

export default App;
