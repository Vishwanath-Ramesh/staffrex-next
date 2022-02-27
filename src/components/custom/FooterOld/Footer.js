import Button from 'components/common/button'
import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  gap: 10rem;
  min-height: 200px;
  width: 100%;
  background-color: #3e3e3f;
  color: #fff;

  .footer__contact {
    p {
      div:last-child {
        font-size: 12px;

        a {
          text-decoration: none;
          color: #fff;
        }
      }
    }
  }

  .footer__links {
    li {
      list-style: none;
    }

    li:not(:first-child) {
      padding: 0.5rem 0rem;
    }
  }
`

function Footer() {
  return (
    <Container>
      <div className="footer__contact">
        <p>
          <div>Address</div>
          <div>Address</div>
        </p>
        <p>
          <div>Email</div>
          <div>
            <a href="mailto:email@staffrex.co.uk">email@staffrex.co.uk</a>
          </div>
        </p>
        <p>
          <div>Phone</div>
          <div>+44 7423270486</div>
        </p>
      </div>
      <ul className="footer__links">
        <li>About Us</li>
        <li>Our Works</li>
        <li>Support Center</li>
        <li>Terms of Use</li>
        <li>Main office</li>
      </ul>
      <div className="footer__subscribe">
        <input
          type="text"
          name="email"
          placeholder="your email address"
          id="txt_subscribe"
        />
        <Button label="Subscribe" />
      </div>
    </Container>
  )
}

export default Footer
