import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
//import * as Tone from 'tone';
import { useEventListener } from 'hooks/useEventListener';
import { GiGuitarBassHead, GiDrum } from 'react-icons/gi';
import { IoVolumeHigh, IoVolumeMute } from 'react-icons/io5';
import Instrucment from 'components/Instrucment';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    //font-family: 'Lora', serif;
    font-size: 1rem;
    font-weight: 400;
    color: #c2c4c4;
    background-color: #e8ebed;
    overflow: hidden;

    input[type=checkbox] {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -100;
        opacity: 0;
    }

    input[type=range] {
    -webkit-appearance: none; 
    width: 100%; 
    height: 100%;
    border-radius: 22px;
    background: none;
    cursor: pointer;
    transition: all 450ms ease-in;
  }

  input[type=range]:focus {
    outline: none; 
  }

  input[type=range]::-webkit-slider-thumb{
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    background: #efefef;
    border: 1px solid #efefef;
    border-radius:50%;
    cursor: pointer;

    box-shadow: 2px 2px 2px 0 rgba(163, 177, 198, 0.5),
             -1px -1px 2px 0 rgba(255, 255, 255, 0.5);
  }

  input[type=range]::-moz-range-thumb{
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    background: #efefef;
    border: 1px solid #efefef;
    border-radius:50%;
    cursor: pointer;

    box-shadow: 2px 2px 2px 0 rgba(163, 177, 198, 0.5),
             -1px -1px 2px 0 rgba(255, 255, 255, 0.5);
  }
`;

const OnOffButton = styled.button`
    display: block;
    position: relative;
    width: 66px;
    height: 32px;
    border: none;
    //border: 1px solid #e8ebed;
    border-radius: 20px;
    background: none;
    box-shadow: inset 4px 4px 6px 0 rgba(163, 177, 198, 0.5),
            inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
             4px 4px 6px 0 rgba(163, 177, 198, 0.5),
             -4px -4px 6px 0 rgba(255, 255, 255, 0.5);
    overflow: hidden;

    margin-left: auto; 
    margin-right: 0;
    margin-bottom: 0.5rem;
`;

const OnOffBackground = styled.div`
     position: absolute;
     top: 0;
     left: 0;
     width: 0;
     height: 100%;
     border-radius: 20px;
     background-color: #a6e7ff;
     box-shadow: inset 4px 4px 6px 0 rgba(163, 177, 198, 0.5),
            inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5);
    transition: all 250ms ease-in;

    ${({ isOn }) => isOn && css`
        width: 100%;
    `}
`;

const CircleButton = styled.div`
    position: absolute;
    width: 30px;
    height: 30px;
    top: 1px;
    left: 1px;
    border: none;
    border-radius: 50%;
    background-color: #efefef;
    box-shadow: 2px 2px 3px 0 rgba(163, 177, 198, 0.5),
             -2px -2px 3px 0 rgba(255, 255, 255, 0.5);
    transform: translateX(0);
    transition: all 200ms ease-in;

    ${({ isOn }) => isOn && css`
        transform: translateX(calc(63px - 30px));
        box-shadow: 2px 2px 3px 0 rgba(163, 177, 198, 0.5);
    `}
`;

const Mobile = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 2rem;
    box-shadow: 12px 12px 24px 0 rgba(163, 177, 198, 0.5),
        -12px -12px 24px 0 rgba(255, 255, 255, 0.5);

    @media screen and (min-width: 30rem) {
        width: 375px;
        height: 667px;
        border-radius: 22px;
    }
`;

const AnimatedRing = styled.div`
  position: relative;
  background: none;
  width: 140px;
  height: 140px;
  overflow: hidden;
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const OuterRing = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(135deg, #FEED07 0%, #FE6A50 5%, #ED00AA 15%, #2FE3FE 50%, #8900FF 100%);
  border-radius: 50%;
  box-shadow:
   20px 20px 60px #bebebe,
   -20px -20px 60px #ffffff;

  animation-duration: 2s;
  animation-name: rotate;
  animation-iteration-count: infinite;

  @keyframes rotate {
    0% {transform:rotate(0deg);}
    100% {transform:rotate(360deg);}
  }
`;

const InnerRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: calc(100% - 10px);
  width: calc(100% - 10px);
  background: linear-gradient(125deg, #fff, #cfcfcf);
  border-radius: 50%;
`;

const RoundButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    box-shadow: 6px 6px 10px 0 rgba(163, 177, 198, 0.5),
        -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
    color: inherit;
    background-color: inherit;
    transition: all 250ms;

    &:active {
        box-shadow: inset 6px 6px 10px 0 rgba(163, 177, 198, 0.5),
            inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
    }

    margin-right: 1rem;

    ${({ size }) => size === 'big' && css`
        width: 140px;
        height: 140px;
    `}
`;

const InstrucmentSection = styled.section`
    display: flex;
    flex-wrap: wrap;

    margin-bottom: 1rem;
`;

const VolumeSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const VolumeController = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    width: 242px;
    height: 16px;
    border-radius: 20px;
    box-shadow: inset 4px 4px 6px 0 rgba(163, 177, 198, 0.5),
            inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5);
    background: none;
