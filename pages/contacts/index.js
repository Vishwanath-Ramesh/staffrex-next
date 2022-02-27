import React, { useContext } from 'react';
import styled from 'styled-components';

import ContactDetails from '../../src/components/custom/ContactDetails/ContactDetails';
import { DataContext } from '../../src/components/hooks/useData';

const Container = styled.section`
  height: 100%;
  width: 100%;
  background-color: #f2f3f4;
  padding: 0px 10%;
  min-height: calc(100vh - 300px);

  h1 {
    color: var(--primary-text);
    margin: 3rem 0px;
  }

  h1::after {
    content: '';
    display: block;
    position: absolute;
    background-color: var(--secondary-color);
    width: 100px;
    height: 3px;
    margin-top: 1rem;
  }
`;

function Contacts() {
  const data = useContext(DataContext);

  return (
    <Container>
      <ContactDetails details={data?.contacts?.contactLists} />
    </Container>
  );
}

export default Contacts;
