import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import dustBackground from 'assets/images/dust-120x120.png';

const DustEffect = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
`;

function DustBackground() {

    const [positionX, setPositionX] = useState(0);
    const [positionY, setPositionY] = useState(0);

    const animateNoise = useCallback(() => {
        setPositionX(prev => prev >= 15 ? 0 : prev += 5);
        setPositionY(prev => prev >= 10 ? 0 : prev += 5);

        window.setTimeout(animateNoise, 100);
    }, []);

    useEffect(() => {
        //animateNoise();
    }, [animateNoise]);

    return (
        <DustEffect aria-hidden
            style={{ backgroundImage: `url(${dustBackground})`, backgroundPosition: `${positionX}% ${positionY}%` }}>
        </DustEffect>
    )
}

export default DustBackground
