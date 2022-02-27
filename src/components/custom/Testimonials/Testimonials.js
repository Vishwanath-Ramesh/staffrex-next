import React, { useContext } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { DataContext } from '../../hooks/useData';
import nurseImage from '../../../../public/assets/images/nurse.png';
import 'swiper/css';
import 'swiper/css/navigation';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: 300px;
  width: 100%;

  h1 {
    padding: 0rem 10%;
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

  .testimonial__header {
    text-transform: uppercase;
    position: relative;
  }

  .testimonial__header::after {
    content: '';
    display: block;
    position: absolute;
    background-color: var(--secondary-color);
    width: 100%;
    height: 3px;
  }

  .testimonials__banner {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-column-gap: 5rem;
    align-items: center;
    padding: 0px 10%;
    width: 100%;
    min-height: 250px;
    margin: 4rem 0px;
    background-color: #f5bc34;
    ${'' /* position: relative; */}

    img {
      height: 300px;
      width: 200px;
      border: 10px solid #fff !important;
      background-color: #e0dfe1;
      display: grid;
      grid-template-columns: auto 1fr;
      padding: 0px 10%;
      grid-column-gap: 5rem;
      align-items: center;
      ${
        '' /* position: absolute;
      top: -10%;
      left: 10%;
      background-origin: border-box;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      object-fit: cover;
      object-position: center; */
      }
    }
  }

  .swiper {
    width: 70%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      padding: 0px 5rem;
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .banner {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 0px 10%;
    position: relative;

    img {
      height: 350px;
      width: 300px;
      border: 10px solid #fff !important;
      background-color: #e0dfe1;
      z-index: 2;
    }

    .banner_background {
      background-color: #f5bc34;
      height: 70%;
      width: 100%;
      position: absolute;
      left: 0;
    }

    .banner_background::before {
      content: url(/assets/images/quote-right.svg);
      display: inline-block;
      position: absolute;
      left: calc(10% + 350px);
      height: 50px;
      top: -30px;
      width: 50px;
    }
  }
`;

function Testimonials() {
  const data = useContext(DataContext);

  return (
    <Container>
      <h1>TESTIMONIALS</h1>
      <div className="banner">
        <div className="banner_background" />
        <Image width={250} height={300} src={nurseImage} alt="Nurse" />
        <Swiper navigation modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <p>{data?.home?.testimonials?.bannerLists[0]}</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>{data?.home?.testimonials?.bannerLists[0]}</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>{data?.home?.testimonials?.bannerLists[0]}</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>{data?.home?.testimonials?.bannerLists[0]}</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>{data?.home?.testimonials?.bannerLists[0]}</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>{data?.home?.testimonials?.bannerLists[0]}</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>{data?.home?.testimonials?.bannerLists[0]}</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>{data?.home?.testimonials?.bannerLists[0]}</p>
          </SwiperSlide>
          <SwiperSlide>
            <p>{data?.home?.testimonials?.bannerLists[0]}</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
}

export default Testimonials;
