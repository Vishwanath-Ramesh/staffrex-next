import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import { useStore } from '../../hooks/useStore';

const Container = styled.section`
  background-color: var(--primary-color);
  min-height: 300px;
  width: 100%;
  padding: 0px 10%;

  h1 {
    display: flex;
    justify-content: center;
  }

  hr {
    width: 80px;
    border: 2px solid var(--secondary-color);
    border-radius: 5px;
  }

  .aboutus__title {
    text-transform: uppercase;
    position: relative;
  }

  .aboutus__title::after {
    content: '';
    display: block;
    position: absolute;
    background-color: var(--secondary-color);
    width: 100%;
    height: 3px;
  }

  .aboutus__staffinglists {
    text-align: center;

    ul {
      display: grid;
      grid-template-columns: auto auto;
      list-style: none;

      li {
        text-align: left;
      }
    }
  }
`;

function AboutUs() {
  const [{ data }] = useStore();

  return (
    <Container>
      <h1 dangerouslySetInnerHTML={{ __html: data?.home?.aboutUs?.title }} />
      <hr />
      <p dangerouslySetInnerHTML={{ __html: data?.home?.aboutUs?.subTitle }} />
      <div className="aboutus__staffinglists">
        <h2>{data?.home?.aboutUs?.recruitmentAndStaffingTitle}</h2>
        <ul>
          {data?.home?.aboutUs?.recruitmentAndStaffingLists.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <p
        dangerouslySetInnerHTML={{
          __html: data?.home?.aboutUs?.recruitmentAndStaffingBody,
        }}
      />
    </Container>
  );
}

export default AboutUs;
