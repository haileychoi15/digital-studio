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
    position: relative;
    padding-top: 4rem;
    margin-bottom: 6rem;

    @media screen and (min-width: 48rem) {
        margin-bottom: 8rem;
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
        overflow: scroll;

        &::-webkit-scrollbar {
            width: 1px;
            height: 2.5rem;               /* width of the entire scrollbar */
        }

        &::-webkit-scrollbar-track {
            background: none;        /* color of the tracking area */
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 20px;       /* roundness of the scroll thumb */
            border: 1rem solid black;
            ${({ theme }) => css`
                background-color: ${theme.palette.primary};
            `}

            background: linear-gradient(45deg, #D1ED5D, #B2FF75);
        }

        &::-webkit-scrollbar-corner {
            ${({ theme }) => css`
                color: ${theme.palette.black};
            `}
        }
    `}

    @media screen and (min-width: 64rem) {
        overflow: unset;
    }
`;

const Content = styled.div`
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

function BasicSection({ title, summary, scroll, children, id }) {
    return (
        <Section id={id}>
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
