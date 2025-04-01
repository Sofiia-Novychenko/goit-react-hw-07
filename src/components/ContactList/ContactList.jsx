import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filteredName = useSelector(state => state.filters.name);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filteredName.toLowerCase())
  );

  return (
    <>
      <ul className={styles.list}>
        {visibleContacts.map(contact => (
          <li key={contact.id} className={styles.item}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}
