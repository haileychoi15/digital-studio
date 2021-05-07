import React from 'react';
import styled, { css } from 'styled-components';
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const marginStyles = css`
    margin-bottom: 4rem;

    @media screen and (min-width: 48rem) {
        margin-bottom: 8rem;
    }
`;

const Section = styled.section`
    margin-bottom: 10rem;

    @media screen and (min-width: 48rem) {
        margin-bottom: 12rem;
    }
`;

const Title = styled.h2`
    font-size: 2.375rem;
    text-align: center;

    ${marginStyles}

    ${({ summary }) => summary && css`
        margin-bottom: 1.2rem;
    `};

    @media screen and (min-width: 48rem) {
        font-size: 4.2rem;
        

        ${({ summary }) => summary && css`
            margin-bottom: 1.5rem;
        `};
    }
`;

const Summary = styled.h3`
    text-align: center;
    font-size: 1rem;
    font-weight: 400;

    ${marginStyles}

    .quote-icon {
        position: relative;
        top: -2px;
        font-size: 0.75rem;
    }

    @media screen and (min-width: 48rem) {
        font-size: 1.375rem;

        .quote-icon {
            top: -4px;
            font-size: 1rem;
        }
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

function BasicSection({ title, summary, scroll, children }) {
    return (
        <Section>
            <Title summary={summary}>{title}</Title>
            {summary && 
                <Summary>
                    <ImQuotesLeft className="quote-icon" />
                        &nbsp; {summary} &nbsp;
                    <ImQuotesRight className="quote-icon" />
                </Summary>}
            <ContentContainer scroll={scroll}>
                <Content scroll={scroll}>
                    {children}
                </Content>
            </ContentContainer>
        </Section>
    )
}

export default BasicSection
