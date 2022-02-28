import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Container = styled.section`
  padding: 0rem 10%;

  h1 {
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

  .contactdetails__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
    margin: 3rem 0rem;

    .contactdetails__role {
      font-size: 10px;
    }

    .contactdetails__name {
      font-weight: 600;
    }

    .contactdetails__role {
      font-weight: 600;
    }

    .contactdetails__phone {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      margin-top: 1rem;
    }

    .contactdetails__email {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      a {
        text-decoration: none;
        color: inherit;
      }

      a:visited {
        color: inherit;
      }
    }
  }
`;

function ContactDetails({ details }) {
  return (
    <Container>
      <h1>CONTACT DETAILS</h1>
      <div className="contactdetails__list">
        {details?.map((item) => (
          <div key={item.name}>
            <div className="contactdetails__name">{item.name}</div>
            <div className="contactdetails__role">{item.role}</div>
            <div className="contactdetails__phone">
              <FontAwesomeIcon width={15} icon={faMobileAlt} />
              <span>{item.phone}</span>
            </div>
            <div className="contactdetails__email">
              <FontAwesomeIcon width={15} icon={faEnvelope} />
              <a href={`mailto: ${item.email}`}>{item.email}</a>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

ContactDetails.defaultProps = {
  details: [],
};

ContactDetails.propTypes = {
  details: PropTypes.arrayOf(PropTypes.string),
};

export default ContactDetails;
