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

    ${({ theme }) => css`
        border: 1px solid ${theme.palette.white};
        color: ${theme.palette.white};
    `};

    & + & {
        margin-top: 0.7rem;
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
