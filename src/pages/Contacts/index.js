import React from 'react';

import { useGetContactsQuery, useRemoveContactMutation } from 'api/apiSlice';
import { Navbar, AddContact } from 'cmps';

import { PageContainer } from 'styles/layout';
import { ContactsStyles } from './styled';

const Todos = () => {
  const {
    data: contacts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetContactsQuery();

  const [removeContact] = useRemoveContactMutation();

  return (
    <>
      <Navbar />
      <PageContainer>
        <AddContact />
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

export default Todos;
