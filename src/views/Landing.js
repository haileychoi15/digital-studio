import React from 'react';
import styled, { css } from 'styled-components';
import Header from 'components/Header';
import LandingSection from 'components/LandingSection';
import BasicSection from 'components/BasicSection';
import MacFrame from 'components/cards/MacFrame';

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
            <BasicSection title="Experiments" scroll>
                    <MacFrame></MacFrame>
                    <MacFrame></MacFrame>
            </BasicSection>
            <BasicSection title="Skills & Tools">
                    
            </BasicSection>
        </Container>
    )
}

export default Landing
