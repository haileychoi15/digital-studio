import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { BiHeartCircle, BiGhost, BiSmile, BiHappyAlt } from "react-icons/bi";
import { useEventListener } from 'hooks/useEventListener';

const Icon = styled.div`
    position: absolute;
    top: unset;
    left: unset;
    border-radius: 50%;
    font-size: 3.373rem;

    ${({ theme, color }) => css`
        color: ${theme.palette[color]};
    `};
`;

function StampIcon({ type, color, positions }) {

    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.pageYOffset);
    }

    useEventListener(window, 'scroll', handleScroll);

    if (type === 'smile') {
        return (
            <Icon color={color} style={{ ...positions, transform: `translate(0, ${offsetY * 0.05}px)`}}>
                <BiSmile style={{ transform: "rotate(0)" }} />
            </Icon>
        )
    } 
    else if (type === 'heart') {
        return (
            <Icon color={color} style={{...positions, transform: `translate(0, ${offsetY * -0.1}px)`}}>
                <BiHeartCircle style={{ transform: "rotate(10deg)" }} />
            </Icon>
        )
    }
    else if (type === 'ghost') {
        return (
            <Icon color={color} style={{...positions, transform: `translate(0, ${offsetY * -0.05}px)`}}>
                <BiGhost style={{ transform: "rotate(30deg)" }} />
            </Icon>
        )
    }
    else if (type === 'happy') {
        return (
            <Icon color={color} style={{...positions, transform: `translate(0, ${offsetY * 0.1}px)`}}>
                <BiHappyAlt style={{ transform: "rotate(45deg)" }} />
            </Icon>
        )
    }
}

export default StampIcon
