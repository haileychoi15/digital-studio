import React from 'react';
import styled, { css } from 'styled-components';

const colorStyles = css`
    ${({ theme, buttonColor }) => buttonColor === 'primary' 
        ? css`
        color: ${theme.palette.white};
        background-color: ${theme.palette[buttonColor]};
        `: css`
        color: ${theme.palette.primary};
        background-color: ${theme.palette[buttonColor]};
    `};
`;

const Button = styled.button`
    min-width: 80px;
    min-height: 80px;
    border-radius: 50%;
    font-size: 1.1rem;
    font-weight: 600;

    ${colorStyles}
`;

function RoundButton({ buttonColor, children }) {
    return (
        <Button buttonColor={buttonColor}>
            {children}
        </Button>
    )
}

export default RoundButton
