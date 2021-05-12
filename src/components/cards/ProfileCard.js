import React from 'react';
import styled, { css } from 'styled-components';

const Card = styled.article`
    min-width: 190px;

    @media screen and (min-width: 48rem) {
        min-width: 260px;
    }
`;

const Image = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-position: center;
    background-size: 100%;
    border: 1px solid rgba(211, 211, 211, 0.25);

    ${({ theme }) => css`
        background-color: ${theme.palette.black};
    `};

    margin: 0 auto 1.2rem;

    @media screen and (min-width: 48rem) {
        width: 205px;
        height: 205px;

        margin: 0 auto 1.5rem;
    }
`;

const Name = styled.h3`
    text-align: center;
    font-size: 1.375rem;

    margin-bottom: 1.2rem;

    @media screen and (min-width: 48rem) {
        font-size: 2rem;

        margin-bottom: 1.5rem;
    }
`;

const FeatureList = styled.ul`
    font-size: 1rem;

    @media screen and (min-width: 48rem) {
        font-size: 1.375rem;
    }
`;

const ListItem = styled.li`
    & + & {
        margin-top: 0.5rem;
    }
`;

function ProfileCard({ name, image, features }) {
    return (
        <Card>
            <Image style={{ backgroundImage: `url(${image})` }}></Image>
            <Name>{name}</Name>
            <FeatureList>
                {features.map((feature, index) =>
                    <ListItem key={index}>{feature}</ListItem>
                )}
            </FeatureList>
        </Card>
    )
}

export default ProfileCard
