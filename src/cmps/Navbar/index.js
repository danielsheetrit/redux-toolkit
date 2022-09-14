// @ts-nocheck
import React from 'react';

import { PageContainer, CmpContainer } from 'styles/layout';
import { Nav } from './styled';

const Navbar = ({ contactsCount }) => {
  return (
    <PageContainer full>
      <Nav>
        <CmpContainer>
          <span>
            Contacts Count:
            <i style={{ color: 'yellow', marginLeft: '.5rem' }}>
              {contactsCount && contactsCount}
            </i>
          </span>
        </CmpContainer>
      </Nav>
    </PageContainer>
  );
};

export default Navbar;
