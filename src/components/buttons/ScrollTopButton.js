import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import GlassCard from 'components/cards/GlassCard';
import { HiOutlineArrowUp } from 'react-icons/hi';
import { useIntersectionObserver } from 'hooks/useIntersectionObserver';

const ButtonContainer = styled.div`
    position: fixed;
    right: 0.7rem;
    bottom: 0.7rem;
    z-index: 999;
    transition: all 250ms;

    @media screen and (min-width: 48rem) {
        right: 1rem;
        bottom: 1rem;
    }
`;

const HoverEffect = styled.div`
    border-radius: 50%;
    transition: all 250ms;

    &:hover {
        transform: scale(1.1);
    }
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    font-size: 1rem;
    background: none;

    ${({ theme }) => css`
        color: ${theme.palette.white};
    `};

    @media screen and (min-width: 48rem) {
        width: 50px;
        height: 50px;
        font-size: 1.375rem;
    }
`;

function ScrollTopButton({ observeTarget }) {

    const button = useRef();

    const handler = (target) => {
        const { current } = target;
        if(current) {
            current.style.transform = 'translateX(5rem)';
        }
    }

    const antiHandler = (target) => {
        const { current } = target;
        if(current) {
            current.style.transform = 'translateX(0)';
        }
    }

    useIntersectionObserver([observeTarget], { threshold: 0.4 }, () => handler(button), () => antiHandler(button));

    return (
        <ButtonContainer ref={button}>
            <HoverEffect>
                <GlassCard isCircle>
                    <Button onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}>
                        <HiOutlineArrowUp />
                    </Button>
                </GlassCard>
            </HoverEffect>
        </ButtonContainer>
    )
}

export default ScrollTopButton
