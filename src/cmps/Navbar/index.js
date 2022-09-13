// @ts-nocheck
import React from 'react';

import { PageContainer, CmpContainer } from 'styles/layout';
import { Nav } from './styled';

const Navbar = () => {
  return (
    <PageContainer full>
      <Nav>
        <CmpContainer>
          <span>Contact List</span>
        </CmpContainer>
      </Nav>
    </PageContainer>
  );
};

export default Navbar;
