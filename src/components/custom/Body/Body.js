import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import freeLancers from '../../../../public/assets/images/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working.jpg';
import surgeryNurse from '../../../../public/assets/images/young-female-surgeon-with-medical-team-back-before-surgery.jpg';
import bookIcon from '../../../../public/assets/images/book.png';
import handsIcon from '../../../../public/assets/images/handshake.png';
import peopleIcon from '../../../../public/assets/images/people.png';
import Testimonials from '../../custom/Testimonials/Testimonials';

const Container = styled.div`
  background-color: #f2f3f4;

  h1 {
    padding: 0.5rem 10%;
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

  .body__whatisstaffrex {
    display: grid;
    grid-template-columns: 50% 50%;
    ${'' /* grid-template-rows: 300px; */}
    width: 100%;

    .whatisstaffrex__content {
      background-color: #fff;
      color: #000;
      align-self: center;
      justify-self: center;
      line-height: 1.5rem;
      padding: 0px 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      background-position: center;
      background-origin: border-box;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  .body__whatwedo {
    display: grid;
    grid-template-columns: 50% 50%;
    ${'' /* grid-template-rows: 300px; */}
    background-color: #fff;
    width: 100%;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      background-position: center;
      background-origin: border-box;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .whatwedo__content {
      display: flex;
      flex-flow: column nowrap;
      gap: 2rem;
      color: #000;
      align-self: center;
      justify-self: center;
      padding: 1rem;

      .whatwedo__items {
        display: flex;
        align-items: center;
        gap: 2rem;
      }
    }
  }

  .banner {
    margin-bottom: 2rem;
  }
`;

function Body() {
  return (
    <Container>
      <h1>WHAT IS STAFFREX?</h1>
      <div className="body__whatisstaffrex">
        <p className="whatisstaffrex__content">
          We are an International recruitment firm specializing in recruiting
          Healthcare & IT professionals. We explore and reach out to people for
          successful deployments of Nurses and Doctors with an excellent track
          record of 98% of retention post-interview
        </p>
        <Image src={freeLancers} alt="Freelancers" />
      </div>
      <h1>WHAT WE DO?</h1>
      <div className="body__whatwedo">
        <Image src={surgeryNurse} alt="Surgeon" />
        <div className="whatwedo__content">
          <div className="whatwedo__items">
            <Image alt="people" height={100} width={100} src={peopleIcon} />
            <span>Free recruitment for qualified candidates to The UK</span>
          </div>
          <div className="whatwedo__items">
            <Image alt="handshake" height={100} width={100} src={handsIcon} />
            <span>
              We partner with the clients and source required candidates
            </span>
          </div>
          <div className="whatwedo__items">
            <Image alt="books" height={100} width={100} src={bookIcon} />
            <span>
              We subside your load with end-to-end support and excellent service
            </span>
          </div>
        </div>
      </div>
      <Testimonials />
    </Container>
  );
}

export default Body;
