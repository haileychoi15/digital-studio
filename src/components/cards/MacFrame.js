import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
    position: relative;
    width: 331px;
    height: 187.66px;
    background-color: rgba(255,255,255,0.3);
    flex-shrink: 0;

    margin-top: 1rem;

    & + & {
        margin-left: 1rem;
    }

    @media screen and (min-width: 48rem) {
        width: 513px;
        height: 267.6px;

        & + & {
            margin-left: 2rem;
        }
    }

    @media screen and (min-width: 64rem) {
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
`;

const Article = styled.article`
    width: 100%;
    height: 100%;

    ${({ theme }) => css`
        border: 1px solid ${theme.palette.gray};
    `};
`;

function MacFrame() {
    return (
        <Container>
            <Roof aria-hidden>
                {[0, 0, 0].map((circle, index) => 
                    <Circle key={index}></Circle>
                )}
            </Roof>
            <Article></Article>
        </Container>
    )
}

export default MacFrame
