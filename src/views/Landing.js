import React from 'react';
import styled, { css } from 'styled-components';
import Header from 'components/Header';
import LandingSection from 'components/LandingSection';
import BasicSection from 'components/BasicSection';
import MacFrame from 'components/cards/MacFrame';
import BasicArticle from 'components/cards/BasicArticle';
import GlassCard from 'components/cards/GlassCard';
import ProfileCard from 'components/cards/ProfileCard';

const Container = styled.div`
    width: 100vw;

    ${({ theme }) => css`
        color: ${theme.palette.white};
        background-color: ${theme.palette.black};
    `};
`;

const ListGroup = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const List = styled.ul`
    font-size: 1.3rem;

    @media screen and (min-width: 48rem) {
        font-size: 2.5rem;
    }
`;

const ListItem = styled.li`
    & + & {
        margin-top : 1rem;
    }
`;

function Landing() {

    const skillList = [
        ['HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
        ['Vue', 'React', 'WebGL', 'PWA', 'Flutter', 'Express'],
        ['Figma', 'Illustrator', 'Blender'],
    ];

    const articleList = [
        {
            title: 'Planning & Design',
            description: 'Launch the app and start your activity (running, cycling, walking). Launch the app and start your activity (running, cycling, walking).',
        },
        {
            title: 'Build',
            description: 'Join a team with your colleagues and use our awesome features to support each other while getting to know your teammates. We promise that it will be much nicer than the Monday morning meeting :)',
        },
        {
            title: 'Deploy & Manage',
            description: 'Go through challenges together while supporting a cause you care deeply about. Launch the app and start your activity (running, cycling, walking).',
        }
    ];

    const teamList = [
        {
            name: 'Hailey',
            image: '',
            features: ['UI / UX designer', 'Front-end developer']
        },
        {
            name: 'Estele',
            image: '',
            features: ['Front-end developer', 'iOS / Android developer']
        }
    ]

    return (
        <Container>
            <Header />
            <LandingSection />
            <BasicSection title="Experiments" scroll>
                    <MacFrame></MacFrame>
                    <MacFrame></MacFrame>
            </BasicSection>
            <BasicSection title="Skills & Tools">
                    <ListGroup>
                        {skillList.map((skills, index) => 
                            <List key={index}>
                                {skills.map((skill, index) => 
                                    <ListItem key={index}>{skill}</ListItem>
                                )}
                            </List>
                        )}
                    </ListGroup>
            </BasicSection>
            <BasicSection title="How do we do">
                    {articleList.map((article, index) =>
                        <BasicArticle key={index} 
                                      title={article.title} 
                                      align={`${index % 2 === 0 ? 'left' : 'right'}`}>
                            {article.description}
                        </BasicArticle>
                    )}
            </BasicSection>
            <BasicSection title="Our Team" scroll>
                    {teamList.map((member, index) =>
                        <GlassCard key={index}>
                            <ProfileCard name={member.name} image={member.image} features={member.features}></ProfileCard>
                        </GlassCard>
                    )}
            </BasicSection>
        </Container>
    )
}

export default Landing
