import React from 'react';
import styled, { css } from 'styled-components';
import { BiHeartCircle, BiGhost, BiSmile } from "react-icons/bi";

const Icon = styled.div`
    position: absolute;
    top: unset;
    left: unset;
    border-radius: 50%;
    font-size: 3.373rem;
    z-index: 0;

    ${({ theme }) => css`
        color: ${theme.palette.primary};
    `};
`;

function StampIcon({ type, iconStyle }) {
    if (type === 'smile') {
        return (
            <Icon style={{...iconStyle}}>
                <BiSmile />
            </Icon>
        )
    } 
    else if (type === 'heart') {
        return (
            <Icon style={{...iconStyle}}>
                <BiHeartCircle />
            </Icon>
        )
    }
    else if (type === 'ghost') {
        return (
            <Icon style={{...iconStyle}}>
                <BiGhost />
            </Icon>
        )
    }
}

export default StampIcon
