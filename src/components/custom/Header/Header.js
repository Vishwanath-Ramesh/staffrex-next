import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import bannerNurses from '../../../../public/assets/images/female-nurse-doctor-look-professional-smiling.png';
import Button from '../../common/button';

const Container = styled.header`
  display: flex;
  flex-direction: column;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .header__overlay {
    position: absolute;
    background-color: #b3e0e2;
    opacity: 0.8;
    height: 100%;
    width: 100%;
    z-index: 1;
  }

  .home__overlaytext {
    color: #fff;
    position: absolute;
    top: 200px;
    left: 10%;
    width: 20%;
    z-index: 2;

    h1 {
      font-size: 4rem;
      color: var(--primary-text);
    }

    button {
      font-size: 1.5rem;
    }
  }

  .header__services {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    flex: 1;
    width: 100%;
    height: 100%;
    z-index: 2;
    position: relative;
    ${'' /* padding: 0px 10%; */}

    .header__candidates {
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--secondary-color);
      height: 100px;
      text-transform: uppercase;
      margin: 0;
      color: #fff;
    }

    .header__clients {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      text-transform: uppercase;
      margin: 0;
      color: #fff;
      background: var(--primary-text);
    }

    .header__vacancies {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      text-transform: uppercase;
      margin: 0;
      color: #fff;
      background: var(--secondary-text);
    }
  }
`;

function Header() {
  return (
    <Container>
      <div className="header__overlay" />
      <Image src={bannerNurses} alt="Banner nurses" />
      <section className="home__overlaytext">
        <h1>A Global Reach For The Nursing Jobs In The UK</h1>
        <Button label="Enroll Now" />
      </section>
      <section className="header__services">
        <div className="header__candidates" />
        <div className="header__clients" />
        <div className="header__vacancies" />
      </section>
    </Container>
  );
}

export default Header;
