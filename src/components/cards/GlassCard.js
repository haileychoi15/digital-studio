import React from 'react';
import styled, { css } from 'styled-components';

const Card = styled.div`
    border: 1px solid rgba(211, 211, 211, 0.1);
    border-radius: 12px;
    padding: 2rem;
    z-index: 10;

    background-color: rgba(85, 85, 85, 0.5);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);

    ${({ isCircle }) => isCircle && css`
        border-radius: 50%;
        padding: 0;
    `};

    & + & {
        margin-left: 1rem;
    }

    @media screen and (min-width: 48rem) {
        padding: 2.5rem;

        ${({ isCircle }) => isCircle && css`
            padding: 0;
        `};

        & + & {
            margin-left: 5rem;
        }
    }
`;

function GlassCard({ children, isCircle }) {
    return (
        <Card isCircle={isCircle}>
            {children}
        </Card>
    )
}

export default GlassCard
