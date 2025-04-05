import { useEffect } from 'react';
import './App.css';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import { FadeLoader } from 'react-spinners';
import {
  selectLoading,
  selectError,
  selectContactCount,
} from '../../redux/contactsSlice';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contactsCount = useSelector(selectContactCount);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <div className="form-and-search-container">
        <ContactForm />
        <SearchBox />
        <p>Number of contacts: {contactsCount}</p>
      </div>
      {loading && !error && (
        <div className="loader-container">
          <b>Request in progress...</b>
          <FadeLoader color="#2e2f42" />
        </div>
      )}
      <ContactList />
    </div>
  );
}

export default App;
