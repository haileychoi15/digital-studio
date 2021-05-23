import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
    max-width: 50%;
    &:nth-child(2n-1) {
        padding-right: 0.5rem;
    }
    &:nth-child(2n) {
        padding-left: 0.5rem;
    }
`;

const ButtonList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
`;

const Name = styled.h2`
    font-size: 1rem;
    font-weight: 400;

    margin-bottom: 0.5rem;
`;

const Label = styled.label`
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
`;

const SquareButton = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 12px;
    font-size: 2rem;
    box-shadow: 6px 6px 10px 0 rgba(163, 177, 198, 0.5),
        -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
    color: inherit;
    background-color: inherit;
    transition: all 250ms;
    overflow: clip;

    ${({ buttonWidth }) => buttonWidth && css`
        width: ${buttonWidth}px;
        height: ${buttonWidth}px;
    `}

    ${({ checked }) => checked && css`
        box-shadow: inset 6px 6px 10px 0 rgba(163, 177, 198, 0.5),
            inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
    `}

    &:first-child {
        margin-bottom: 1rem;
    }
`;

function Instrucment({ InstrucmentList, name, selected, setSelected, buttonWidth }) {

    const handleOnChange = (checked, value) => {
        checked ? setSelected('') : setSelected(value);
    };

    return (
        <Container>
            <Name>{`${name}`}</Name>
            <ButtonList>
                {InstrucmentList.map((item, index) => 
                    <li key={index}>
                        <SquareButton buttonWidth={buttonWidth} checked={selected === item.value}>
                            {/* <item.icon /> */}
                            <Label htmlFor={item.key}>
                                <input type="checkbox" id={item.key} name={name} value={selected} checked={selected === item.value} onChange={() => handleOnChange(selected === item.value, item.value)} />
                            </Label>
                        </SquareButton>
                    </li>
                )}
            </ButtonList>
        </Container>
    )
}

export default Instrucment
