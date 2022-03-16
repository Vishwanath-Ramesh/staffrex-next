import React, { useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

import Button from '../../src/components/common/button';
import { DataContext } from '../../src/components/hooks/useData';
import nmcLogo from '../../public/assets/images/nmc-logo.jpeg';
import nmcProcess from '../../public/assets/images/nmc-process-transparent.png';
import applyTimeline from '../../public/assets/images/nmc-eligibility-timeline.jpeg';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #f2f3f4;
  padding: 1rem 10%;

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

  table {
    border-collapse: collapse;
    margin: 2rem auto;

    th {
      background-color: var(--secondary-color);
    }

    th,
    td {
      padding: 1rem;
      border: 1px solid black;
    }

    tr td:first-child {
      font-weight: bold;
    }

    tr td:not(:first-child) {
      text-align: center;
    }
  }

  .eligibility__moreinfo {
    margin-top: 3rem;

    .moreinfo__label {
      font-weight: bold;
      margin: 1rem 0rem;
    }

    .moreinfo__links {
      display: flex;
      flex-direction: column;

      a {
        padding: 0.5rem 0rem;
        text-decoration: none;
      }

      a:visited {
        color: blue;
      }
    }
  }

  ul {
    margin-left: var(--fa-li-margin, 0em);
    margin: 0;
    padding: 0;

    li {
      display: flex;
      gap: 10px;
      align-items: center;
      padding: 0.5rem 0rem;
    }
  }

  .eligibility__nmc {
    display: flex;
    align-items: center;
    gap: 2rem;

    img {
      width: 300px;
      height: 100%;
      object-fit: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      border: 1px solid #000 !important;
      padding: 1rem;
    }

    p {
      line-height: 2rem;
    }
  }

  .eligibility__news {
    border: 2px solid var(--secondary-color);
    background: #f2f3f4;
    margin: 2rem auto;
    font-weight: bold;
  }

  .eligibility__nmcprocess {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    .eligibilty__registercta {
      background-color: #0b5596;
      color: #fff;
    }
  }
`;

function Eligibility() {
  const data = useContext(DataContext);

  function handleNewsAndUpdateClick(e) {
    window.open(data.eligibility.newsAndUpdateLink, '_blank');
  }

  function handleRegisterNow(e) {
    window.open(data.eligibility.registerNowLink, '_blank');
  }

  return (
    <Container>
      <Head>
        <title>Eligibility</title>
      </Head>
      <h1>{data?.eligibility?.youCallApplyTitle}</h1>
      <Image src={applyTimeline} alt="Apply process" />
      {data?.eligibility?.languageTable && (
        <table>
          {data?.eligibility?.languageTable?.rows?.map((row, rowIdx) => (
            <>
              {rowIdx === 0 && (
                <thead>
                  <tr>
                    {data?.eligibility?.languageTable?.columns?.map(
                      (column) => (
                        <th key={`th-${column.name}`}>{column.name}</th>
                      )
                    )}
                  </tr>
                </thead>
              )}
              <tr>
                {data?.eligibility?.languageTable?.columns?.map((column) => (
                  <td key={`row-${rowIdx}-col-${column.name}`}>
                    {row[column.name]}
                  </td>
                ))}
              </tr>
            </>
          ))}
        </table>
      )}
      <div className="eligibility__moreinfo">
        <div className="moreinfo__label">
          {data?.eligibility?.moreInfoLabel}
        </div>
        <div className="moreinfo__links">
          {data?.eligibility?.moreInfoLinks?.map((item) => (
            <a key={item} href={item}>
              {item}
            </a>
          ))}
        </div>
      </div>
      <h1>{data?.eligibility?.documentsNeededTitle}</h1>
      <ul className="fa-ul">
        {data?.eligibility?.documentsNeededLists?.map((document) => (
          <li>
            <FontAwesomeIcon
              width={'20px'}
              color="#43b649"
              icon={faCircleCheck}
            />
            <span>{document}</span>
          </li>
        ))}
      </ul>
      <h1>{data?.eligibility?.nmcTitle}</h1>
      <div className="eligibility__nmc">
        <Image src={nmcLogo} alt="nmc" />
        <p>{data?.eligibility?.nmcDescription}</p>
      </div>
      <Button
        className="eligibility__news"
        label="NEWS AND UPDATE"
        onClick={handleNewsAndUpdateClick}
      />
      <div className="eligibility__nmcprocess">
        <h1>{data?.eligibility?.nmcProcessTitle}</h1>
        <Image src={nmcProcess} height={400} width={500} alt="nmc" />
        <Button
          className="eligibilty__registercta"
          label={data?.eligibility?.nmcProcessCTA || ''}
          onClick={handleRegisterNow}
        />
      </div>
    </Container>
  );
}

export default Eligibility;
