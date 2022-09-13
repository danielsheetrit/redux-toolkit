// @ts-nocheck
import { useAddContactMutation } from 'api/apiSlice';
import React, { useState } from 'react';
import { FormContainer } from './styled';

const contactState = {
  name: '',
  phone: '',
  email: '',
  country: '',
};

const AddContact = () => {
  const [contactDetails, setContactDetails] = useState(contactState);

  const [addContact] = useAddContactMutation();

  const handleChange = ({ target: { name, value } }) => {
    setContactDetails({ ...contactDetails, [name]: value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    addContact(contactDetails);

    setContactDetails(contactState);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h3>Add Contact</h3>
      {Object.keys(contactDetails)?.map((contact, idx) => {
        return (
          <div key={contact}>
            <label htmlFor={contact + idx}>{contact}</label>
            <input
              id={contact + idx}
              value={contactDetails[contact]}
              name={contact}
              onChange={handleChange}
            />
          </div>
        );
      })}
      <button>Add!</button>
    </FormContainer>
  );
};

export default AddContact;
