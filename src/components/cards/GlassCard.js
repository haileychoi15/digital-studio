import React from 'react';
import styled, { css } from 'styled-components';

const Card = styled.div`
    border: 1px solid #fff;
    border-radius: 12px;
    padding: 2rem;

    background-color: rgba(85, 85, 85, 0.5);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`;

function GlassCard({ children }) {
    return (
        <Card>
            {children}
        </Card>
    )
}

export default GlassCard
