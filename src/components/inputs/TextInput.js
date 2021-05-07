import React from 'react';
import styled, {css } from 'styled-components';

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0.4rem;
    border-radius: 6px;
    font-size: 0.75rem;
    background: none;
    transition: all 250ms;

    ${({ theme }) => css`
        border: 1px solid ${theme.palette.white};
        color: ${theme.palette.white};
        &:focus-within {
            border: 1px solid ${theme.palette.primary};
        }
    `};

    & + & {
        margin-top: 0.7rem;
    }

    @media screen and (min-width: 48rem) {
        padding: 0.7rem;
        border-radius: 0.5rem;
        font-size: 1rem;

        & + & {
            margin-top: 1rem;
        }
    }
`;

const Input = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    background: none;
`;

const Textarea = styled.textarea`
    width: 100%;
    height: 100px;
    border: none;
    background: none;

    @media screen and (min-width: 48rem) {
        height: 160px;
    }
`;

function TextInput({ placeholder, value, setValue, textarea }) {

    return (
        <InputContainer>
            {textarea
                ? <Textarea value={value} placeholder={placeholder} onChange={(e) => setValue(e.target.value)}></Textarea>
                : <Input type="text" value={value} placeholder={placeholder} onChange={(e) => setValue(e.target.value)} />
            }
        </InputContainer>
    )
}

export default TextInput
