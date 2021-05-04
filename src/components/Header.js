import React from 'react';
import styled, { css } from 'styled-components';
import RoundButton from 'components/buttons/RoundButton';
import GlitchText from 'components/effects/GlitchText';

const PageHeader = styled.header`
    position: relative;
    width: 100%;
    padding: 0 1rem;
    min-height: 100vh;
`;

const Section = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
`;

const Logo = styled.div`
    padding: 2rem 0;
    text-align: center;

    margin-bottom: 5rem;
`;

const ContactButton = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    
    @media screen and (min-width: 48rem) {
        top: 1.5rem;
        right: 1.5rem;
    }
`;

const MascotSection = styled.section`
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
`;

const Mascot = styled.div`
    width: 200px;
    height: 250px;
    ${({ theme }) => css`
        background-color: ${theme.palette.primary};
    `};
`;

const SectionTitle = styled.h1`
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



function Header() {
    return (
        <PageHeader>
            <Section>
                <Logo>( virtual ) studio</Logo>
                <ContactButton>
                    <RoundButton buttonColor="primary">Contact</RoundButton>
                </ContactButton>
            </Section>
            <MascotSection>
                <Mascot></Mascot>
                <SectionTitle>
                    <GlitchText>We</GlitchText>
                    <GlitchGroup>
                        <GlitchText>design</GlitchText>
                        <GlitchText>and</GlitchText>
                        <GlitchText>develope </GlitchText>
                    </GlitchGroup>
                </SectionTitle> 
            </MascotSection>
        </PageHeader>
    )
}

export default Header
