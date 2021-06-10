import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { css } from 'styled-components';
import mobileImage from 'assets/images/experiment3-mobile.svg';
import pcImage from 'assets/images/experiment3-pc.svg';
import { useEventListener } from 'hooks/useEventListener';

const Container = styled.div`
    position: relative;
    width: 100%;

    margin-top: 4rem;

    @media screen and (min-width: 48rem) {
        margin-top: 6rem;
    }
`;

const MessageCard = styled.div`
    position: fixed;
    width: calc(100% - 2rem);
    top: 1rem;
    right: 1rem;
    padding: 1rem;
    border-radius: 12px;
    z-index: 100;

    ${({ theme }) => css`
        border: 1px solid ${theme.palette.black};
        color: ${theme.palette.black};
        background-color: ${theme.palette.white};
    `};

    @media screen and (min-width: 48rem) {
        width: unset;
        max-width: 320px;
        top: 2rem;
        right: 2rem;
    }
`;

const Image = styled.img`
    width: 100%;
`;

const SquareButton = styled.button`
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    width: calc(100% - 2rem);
    height: 50px;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    padding: 0 1rem;
    border-radius: 12px;

    ${({ theme }) => css`
        border: 1px solid ${theme.palette.black};
        color: ${theme.palette.black};
        background-color: ${theme.palette.white};
    `};

    @media screen and (min-width: 48rem) {
        bottom: 2rem;
        right: 2rem;
        width: unset;
    }
`;

function Experiment3() {

    const history = useHistory();

    const [mobile, setMobile] = useState(true);

    const handleResize = () => {
        const innerWidth = window.innerWidth;
        innerWidth / 16 < 48 ? setMobile(true) : setMobile(false); //48rem
    }

    useEffect(() => {
        handleResize();
    }, []);

    useEventListener(window, 'resize', handleResize);

    return (
        <Container>
            <MessageCard>This is a design proposal template</MessageCard>
            <Image src={mobile ? mobileImage : pcImage} alt="experiment3" />
            <SquareButton onClick={() => history.goBack()}>
                Back to Pool Studio
            </SquareButton>
        </Container>
    )
}

export default Experiment3
