import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    border: 1px solid rgba(85, 85, 85, 0.8);
    border-radius: 12px;
    padding: 2rem;

    background-color: rgba(85, 85, 85, 0.5);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);

    & + & {
        margin-left: 1rem;
    }

    @media screen and (min-width: 48rem) {
        padding: 3rem;

        & + & {
            margin-left: 5rem;
        }
    }
`;

function GlassCard({ children }) {
    return (
        <Card>
            {children}
        </Card>
    )
}

export default GlassCard
