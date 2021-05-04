import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
    ${({ theme }) => css`
        color: ${theme.palette.white};
        background-color: ${theme.palette.black};
    `};
`;

function Landing() {
    return (
        <Container>
            landing
        </Container>
    )
}

export default Landing
