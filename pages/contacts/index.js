import React, { useContext } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import ApplicationForm from '../../src/components/custom/ApplicationForm';
import ContactDetails from '../../src/components/custom/ContactDetails';
import { useStore } from '../../src/components/hooks/useStore';

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
  const [{ data }] = useStore();

  return (
    <Container>
      <Head>
        <title>Contacts</title>
      </Head>
      <ContactDetails details={data?.contacts?.contactLists} />
      <ApplicationForm />
    </Container>
  );
}

export default Contacts;
