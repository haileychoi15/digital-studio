import React from 'react';
import styled, { css } from 'styled-components';
import DustBackground from 'components/effects/DustBackground';

const FooterContainer = styled.footer`
    position: fixed;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;

    ${({ theme }) => css`
        color: ${theme.palette.black};
    `};
`;

const Description = styled.p`
    position: relative;
    font-size: 0.725rem;
    z-index: 10;

    @media screen and (min-width: 48rem) {
        font-size: 1rem;
    }
`;

function Footer() {
    return (
        <FooterContainer>
            <Description>© 2021, Virtual Studio. All rights reserved.</Description>
            <DustBackground /> 
        </FooterContainer>
    )
}

export default Footer