`;

function Experiment2() {

    const mobile = useRef();

    const [isOn, setIsOn] = useState(false);
    const [isMute, setIsMute] = useState(false);
    const [volume, setVolume] = useState(20);
    const [buttonWidth, setButtonWidth] = useState(0);
    const [drumSelected, setDrumSelected] = useState('');
    const [bassSelected, setBassSelected] = useState('');
    const [chordSelected, setChordSelected] = useState('');
    const [melodySelected, setMelodySelected] = useState('');

    const handleVolumeChange = (e) => {
        const { target: { value } } = e;
        Number(value) === 0 ? setIsMute(true) : setIsMute(false);
        setVolume(value);
    }

    const handlVolumeClick = () => {
        isMute ? setVolume(20) : setVolume(0);
        setIsMute((prev) => !prev);
    }

    const handleOnOffClick = () => {
        if(isOn) {
            setDrumSelected('');
            setBassSelected('');
            setChordSelected('');
            setMelodySelected('');
        }
        setIsOn((prev) => !prev);
    }

    const handleResize = () => {
        const { current } = mobile;
        if(current) {
            const buttonsWidth = current.clientWidth - (16 * 7);
            setButtonWidth(buttonsWidth / 4);
        }
    }

    useEffect(() => {
        console.log(isMute);
    }, [isMute]);

    useEffect(() => {
        handleResize();
    }, []);

    const drumList = [
        {
            key: 'drum1',
            value: 'drum1',
            icon: GiDrum
        },
        {
            key: 'drum2',
            value: 'drum2',
            icon: GiDrum
        },
        {
            key: 'drum3',
            value: 'drum3',
            icon: GiDrum
        },
        {
            key: 'drum4',
            value: 'drum4',
            icon: GiDrum
        }
    ];

    const bassList = [
        {
            key: 'bass1',
            value: 'bass1',
            icon: GiGuitarBassHead
        },
        {
            key: 'bass2',
            value: 'bass2',
            icon: GiGuitarBassHead
        },
        {
            key: 'bass3',
            value: 'bass3',
            icon: GiGuitarBassHead
        },
        {
            key: 'bass4',
            value: 'bass4',
            icon: GiGuitarBassHead
        }
    ];

    const chordList = [
        {
            key: 'chord1',
            value: 'chord1',
            icon: GiGuitarBassHead
        },
        {
            key: 'chord2',
            value: 'chord2',
            icon: GiGuitarBassHead
        },
        {
            key: 'chord3',
            value: 'chord3',
            icon: GiGuitarBassHead
        },
        {
            key: 'chord4',
            value: 'chord4',
            icon: GiGuitarBassHead
        }
    ];

    const melodyList = [
        {
            key: 'melody1',
            value: 'melody1',
            icon: GiGuitarBassHead
        },
        {
            key: 'melody2',
            value: 'melody2',
            icon: GiGuitarBassHead
        },
        {
            key: 'melody3',
            value: 'melody3',
            icon: GiGuitarBassHead
        },
        {
            key: 'melody4',
            value: 'melody4',
            icon: GiGuitarBassHead
        }
    ];

    useEventListener(window, 'resize', handleResize);

    return (
        <Container>
            <Mobile ref={mobile}>
                <OnOffButton onClick={handleOnOffClick}>
                    <OnOffBackground isOn={isOn}></OnOffBackground>
                    <CircleButton isOn={isOn}></CircleButton>
                </OnOffButton>
                {/* <RoundButton size="big">
                    <AnimatedRing>
                        <OuterRing></OuterRing>
                        <InnerRing></InnerRing>
                    </AnimatedRing>
                </RoundButton> */}
                <InstrucmentSection>
                    <Instrucment InstrucmentList={drumList} name="Drums" selected={drumSelected} setSelected={setDrumSelected} buttonWidth={buttonWidth} />
                    <Instrucment InstrucmentList={bassList} name="Bass" selected={bassSelected} setSelected={setBassSelected} buttonWidth={buttonWidth} />
                    <Instrucment InstrucmentList={chordList} name="Chords" selected={chordSelected} setSelected={setChordSelected} buttonWidth={buttonWidth} />
                    <Instrucment InstrucmentList={melodyList} name="Melodies" selected={melodySelected} setSelected={setMelodySelected} buttonWidth={buttonWidth} />
                </InstrucmentSection>
                <VolumeSection>
                    <RoundButton onClick={handlVolumeClick}>
                        {isMute ? <IoVolumeMute /> : <IoVolumeHigh /> }
                    </RoundButton>
                    <VolumeController>
                        {/* <label htmlFor="volume" >Volume</label> */}
                        <input type="range" id="volume" min="0" max="100" step="1" value={volume} onChange={(e) => handleVolumeChange(e)} />
                    </VolumeController>
                </VolumeSection>
            </Mobile>
        </Container>
    )
}

export default Experiment2