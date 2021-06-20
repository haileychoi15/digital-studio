import React from 'react';
import styled, { css } from 'styled-components';
//import donut from 'assets/images/donut.png';
import { FiLoader } from 'react-icons/fi';

const Container = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    ${({ theme }) => css`
        color: ${theme.palette.white};
        background-color: ${theme.palette.black};
    `};
`;

const LoadingIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
    //background-size: contain;
    //background-position: center;
    animation-name: rotate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: 3s;

    ${({ theme }) => css`
        color: ${theme.palette.white};
    `};

    @media screen and (min-width: 48rem) {
        width: 90px;
        height: 90px;
        font-size: 1.6rem;
    }

    @keyframes rotate {
        from {
            transform: rotate(0);
        }

        to {
            transform: rotate(360deg);
        }
    }
`;

function Loading() {
    return (
        <Container>
            <LoadingIcon>
                <FiLoader></FiLoader>
            </LoadingIcon>
        </Container>
    )
}

export default Loading
