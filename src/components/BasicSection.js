import React from 'react';
import styled, { css } from 'styled-components';

const Section = styled.section`
    margin-bottom: 10rem;
`;

const Title = styled.h2`
    font-size: 2.375rem;
    text-align: center;

    margin-bottom: 5rem;

    @media screen and (min-width: 48rem) {
        font-size: 5rem;
        margin-bottom: 10rem;
    }
`;

const ContentContainer = styled.div`
    ${({ scroll }) => scroll && css`
        overflow-x: scroll;
    `}

    @media screen and (min-width: 64rem) {
        overflow-x: unset;
    }
`;

const Content = styled.div`
    //display: flex;
    width: 100%;
    padding: 0 1rem;

    ${({ scroll }) => scroll && css`
        display: flex;
        width: fit-content;
    `}

    @media screen and (min-width: 48rem) {
        padding: 0 10%;

        ${({ scroll }) => scroll && css`
            padding: 0 1rem;
        `}
    }

    @media screen and (min-width: 64rem) {
        width: 100%;
        justify-content: center;
    }
`;

function BasicSection({ title, scroll, children }) {
    return (
        <Section>
            <Title>{title}</Title>
            <ContentContainer scroll={scroll}>
                <Content scroll={scroll}>
                    {children}
                </Content>
            </ContentContainer>
        </Section>
    )
}

export default BasicSection
