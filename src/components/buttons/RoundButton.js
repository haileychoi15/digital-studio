import React from 'react';
import styled, { css } from 'styled-components';

const colorStyles = css`
    ${({ theme, buttonColor }) => buttonColor === 'primary' 
        ? css`
        color: ${theme.palette.white};
        background-color: ${theme.palette[buttonColor]};
        `: css`
        color: ${theme.palette.secondary};
        background-color: ${theme.palette[buttonColor]};
    `};
`;

const Button = styled.button`
    min-width: 80px;
    min-height: 80px;
    border-radius: 50%;
    font-size: 1.1rem;
    font-weight: 800;
    transition: all 250ms;
    &:hover {
        transform: scale(1.07);
    }

    ${colorStyles}

    @media screen and (min-width: 48rem) {
        min-width: 110px;
        min-height: 110px;
        font-size: 1.375rem;
    }
`;

function RoundButton({ buttonColor, children, isSubmit, onClick }) {
    return (
        <>
            {isSubmit ?
                <Button type="submit" buttonColor={buttonColor}>
                    {children}
                </Button> :
                <Button type="button" buttonColor={buttonColor} onClick={onClick}>
                    {children}
                </Button>
            }
            
        </>
    )
}

export default RoundButton
