import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    line-height: 1.2;

    ${({ align }) => align === 'right' && css`
        justify-content: flex-end;
    `} 

    & + & {
        margin-top: 3rem;
    }
`;

const Article = styled.article`
    max-width:  65%;

    @media screen and (min-width: 48rem) {
        max-width: 40%;
    }
`;

const Title = styled.h3`
    font-size: 1.375rem;

    margin-bottom: 1.2rem;

    @media screen and (min-width: 48rem) {
        font-size: 2.5rem;

        margin-bottom: 1.5rem;
    }
`;

const Description = styled.p`
    font-size: 1rem;

    @media screen and (min-width: 48rem) {
        font-size: 1.375rem;
    }
`;

function BasicArticle({ title, children, align }) {
    return (
        <Container align={align}>
            <Article align={align}>
                <Title>{title}</Title>
                <Description>{children}</Description>
            </Article>
        </Container>
    )
}

export default BasicArticle
