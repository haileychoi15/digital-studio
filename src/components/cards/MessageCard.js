import React, { useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
    position: fixed;
    width: calc(100% - 2rem);
    top: 1rem;
    right: 1rem;
    padding: 1rem;
    border: none;
    border-radius: 12px;
    z-index: 100;

    transition: transform 250ms ease-in-out;
    transform: translate(calc(100% + 2rem), 0);

    ${({ theme }) => css`
        color: ${theme.palette.black};
        background-color: ${theme.palette.white};
    `};

    ${({ submited }) => submited && css`
        transform: translate(0, 0);
    `};

    @media screen and (min-width: 48rem) {
        width: unset;
        max-width: 320px;
        top: 2rem;
        right: 2rem;
    }
`;

function MessageCard({ submited, setSubmited, setSubmitResult, children }) {

    const clearMessage = useCallback(() => {
        setTimeout(() => setSubmitResult(''), 250);
    }, [setSubmitResult]);

    useEffect(() => {
        if (submited) {
            setTimeout( async () => {
                await setSubmited(false);
                clearMessage();
            }, 4000);
        }
    }, [submited, setSubmited, clearMessage]);

    return (
        <Container submited={submited}>
            {children}
        </Container>
    )
}

export default MessageCard
