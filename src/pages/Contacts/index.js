// @ts-nocheck
import React from 'react';

import { useGetContactsQuery, useRemoveContactMutation } from 'api/apiSlice';
import { useSelector, useDispatch } from 'react-redux';
import { setContacts } from 'slices/contactsSlice';

import { Navbar, AddContact } from 'cmps';

import { PageContainer } from 'styles/layout';
import { ContactsStyles } from './styled';

const Contacts = () => {
  const {
    data: contacts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetContactsQuery();

  const [removeContact] = useRemoveContactMutation();

  const contactsState = useSelector(
    (state) => state?.contactsReducer?.contacts
  );
  const dispatch = useDispatch();

  const updateState = () => {
    dispatch(setContacts(contacts));
  };

  return (
    <>
      <Navbar contactsCount={contactsState?.length} />
      <PageContainer>
        
        <AddContact />

        <ContactsStyles.CountBtn onClick={() => updateState()}>
          Show contacts count
        </ContactsStyles.CountBtn>

        <ContactsStyles.List>
          {contacts?.length &&
            contacts.map((contact) => {
              return (
                <ContactsStyles.Card key={contact.id}>
                  <ContactsStyles.CardHeader>
                    <h5>{contact.name}</h5>
                    <button onClick={() => removeContact({ id: contact.id })}>
                      x
                    </button>
                  </ContactsStyles.CardHeader>
                  <span>{contact.phone}</span>
                  <span>{contact.email}</span>
                  <span>{contact.country}</span>
                </ContactsStyles.Card>
              );
            })}
        </ContactsStyles.List>
      </PageContainer>
    </>
  );
};

export default Contacts;
