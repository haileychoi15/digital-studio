import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Container = styled.div`
    position: relative;
    width: 358px;
    //height: calc(185.66px + 1rem);
    //background: red;
    flex-shrink: 0;
    transition: all 250ms;
    padding: 1rem 0 0.5rem;

    & + & {
        margin-left: 1rem;
    }

    @media screen and (min-width: 48rem) {
        width: 513px;
        margin-top: 1.4rem;

        &:hover {
            transform: translateY(-1rem);
        }
    }

    @media screen and (min-width: 75rem) {
        & + & {
            margin-left: 5rem;
        }
    }
`;

const Roof = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 1rem;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding: 0 0.5rem;
    z-index: 10;

    ${({ theme }) => css`
        border: 1px solid ${theme.palette.gray};
        border-bottom: none;
    `};

    @media screen and (min-width: 48rem) {
        top: -0.4rem;
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
    height: 191.75px;
    background-color: yellow;

    ${({ theme }) => css`
        border: 1px solid ${theme.palette.gray};
    `};

    @media screen and (min-width: 48rem) {
        height: 267.6px;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

function MacFrame({ title, linkTo, thumbnail }) {
    return ( 
        <Container>
            <div>
                <div>
                    <Roof aria-hidden>
                        {[0, 0, 0].map((circle, index) => 
                            <Circle key={index}></Circle>
                        )}
                    </Roof>
                    <Link to={linkTo}>
                        <Article>
                            <Image src={thumbnail} alt={title} />
                        </Article>
                    </Link>
                </div>
            </div>
        </Container>
    )
}

export default MacFrame
