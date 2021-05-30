import React, { useEffect, useState } from 'react';
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
    box-shadow: none;
    color: inherit;
    background-color: inherit;
    transition: all 250ms;
    overflow: clip;

    ${({ buttonWidth }) => buttonWidth && css`
        width: ${buttonWidth}px;
        height: ${buttonWidth}px;
    `}

    ${({ visible }) => visible && css`
        box-shadow: 6px 6px 10px 0 rgba(163, 177, 198, 0.5),
            -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
    `}

    ${({ checked }) => checked && css`
        box-shadow: inset 6px 6px 10px 0 rgba(163, 177, 198, 0.5),
            inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
    `}

    &:first-child {
        margin-bottom: 1rem;
    }
`;

const Audio = styled.audio`
    position: absolute;
    top: 0;
    left: 0;
`;

function Instrucment({ InstrucmentList, name, selected, setSelected, currentTime, buttonWidth }) {

    const [visible, setVisible] = useState(false);

    const handleOnChange = (checked, value) => {
        checked ? setSelected('') : setSelected(value);
        
    };

    const handleAudio = (audios) => {
        audios.forEach((audio) => audio.checked && audio.play()); 
    }

    useEffect(() => {

        const audios = document.querySelectorAll(`.${name}`);
        audios.forEach((audio) => audio.pause());
        
        if (currentTime === 0) {
            //console.log('4의 배수 currentTime', currentTime);
            setTimeout(() => handleAudio(audios), 0);
        } 
        else if (currentTime === 1) {
            //console.log('나머지 1 currentTime', currentTime);
            setTimeout(() => handleAudio(audios), 3000);
        }
        else if (currentTime === 2) {
            //console.log('나머지 2 currentTime', currentTime);
            setTimeout(() => handleAudio(audios), 2000);
        }
        else if (currentTime === 3) {
            //console.log('나머지 3 currentTime', currentTime);
            setTimeout(() => handleAudio(audios), 1000);
        }
        
    }, [selected, currentTime, name]);

    useEffect(() => {
        setVisible(true);
        return () => setVisible(false);
    }, []);

    return (
        <Container>
            <Name>{`${name}`}</Name>
            <ButtonList>
                {InstrucmentList.map((item, index) => 
                    <li key={index}>
                        <SquareButton visible={visible} buttonWidth={buttonWidth} checked={selected === item.value}>
                            <Label htmlFor={item.key}>
                                <input type="checkbox" id={item.key} name={name} value={selected} checked={selected === item.value} onChange={() => handleOnChange(selected === item.value, item.value)} />
                            </Label>
                            <Audio loop className={name} checked={selected === item.value}>
                                <source src={item.audio}></source>
                                <p>Your browser doesn't support HTML5 audio.</p>
                            </Audio>
                        </SquareButton>
                    </li>
                )}
            </ButtonList>
        </Container>
    )
}

export default Instrucment
