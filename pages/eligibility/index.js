import React, { useContext } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

import Button from '../../src/components/common/button';
import { DataContext } from '../../src/components/hooks/useData';
import nmcLogo from '../../public/assets/images/nmc-logo.jpeg';
import nmcProcess from '../../public/assets/images/nmc-process-transparent.png';
import applyTimeline from '../../public/assets/images/apply-timeline.png';

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

  table {
    border-collapse: collapse;
    margin: auto;

    th {
      background-color: var(--secondary-color);
    }

    th,
    td {
      padding: 1rem;
      border: 1px solid black;
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

  .eligibility__nmcprocess {
    .eligibilty__registercta {
      background-color: #0b5596;
      color: #fff;
    }
  }
`;

function Eligibility() {
  const data = useContext(DataContext);

  return (
    <Container>
      <h1>{data?.eligibility?.youCallApplyTitle}</h1>
      <Image src={applyTimeline} height={700} width={200} alt="Apply process" />
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
            <FontAwesomeIcon color="#43b649" icon={faCircleCheck} />
            <span>{document}</span>
          </li>
        ))}
      </ul>
      <h1>{data?.eligibility?.nmcTitle}</h1>
      <div className="eligibility__nmc">
        <Image src={nmcLogo} alt="nmc" />
        <p>{data?.eligibility?.nmcDescription}</p>
      </div>
      <div className="eligibility__nmcprocess">
        <h1>{data?.eligibility?.nmcProcessTitle}</h1>
        <Image src={nmcProcess} height={800} width={900} alt="nmc" />
        <Button
          className="eligibilty__registercta"
          label={data?.eligibility?.nmcProcessCTA}
        />
      </div>
    </Container>
  );
}

export default Eligibility;
