import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import staffRexLogo from '../../../../public/assets/images/staffrex-logo.png';
import Search from '../Search/Search';

const Nav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.5rem 10%;
  ${'' /* position: fixed; */}
  width: 100%;
  min-height: 200px;
  align-items: center;
  background-color: #fff;
  z-index: 2;

  a {
    text-decoration: none;
    color: var(--primary-text);
    font-weight: 600;
  }

  .nav__links-search {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    flex-flow: column nowrap;
    align-self: flex-end;
    grid-row-gap: 2rem;
    width: 100%;

    .search {
      justify-self: flex-end;
      align-self: flex-start;
    }

    .nav__links {
      display: flex;
      ${'' /* padding: 2rem 0; */}
      flex-flow: row nowrap;
      justify-content: space-between;
      ${'' /* padding: 0px 2rem; */}
      width: 100%;

      a,
      .navbar__whyuslink {
        text-decoration: none;
        list-style: none;
        position: relative;
      }

      a::after,
      .navbar__whyuslink::after {
        content: '';
        display: block;
        position: absolute;
        background-color: var(--secondary-color);
        width: 100%;
        height: 3px;
        visibility: hidden;
        transform: scale(0);
        transform-origin: left;
        transition: 0.2s ease-out;
      }

      a:not(.active):hover::after {
        visibility: visible;
        transform: scale(1);
      }

      a.active {
        border-bottom: 3px solid var(--secondary-color);
        position: relative;
      }

      .navbar__whyuslink:hover .navbar__whyussubmenu {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 22px;
      }

      .navbar__whyussubmenu {
        display: none;

        a {
          background-color: #f5bc34;
          color: #fff;
          border: 1px solid #fff;
          padding: 10px;
        }

        a::after {
          display: none;
        }

        a:hover,
        a.active {
          background-color: #d19b29;
        }
      }
    }
  }
`;

function NavBar() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <Nav>
      <Image width={300} height={280} src={staffRexLogo} alt="Staffrex logo" />
      <div className="nav__links-search">
        <Search />
        <ul className="nav__links">
          <Link key="/" href="/">
            <a className={currentRoute === '/' ? 'active' : ''}>Home</a>
          </Link>
          <Link key="/about" href="/about">
            <a className={currentRoute === '/about' ? 'active' : ''}>About</a>
          </Link>
          <div className="navbar__whyuslink">
            <a
              className={
                currentRoute === '/client' || currentRoute === '/candidate'
                  ? 'active'
                  : ''
              }
            >
              Why choose us
            </a>
            <div className="navbar__whyussubmenu">
              <Link key="/client" href="/client">
                <a className={currentRoute === '/client' ? 'active' : ''}>
                  Client
                </a>
              </Link>
              <Link key="/candidate" href="/candidate">
                <a className={currentRoute === '/candidate' ? 'active' : ''}>
                  Candidate
                </a>
              </Link>
            </div>
          </div>
          <Link key="/eligibility" href="/eligibility">
            <a className={currentRoute === '/eligibility' ? 'active' : ''}>
              Eligibility criteria
            </a>
          </Link>
          <Link key="/news" href="/news">
            <a className={currentRoute === '/news' ? 'active' : ''}>
              News & Updates
            </a>
          </Link>
          <Link key="/contacts" href="/contacts">
            <a className={currentRoute === '/contacts' ? 'active' : ''}>
              Contact
            </a>
          </Link>
        </ul>
      </div>
    </Nav>
  );
}

export default NavBar;
