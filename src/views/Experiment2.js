import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import * as Tone from 'tone';
import { GiLoveSong } from 'react-icons/gi';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    font-family: 'Lora', serif;
    font-size: 1.2rem;
    font-weight: 400;
    color: #fff;
    background-color: #e8ebed;
    overflow: hidden;

    input {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -100;
        opacity: 0;
    }
`;

const Mobile = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    box-shadow: 12px 12px 24px 0 rgba(163, 177, 198, 0.5),
        -12px -12px 24px 0 rgba(255, 255, 255, 0.5);

    @media screen and (min-width: 30rem) {
        width: 375px;
        height: 667px;
        border-radius: 22px;
    }
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
    width: 80px;
    height: 80px;
    border: none;
    border-radius: 12px;
    font-size: 2rem;
    box-shadow: 6px 6px 10px 0 rgba(163, 177, 198, 0.5),
        -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
    color: #c2c4c4;
    background-color: inherit;
    transition: all 250ms;
    overflow: clip;

    ${({ checked }) => checked && css`
        box-shadow: inset 6px 6px 10px 0 rgba(163, 177, 198, 0.5),
            inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
    `}
`;

const RoundButton = styled.div`
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 50%;
    box-shadow: 6px 6px 10px 0 rgba(163, 177, 198, 0.5),
        -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
    color: inherit;
    background-color: inherit;
    transition: all 250ms;

    ${({ checked }) => checked && css`
        box-shadow: inset 6px 6px 10px 0 rgba(163, 177, 198, 0.5),
            inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
    `}
`;

function Experiment2() {

    // const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    // const now = Tone.now();

    const synth = useRef(null);
    const loop = useRef(null);

    const [checked, setChecked] = useState(
        new Array([0,0,0,0].length).fill(false)
    );

    const handleOnClick = (index) => {
        if (!checked[index]) {
            loop.current = new Tone.Loop(song, '4n');
            synth.current = new Tone.MembraneSynth().toDestination();

            Tone.Transport.bpm.value = 140;
            Tone.Transport.start();
            setTimeout(() => loop.current.start(0), 100);
        }
        else {
            Tone.Transport.stop();
        }
    }

    const handleOnChange = (index) => {
        const updatedChecked = checked.map((item, i) =>
          i === index ? !item : item
        );

        if (checked) {
            // const player = new Tone.Player("https://tonejs.github.io/audio/berklee/gong_1.mp3").toDestination();
            // Tone.loaded().then(() => {
            //     player.start();
            // });

            // Tone.Transport.start();
            // loop.current.start(0);
        }

        setChecked(updatedChecked);
    };

    const song = (time) => {
        synth.current.triggerAttackRelease("C2", "8n", time);
        console.log(time);
    }

    useEffect(() => {
        // loop.current = new Tone.Loop(song, '4n');
        // synth.current = new Tone.MembraneSynth().toDestination();
        // Tone.Transport.start();
        // loop.current.start(0);
    }, []);

    const buttons = [
        {
            name: 'drum1'
        },
        {
            name: 'drum2'
        },
        {
            name: 'drum3'
        }
    ];
    return (
        <Container>
            <Mobile>
                <RoundButton>
                    
                </RoundButton>
                {buttons.map((button, index) => 
                    <SquareButton key={index} checked={checked[index]} onClick={() => handleOnClick(index)} >
                        <GiLoveSong />
                        <Label>
                            <input type="checkbox" value={button.name} checked={checked[index]} onChange={() => handleOnChange(index)} />
                        </Label>
                    </SquareButton>
                )}
            </Mobile>
        </Container>
    )
}

export default Experiment2
