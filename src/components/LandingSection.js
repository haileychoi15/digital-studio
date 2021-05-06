import React from 'react';
import styled, { css } from 'styled-components';
import DustBackground from 'components/effects/DustBackground';
import GlitchText from 'components/effects/GlitchText';

const Section = styled.section`

`;

const TitleGroup = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;

    padding: 0 1rem;
`;

const Mascot = styled.div`
    width: 200px;
    height: 250px;
    ${({ theme }) => css`
        background-color: ${theme.palette.primary};
    `};
`;

const Title = styled.h1`
    position: absolute;
    top: 50%;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 80%;
    transform: translate(0, -50%);
    font-size: calc(100vw * 0.15);
    font-weight: 800;
    
    ${({ theme }) => css`
        color: ${theme.palette.black};
        -webkit-text-stroke: 0.5px ${theme.palette.primary};
    `};

    @media screen and (min-width: 48rem) {
        right: 0;
        padding-right: 1rem;
        font-size: 4.5rem;
    }
`;

const GlitchGroup = styled.div`
    width: 100%;
    @media screen and (min-width: 48rem) {
        display: flex;
        flex-wrap: wrap;
    }
`;

const ContentGroup = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem 1rem;

    ${({ theme }) => css`
        color: ${theme.palette.black};
    `};
`;

const Content = styled.div`
    position: relative;
    font-size: 1.75rem;

    z-index: 10;
    background-color: red;
`;

const Description = styled.p`
    margin-bottom: 5rem;

    &:last-child {
        margin-bottom: 0;
    }
`;

function LandingSection() {

    const descriptionList = [
        '(virtual) studio is a Seoul based digital studio inspired by cross-border subcultures.',
        'we design and develope websites and mobile apps that create inspring user expreriences for brands.',
        'we deny sticking to old tech stacks and overplanning.'
    ];

    return (
        <Section>
            <TitleGroup>
                <Mascot></Mascot>
                <Title>
                    <GlitchText>We</GlitchText>
                    <GlitchGroup>
                        <GlitchText>design</GlitchText>
                        <GlitchText>and</GlitchText>
                        <GlitchText>develope </GlitchText>
                    </GlitchGroup>
                </Title> 
            </TitleGroup>
            <ContentGroup>
                <Content>
                    {descriptionList.map((description, index) => 
                        <Description key={index}>{description}</Description> 
                    )}
                </Content>
                <DustBackground />
            </ContentGroup>
        </Section>
    )
}

export default LandingSection
