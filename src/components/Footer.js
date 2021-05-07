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
    z-index: 10;
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
