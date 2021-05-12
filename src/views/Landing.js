import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import Header from 'components/Header';
import LandingSection from 'components/LandingSection';
import BasicSection from 'components/BasicSection';
import MacFrame from 'components/cards/MacFrame';
import BasicArticle from 'components/cards/BasicArticle';
import GlassCard from 'components/cards/GlassCard';
import ProfileCard from 'components/cards/ProfileCard';
import Form from 'components/Form';
import Footer from 'components/Footer';
import StampIcon from 'components/effects/StampIcon';
import ScrollTopButton from 'components/buttons/ScrollTopButton';
import { useEventListener } from 'hooks/useEventListener';
import smoothscroll from 'smoothscroll-polyfill';

const Container = styled.div`
    width: 100vw;
    overflow: hidden;
    scroll-behavior: smooth;

    ${({ theme }) => css`
        color: ${theme.palette.white};
        background-color: ${theme.palette.black};
    `};

    padding-bottom: 0.1px;
    margin-bottom: 60px; // footer
`;

const ListGroup = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const ListItem = styled.li`
    font-size: 1.3rem;

    & + & {
        margin-top : 1rem;
    }

    @media screen and (min-width: 48rem) {
        font-size: calc(100vw * 0.028); //2.5rem;
    }

    @media screen and (min-width: 90rem) {
        font-size: 2.5rem;
    }
`;

const GridContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media screen and (min-width: 64rem) {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }
`;

const FormBlock = styled.div`
    width: 100%;
    padding: 0 5%;

    @media screen and (min-width: 48rem) {
        width: 40%;
        min-width: 390px;
        max-width: 460px;
        padding: 0;
    }
`;

const ContactList = styled.ul`
    width: fit-content;

    margin: 0 auto 2rem;

    @media screen and (min-width: 64rem) {
        margin: 0;
    }
`;

function Landing() {

    const macFrameList = [
        {
            title: 'experiment1',
            address: '/experiment1',
        },
        {
            title: 'experiment2',
            address: '/experiment2',
        },
    ]

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

    const contactList = [
        'virtual.studio.hi@gmail.com',
        '010-9686-6440',
        'instagram'
    ]

    const [mobile, setMobile] = useState(0);
    const landingSection = useRef();

    const handleResize = () => {
        const innerWidth = window.innerWidth;
        innerWidth / 16 < 48 ? setMobile(true) : setMobile(false); //48rem
    }

    useEffect(() => {
        handleResize();
        smoothscroll.polyfill();
    }, []);

    useEventListener(window, 'resize', handleResize);

    return (
        <Container>
            <Header />
            <LandingSection forwardRef={landingSection} />
            <BasicSection title="Experiments" scroll>
                {macFrameList.map((article, index) => 
                    <MacFrame key={index} linkTo={article.address} />
                )}
            </BasicSection>
            <BasicSection title="Skills & Tools">
                    <ListGroup>
                        {skillList.map((skills, index) => 
                            <ul key={index}>
                                {skills.map((skill, index) => 
                                    <ListItem key={index}>{skill}</ListItem>
                                )}
                            </ul>
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
            <BasicSection title="Our Team" summary="you know what? cool kids never stop" scroll>
                    {teamList.map((member, index) =>
                        <GlassCard key={index}>
                            <ProfileCard name={member.name} image={member.image} features={member.features}></ProfileCard>
                        </GlassCard>
                    )}
                    {mobile ? 
                        <>
                            <StampIcon type="smile" color="primary" positions={{ top: "10%", left: "0", }} />
                            <StampIcon type="heart" color="primary" positions={{ bottom: "-40%", left: "15rem" }} />
                            <StampIcon type="ghost" color="primary" positions={{ top: "60%", right: "1rem" }} />
                        </> :
                        <>
                            <StampIcon type="smile" color="primary" positions={{ top: "18rem", left: "22.2%" }} />
                            <StampIcon type="heart" color="primary" positions={{ bottom: "-50%", left: "50%" }} />
                            <StampIcon type="ghost" color="primary" positions={{ top: "65%", right: "25%" }} />
                        </>
                    }
            </BasicSection>
            <BasicSection title="Let’s collaborate" id="contact">
                <GridContainer>
                    <ContactList>
                        {contactList.map((contact, index) => 
                            <ListItem key={index}>{contact}</ListItem>
                        )}
                    </ContactList>
                    <FormBlock>
                        <Form />
                    </FormBlock>
                </GridContainer>
            </BasicSection>
            <Footer />
            <ScrollTopButton observeTarget={landingSection} />
        </Container>
    )
}

export default Landing
