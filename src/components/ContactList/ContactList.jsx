import { useDispatch, useSelector } from 'react-redux';
import { Button } from './ContactList.styled';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = (contacts || []).filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = id => {
    dispatch(deleteContact(id)).then(() => {
      toast.success('Контакт успішно видалено!', {
        position: 'top-right',
        autoClose: 3000,
      });
    });
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {filteredContacts.map(({ id, name, phone }) => (
          <li key={id}>
            {name}: {phone}{' '}
            <Button onClick={() => handleDeleteContact(id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
