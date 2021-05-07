import React from 'react';
import styled, { css } from 'styled-components';
import arrowLinear from 'assets/images/arrow-linear.svg';

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    line-height: 1.2;

    ${({ align }) => align === 'right' && css`
        justify-content: flex-end;
    `} 

    & + & {
        margin-top: 2.5rem;
    }

    &:last-child {
        img {
            transform: rotate(90deg);
        }
    }

    @media screen and (min-width: 48rem) {
        & + & {
            margin-top: 1rem;
        }
    }
`;

const Article = styled.article`
    max-width:  65%;

    ${({ align }) => align === 'left' && css`
        margin-right: 5%;
    `} 

    @media screen and (min-width: 48rem) {
        max-width: 40%;
    }
`;

const Title = styled.h3`
    font-size: 1.375rem;

    margin-bottom: 1.2rem;

    @media screen and (min-width: 48rem) {
        font-size: 2.5rem;

        margin-bottom: 1.5rem;
    }
`;

const Description = styled.p`
    font-size: 1rem;

    @media screen and (min-width: 48rem) {
        font-size: 1.375rem;
    }
`;

const ArrowImage = styled.img`
    width: auto;
    height: 90px;

    @media screen and (min-width: 48rem) {
        height: 150px;
    }
`;

function BasicArticle({ title, children, align }) {
    return (
        <Container align={align}>
            <Article align={align}>
                <Title>{title}</Title>
                <Description>{children}</Description>
            </Article>
            {align === "left" && <ArrowImage src={arrowLinear} />}
        </Container>
    )
}

export default BasicArticle
