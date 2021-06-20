import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: fit-content;
    margin-right: 1rem;
`;

const Effect = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: inline-block;
    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: transparent;
    }
    &.active::before {
      left: 2px;
      text-shadow: -2px 0 #dcf21a;
      clip: rect(24px, 550px, 90px, 0);
      animation: glitch-anim-2 3s infinite linear alternate-reverse;
    }
    &.active.blue::before {
      text-shadow: -2px 0 #0000ff;
    }
    &.active::after {
      left: -2px;
      text-shadow: -2px 0 #ff71d0;
      clip: rect(85px, 550px, 140px, 0);
      animation: glitch-anim 2.5s infinite linear alternate-reverse;
    }

    @keyframes glitch-anim {
    0% {
      clip: rect(137px, 9999px, 58px, 0);
    }
    4.166666666666666% {
      clip: rect(62px, 9999px, 146px, 0);
    }
    8.333333333333332% {
      clip: rect(122px, 9999px, 101px, 0);
    }
    12.5% {
      clip: rect(6px, 9999px, 60px, 0);
    }
    16.666666666666664% {
      clip: rect(69px, 9999px, 121px, 0);
    }
    20.833333333333336% {
      clip: rect(125px, 9999px, 70px, 0);
    }
    25% {
      clip: rect(125px, 9999px, 88px, 0);
    }
    29.166666666666668% {
      clip: rect(129px, 9999px, 111px, 0);
    }
    33.33333333333333% {
      clip: rect(121px, 9999px, 38px, 0);
    }
    37.5% {
      clip: rect(106px, 9999px, 96px, 0);
    }
    41.66666666666667% {
      clip: rect(127px, 9999px, 18px, 0);
    }
    45.83333333333333% {
      clip: rect(21px, 9999px, 101px, 0);
    }
    50% {
      clip: rect(3px, 9999px, 44px, 0);
    }
    54.166666666666664% {
      clip: rect(68px, 9999px, 98px, 0);
    }
    58.333333333333336% {
      clip: rect(52px, 9999px, 55px, 0);
    }
    62.5% {
      clip: rect(125px, 9999px, 149px, 0);
    }
    66.66666666666666% {
      clip: rect(114px, 9999px, 39px, 0);
    }
    70.83333333333334% {
      clip: rect(37px, 9999px, 131px, 0);
    }
    75% {
      clip: rect(122px, 9999px, 23px, 0);
    }
    79.16666666666666% {
      clip: rect(107px, 9999px, 67px, 0);
    }
    83.33333333333334% {
      clip: rect(137px, 9999px, 116px, 0);
    }
    87.5% {
      clip: rect(70px, 9999px, 33px, 0);
    }
    91.66666666666666% {
      clip: rect(82px, 9999px, 6px, 0);
    }
    95.83333333333334% {
      clip: rect(38px, 9999px, 56px, 0);
    }
    100% {
      clip: rect(99px, 9999px, 90px, 0);
    }
  }
  
  @keyframes glitch-anim-2 {
    6.666666666666667% {
      clip: rect(84px, 9999px, 78px, 0);
    }
    10% {
      clip: rect(111px, 9999px, 42px, 0);
    }
    13.333333333333334% {
      clip: rect(134px, 9999px, 58px, 0);
    }
    16.666666666666664% {
      clip: rect(48px, 9999px, 142px, 0);
    }
    20% {
      clip: rect(118px, 9999px, 110px, 0);
    }
    23.333333333333332% {
      clip: rect(7px, 9999px, 25px, 0);
    }
    26.666666666666668% {
      clip: rect(130px, 9999px, 28px, 0);
    }
    30% {
      clip: rect(21px, 9999px, 7px, 0);
    }
    33.33333333333333% {
      clip: rect(93px, 9999px, 110px, 0);
    }
    36.666666666666664% {
      clip: rect(116px, 9999px, 147px, 0);
    }
    40% {
      clip: rect(79px, 9999px, 89px, 0);
    }
    43.333333333333336% {
      clip: rect(75px, 9999px, 16px, 0);
    }
    46.666666666666664% {
      clip: rect(99px, 9999px, 74px, 0);
    }
    50% {
      clip: rect(25px, 9999px, 117px, 0);
    }
    53.333333333333336% {
      clip: rect(25px, 9999px, 63px, 0);
    }
    56.666666666666664% {
      clip: rect(61px, 9999px, 112px, 0);
    }
    60% {
      clip: rect(27px, 9999px, 43px, 0);
    }
    63.33333333333333% {
      clip: rect(70px, 9999px, 100px, 0);
    }
    66.66666666666666% {
      clip: rect(63px, 9999px, 40px, 0);
    }
    70% {
      clip: rect(19px, 9999px, 64px, 0);
    }
    73.33333333333333% {
      clip: rect(120px, 9999px, 3px, 0);
    }
    76.66666666666667% {
      clip: rect(48px, 9999px, 11px, 0);
    }
    80% {
      clip: rect(52px, 9999px, 2px, 0);
    }
    83.33333333333334% {
      clip: rect(145px, 9999px, 124px, 0);
    }
    86.66666666666667% {
      clip: rect(145px, 9999px, 62px, 0);
    }
    90% {
      clip: rect(73px, 9999px, 73px, 0);
    }
    93.33333333333333% {
      clip: rect(37px, 9999px, 25px, 0);
    }
    96.66666666666667% {
      clip: rect(102px, 9999px, 49px, 0);
    }
    100% {
      clip: rect(111px, 9999px, 23px, 0);
    }
  }
`;

function GlitchText({ children }) {
  return (
    <Wrapper>
      <Effect className="active" data-text={children}>{children}</Effect>
    </Wrapper>
  )
}

export default GlitchText
