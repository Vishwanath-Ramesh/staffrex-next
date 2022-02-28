import React, { useContext } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { DataContext } from '../../src/components/hooks/useData';
import medicalTeam from '../../public/assets/images/successful-medical-team.jpg';
import tabletImage from '../../public/assets/images/showing-tablet-s-blank-screen.jpg';
import ravishPhoto from '../../public/assets/images/ravish-photo.jpeg';

const Container = styled.section`
  height: 100%;
  width: 100%;
  background-color: #f2f3f4;
  padding: 0px 10%;

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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .about__outreactcontent {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;

    ul {
      position: absolute;
      right: 10%;
      color: #fff;

      li {
        padding: 0.5rem 0px;
      }
    }
  }

  .about__team {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto auto;
    row-gap: 1rem;
    column-gap: 1rem;
    margin: 0px 10%;
    background-color: #daebed;

    .about__teammember {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      ${'' /* min-height: 150px; */}
      ${'' /* padding: 0.5rem; */}
      border: 1px solid #fff;
      row-gap: 10px;
      position: relative;

      img {
        min-height: 280px;
        min-width: 200px;
        background: #fff;
        object-fit: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }

      .details__name {
        color: var(--primary-text);
        font-weight: bold;
      }

      .details__role {
        color: #000;
        font-size: 10px;
        font-weight: bold;
      }
    }

    .about__teammember.lead {
      display: grid;
      grid-template-columns: auto auto 1fr;
      grid-template-rows: 1fr;
      align-items: center;
      padding: 1rem;
      gap: 1rem;
      grid-column: 1 / 4;
      grid-row: 1 / 2;
    }
  }
`;

function About() {
  const data = useContext(DataContext);

  return (
    <Container>
      <h1>{data?.about?.aboutStaffRexTitle}</h1>
      <Image src={medicalTeam} alt="Banner nurses" />
      <p>{data?.about?.aboutStaffRex}</p>
      <h1>{data?.about?.countriesOfOriginTitle}</h1>
      <div className="about__outreach">
        <h1>{data?.about?.outreachChannelsTitle}</h1>
        <div className="about__outreactcontent">
          <Image src={tabletImage} alt={data?.about?.outreachChannelsTitle} />
          <ul>
            {data?.about?.outreachChannelsList?.map((list) => (
              <li key={list}>{list}</li>
            ))}
          </ul>
        </div>
      </div>
      <h1>{data?.about?.meetOurTeam}</h1>
      <div className="about__team">
        {data?.about?.teamLists?.map((team) => (
          <div
            key={team.name}
            className={`about__teammember ${team.lead ? 'lead' : ''}`}
          >
            <Image
              height={400}
              width={340}
              src={`/assets/images/${team.imageFileName}`}
              alt={team.name}
            />
            <div className="details">
              <div className="details__name">{team.name}</div>
              <div className="details__role">{team.role}</div>
            </div>
            {team.about && <div>{team.about}</div>}
          </div>
        ))}
      </div>
    </Container>
  );
}

export default About;
