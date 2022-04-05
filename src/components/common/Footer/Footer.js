import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import facebook from '../../../../public/assets/images/facebook-bg.svg';
import instagram from '../../../../public/assets/images/instagram-bg.svg';
import whatsapp from '../../../../public/assets/images/whatsapp-bg.svg';
import linkedin from '../../../../public/assets/images/linkedin-bg.svg';
import twitter from '../../../../public/assets/images/twitter-bg.svg';
import youtube from '../../../../public/assets/images/youtube-bg.svg';

const Container = styled.footer`
  display: grid;
  grid-template-columns: auto 3px auto 3px auto;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
  ${'' /* gap: 1rem; */}
  background-color: #3e3e3f;
  ${'' /* height: 100px; */}
  padding: 0.5rem 10%;
  color: #fff;
  font-size: 1.5rem;
  column-gap: 2rem;
  align-self: center;
  width: 100%;

  p {
    margin: 0rem;
    font-weight: bold;
    letter-spacing: 3px;
  }

  .footer__border {
    border-right: 1px solid var(--secondary-color);
    height: 60%;
  }

  .footer__contacticons {
    display: flex;
    width: 100%;
    column-gap: 2rem;
    justify-content: flex-start;

    img {
      cursor: pointer;
    }
  }
`;

function Footer() {
  return (
    <Container>
      <p>StaffRex</p>
      <div className="footer__border" />
      <p>CONTACT</p>
      <div className="footer__border" />
      <div className="footer__contacticons">
        <a
          href="https://www.facebook.com/StaffRex-Limited-108766975044985"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image width={50} height={30} src={facebook} alt="facebook" />
        </a>
        <a
          href="https://www.instagram.com/staffrex_limited/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image width={50} height={30} src={instagram} alt="instagram" />
        </a>
        <Image width={50} height={30} src={whatsapp} alt="whatsapp" />
        <a
          href="https://www.linkedin.com/company/staffrex-limited/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image width={50} height={30} src={linkedin} alt="linkedin" />
        </a>
        <Image width={50} height={30} src={twitter} alt="twitter" />
        <Image width={50} height={30} src={youtube} alt="youtube" />
      </div>
    </Container>
  );
}

export default Footer;
