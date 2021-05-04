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

const Logo = styled.div`
    padding: 1rem 0;
    text-align: center;

    margin-bottom: 5rem;
`;

const ContactButton = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
`;

const MascotSection = styled.section`
    position: relative;
    width: 100%;
    height: 100vw;
    display: flex;
    align-items: center;

    margin-bottom: 2rem;
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
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 80%;
    height: 100%;
    font-size: calc(100vw * 0.15);
    font-weight: 800;
    ${({ theme }) => css`
        color: ${theme.palette.black};
        -webkit-text-stroke: 0.5px ${theme.palette.primary};
    `};
`;

function Header() {
    return (
        <PageHeader>
            <Logo>( virtual ) studio</Logo>
            <ContactButton>
                <RoundButton buttonColor="primary">Contact</RoundButton>
            </ContactButton>
            <MascotSection>
                <Mascot></Mascot>
                <SectionTitle>
                    <GlitchText>We</GlitchText>
                    <GlitchText>design</GlitchText>
                    <GlitchText>and</GlitchText>
                    <GlitchText>develope</GlitchText>
                </SectionTitle> 
            </MascotSection>
        </PageHeader>
    )
}

export default Header
