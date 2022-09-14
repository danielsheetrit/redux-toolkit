// @ts-nocheck
import React from 'react';

import { PageContainer, CmpContainer } from 'styles/layout';
import { Nav } from './styled';

const Navbar = ({ contactsCount }) => {
  return (
    <PageContainer full>
      <Nav>
        <CmpContainer>
          <span>Contacts Count: {contactsCount && contactsCount}</span>
        </CmpContainer>
      </Nav>
    </PageContainer>
  );
};

export default Navbar;
