import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

// import Testimonials from '../../src/components/custom/Testimonials/Testimonials';

import Header from '../src/components/custom/Header/Header';
import Body from '../src/components/custom/Body/Body';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  width: 100%;

  .service {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-even;
    align-items: center;
    width: 100%;
    min-height: 200px;
    background-color: #2b2273;

    .services {
      display: flex;
      flex: 1 0;
      flex-flow: column nowrap;
      align-items: center;
      color: #fff;
      padding: 1rem 2rem;

      .services__title {
        font-size: 1.5rem;
      }

      .services__numbering {
        letter-spacing: -2px;
        color: var(--primary-color);
      }
    }
  }

  .clients {
    min-height: 150px;
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row nowrap;
    gap: 1rem;

    .clients__item {
      height: 100%;
      padding: 0px 1rem;
      ${'' /* border-right: 1px solid black; */}

      img {
        height: 50px;
        width: 50px;
      }
    }
  }
`;

function Home() {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Body />
      {/* <AboutUs /> */}
      {/* <Testimonials /> */}
    </Container>
  );
}

export default Home;
