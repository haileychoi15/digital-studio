import React from 'react';
import styled, { css } from 'styled-components';
import Header from 'components/Header';
import LandingSection from 'components/LandingSection';

const Container = styled.div`
    width: 100vw;
    ${({ theme }) => css`
        color: ${theme.palette.white};
        background-color: ${theme.palette.black};
    `};
`;

function Landing() {
    return (
        <Container>
            <Header />
            <LandingSection />
        </Container>
    )
}

export default Landing
