import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Container = styled.div`
    position: relative;
    width: 331px;
    height: 187.66px;
    background: none;
    flex-shrink: 0;
    transition: all 250ms;

    margin-top: 1rem;

    & + & {
        margin-left: 1rem;
    }

    @media screen and (min-width: 48rem) {
        width: 513px;
        height: 267.6px;

        &:hover {
            transform: translateY(-0.7rem);
        }

        margin-top: 2.2rem; // 위로 transform 되는만큼 + roof
    }

    @media screen and (min-width: 75rem) {
        & + & {
            margin-left: 5rem;
        }
    }
`;

const Roof = styled.div`
    position: absolute;
    top: -1rem;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 1rem;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding: 0 0.5rem;

    ${({ theme }) => css`
        border: 1px solid ${theme.palette.gray};
        border-bottom: none;
    `};

    @media screen and (min-width: 48rem) {
        top: -1.4rem;
        height: 1.4rem;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }
`;

const Circle = styled.div`
    width: 6px;
    height: 6px;
    border-radius: 50%;

    ${({ theme }) => css`
        background-color: ${theme.palette.gray};
    `};

    & + & {
        margin-left: 0.3rem;
    }

    @media screen and (min-width: 48rem) {
        width: 7px;
        height: 7px;

        & + & {
            margin-left: 0.4rem;
        }
    }
`;

const Article = styled.article`
    width: 100%;
    height: 100%;

    ${({ theme }) => css`
        border: 1px solid ${theme.palette.gray};
    `};
`;

function MacFrame({ linkTo }) {
    return (
        <Container>
            <Roof aria-hidden>
                {[0, 0, 0].map((circle, index) => 
                    <Circle key={index}></Circle>
                )}
            </Roof>
            <Link to={linkTo}>
                <Article></Article>
            </Link>
        </Container>
    )
}

export default MacFrame
