import React, { useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

import { useStore } from '../../src/components/hooks/useStore';
import ContactDetails from '../../src/components/custom/ContactDetails';
import youngSpecialist from '../../public/assets/images/team-young-specialist-doctors-standing.jpg';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #f2f3f4;

  header {
    display: flex;
    position: relative;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
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

  .whyus__overlay {
    position: absolute;
    background-color: #184d78;
    opacity: 0.7;
    height: 100%;
    width: 40%;
    top: 0;
    z-index: 1;
    left: 10%;
  }

  .whyus__overlaytext {
    position: absolute;
    height: 100%;
    width: 40%;
    top: 2rem;
    left: 10%;
    color: #fff;
    padding: 0 2rem;
    z-index: 1;

    h1 {
    }

    p {
      padding: 1rem 0rem;
    }

    ul {
      line-height: 2rem;
    }
  }
`;

function Candidate() {
  const [{ data }] = useStore();

  return (
    <Container>
      <Head>
        <title>Candidate</title>
      </Head>
      <header>
        <div className="whyus__overlay" />
        <Image src={youngSpecialist} alt="young specialist" />
        <div className="whyus__overlaytext">
          <h1>DEAR CANDIDATES,</h1>
          <p>Why choose us?</p>
          <ul>
            {data?.whyChooseUs?.candidates?.whyChooseUs?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </header>
      <ContactDetails details={data?.whyChooseUs?.candidates?.contactDetails} />
    </Container>
  );
}

export default Candidate;
