import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #cfcfcf;
  height: 100vh;
  width: 100%;

  .pagenotfound__title {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .pagenotfound__header {
    font-size: 15rem;
    font-weight: 600;
    align-self: center;
  }

  .pagenotfound__subheader {
    font-size: 3rem;
    align-self: center;
  }

  .pagenotfound__back {
    display: flex;
    font-size: 2rem;
    margin: 2rem;
  }

  .pagenotfound__backicon {
    margin-right: 1rem;
  }

  .pagenotfound__backicon .MuiSvgIcon-root {
    font-size: 1em;
    cursor: pointer;
  }
`;

const PageNotFound = (props) => {
  const router = useRouter();

  return (
    <Container className="pagenotfound">
      <div className="pagenotfound__title">
        <span className="pagenotfound__header">404</span>
        <span className="pagenotfound__subheader">Page not found</span>
      </div>
      <div className="pagenotfound__back">
        <span className="pagenotfound__backicon">
          <button type="button" onClick={() => router.back()}>
            {'<--'}
          </button>
        </span>
        <span className="pagenotfound__backtext">Go back</span>
      </div>
    </Container>
  );
};

PageNotFound.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

export default PageNotFound;
