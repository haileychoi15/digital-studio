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
    z-index: 0;

    ${({ theme, color }) => css`
        color: ${theme.palette[color]};
    `};
`;

function StampIcon({ type, color, iconStyle }) {

    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        const y = window.pageYOffset;
        setOffsetY(y);
    }

    useEventListener(window, 'scroll', handleScroll);

    if (type === 'smile') {
        return (
            <Icon color={color} style={{...iconStyle, transform: `translate(0, ${offsetY * 0.1}px)`}}>
                <BiSmile />
            </Icon>
        )
    } 
    else if (type === 'heart') {
        return (
            <Icon color={color} style={{...iconStyle, transform: `translate(0, ${offsetY * -0.2}px)`}}>
                <BiHeartCircle />
            </Icon>
        )
    }
    else if (type === 'ghost') {
        return (
            <Icon color={color} style={{...iconStyle, transform: `translate(0, ${offsetY * -0.1}px)`}}>
                <BiGhost />
            </Icon>
        )
    }
    else if (type === 'happy') {
        return (
            <Icon color={color} style={{...iconStyle, transform: `translate(0, ${offsetY * 0.2}px)`}}>
                <BiHappyAlt />
            </Icon>
        )
    }
}

export default StampIcon
