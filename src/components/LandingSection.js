import React from 'react';
import styled, { css } from 'styled-components';
import DustBackground from 'components/effects/DustBackground';
import GlitchText from 'components/effects/GlitchText';
import StampIcon from 'components/effects/StampIcon';
import WebGL from 'components/WebGL';

const Section = styled.section`
    width: 100%;
`;

const TitleGroup = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;

    padding: 0 1rem;

    @media screen and (min-width: 48rem) {
        padding: 0 10%;
    }
`;

const WebGLContainer = styled.div`
    position: relative;
    top: -90px;
    width: 100%;
    height: 100vh;
    //background: red;

    @media screen and (min-width: 48rem) {
        top: 0;
        width: 60%;
    }

    @media screen and (min-width: 75rem) {
        width: 40%;
    }
`;

const Title = styled.h1`
    position: absolute;
    top: 50%;
    right: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 90%;
    transform: translate(0, -50%);
    font-size: calc(100vw * 0.16);
    font-weight: 800;
    
    ${({ theme }) => css`
        color: ${theme.palette.black};
        -webkit-text-stroke: 0.5px ${theme.palette.white};
    `};

    @media screen and (min-width: 48rem) {
        top: 50%;
        right: 50%;
        max-width: unset;
        width: 100%;
        transform: translate(50%, -50%);
        font-size: calc(100vw * 0.14);
        padding: 0 10%;
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
    overflow: hidden;

    margin-bottom: 10rem;

    ${({ theme }) => css`
        color: ${theme.palette.black};
    `};

    @media screen and (min-width: 48rem) {
        padding: 5rem 10%;
    }
`;

const Content = styled.div`
    position: relative;
    font-size: 1.75rem;
    line-height: 1.2;

    z-index: 10;
    //background-color: red;

    @media screen and (min-width: 48rem) {
        font-size: 2.5rem;
        line-height: 1.1;
    }
`;

const Description = styled.p`
    margin-bottom: 5rem;

    &:nth-of-type(3) {
        margin-bottom: 0;
    }
`;

function LandingSection({ forwardRef, setModelReady }) {

    const descriptionList = [
        'Pool Studio is a Seoul based digital studio inspired by cross-border subcultures.',
        'We design and develop websites and mobile apps interacting with users in the original ways of each brand. We make inspiring user exprerience for brands.',
        'We deny over-designing off the point and do not stick to anything if it is just to cut the work short.'
    ];

    return (
        <Section ref={forwardRef}>
            <TitleGroup>
                {/* <WebGLContainer>
                    <WebGL setModelReady={setModelReady} />
                </WebGLContainer> */}
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
                    <StampIcon type="happy" color="secondary" positions={{ top: "-9.2rem", right: "0" }} />
                    <StampIcon type="heart" color="secondary" positions={{ bottom: "-9.3rem", left: "-2rem" }} />
                    <StampIcon type="ghost" color="secondary" positions={{ bottom: "10%", right: "30%" }} />
                </Content>
                <DustBackground />
            </ContentGroup>
        </Section>
    )
}

export default LandingSection
