import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import Header from 'components/Header';
import LandingSection from 'components/LandingSection';
import BasicSection from 'components/BasicSection';
//import MacFrame from 'components/cards/MacFrame';
import MacFrame from 'components/cards/MacFrame2';
import BasicArticle from 'components/cards/BasicArticle';
import GlassCard from 'components/cards/GlassCard';
import ProfileCard from 'components/cards/ProfileCard';
import Form from 'components/Form';
import Footer from 'components/Footer';
import StampIcon from 'components/effects/StampIcon';
import ScrollTopButton from 'components/buttons/ScrollTopButton';
import { useEventListener } from 'hooks/useEventListener';
import smoothscroll from 'smoothscroll-polyfill';
import experiment1 from 'assets/images/experiment1.png';
//import experiment2 from 'assets/images/experiment2.png';
import experiment3 from 'assets/images/experiment3.png';
import donut from 'assets/images/donut.png';
import haileyMemoji from 'assets/images/hailey-memoji.svg';
import estelleMemoji from 'assets/images/estelle-memoji.svg';
import MessageCard from 'components/cards/MessageCard';

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
    width: fit-content;
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

const Link = styled.a`
    display: flex;
    align-items: center;
    color: inherit;
    cursor: pointer;
    transition: all 250ms;

    &:hover {
        transform: translate(1rem);
    }
`;

const Image = styled.img`
    //position: absolute;
    width: 80px;
    height: 80px;
    margin-right: 0.5rem;

    @media screen and (min-width: 48rem) {
        width: 90px;
        height: 90px;
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
    position: relative;
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

const FlexBox = styled.div`
    /* width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;

    background-color: red;

    @media screen and (min-width: 48rem) {
        flex-direction: row;
    } */
`;

function Landing() {

    const macFrameList = [
        {
            title: 'experiment1',
            address: '/experiment1',
            thumbnail: experiment1,
        },
        // {
        //     title: 'experiment2',
        //     address: '/experiment2',
        //     thumbnail: experiment2,
        // },
        {
            title: 'experiment3',
            address: '/experiment3',
            thumbnail: experiment3,
        },
    ]

    const skillList = [
        ['HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
        ['Vue', 'React', 'WebGL', 'PWA', 'Flutter', 'Express'],
        ['Figma', 'Illustrator', 'Blender'],
    ];

    const articleList = [
        {
            title: 'Plan & Design',
            description: 'Set up the goals an app should achieve and ideate the entire flow the app would work with. Define the functionalities of the app and design in draft.',
        },
        {
            title: 'Build',
            description: 'Design, develop and do SEO things. Designed components would be unit-tested mostly with Storybook to pursue bug-free front-end. Go through challenges whenever needed.',
        },
        {
            title: 'Deploy & Manage',
            description: 'Deploy the app and fix details you care deeply about. Launch the app and start your business! The app will be managed after launch.',
        }
    ];

    const teamList = [
        {
            name: 'Hailey',
            image: haileyMemoji,
            features: ['UI / UX designer', 'Front-end developer']
        },
        {
            name: 'Estele',
            image: estelleMemoji,
            features: ['Front-end developer', 'iOS / Android developer']
        }
    ]

    const contactList = [
        'pool.digital.studio@gmail.com',
        '010-9686-6440',
    ]

    const [mobile, setMobile] = useState(0);
    //const [frameWidth, setFrameWidth] = useState(0);
    const landingSection = useRef();
    //const experimentSection = useRef();

    const [submited, setSubmited] = useState(false);
    const [submitResult, setSubmitResult] = useState('');

    useEffect(() => {
        if(submitResult) {
            setSubmited(true);
        }
    }, [submitResult]);

    const handleResize = () => {
        const innerWidth = window.innerWidth;
        innerWidth / 16 < 48 ? setMobile(true) : setMobile(false); //48rem

        // const { current } = experimentSection;
        // const margin = 16;
        // console.log((current.clientWidth - margin*2) / 2);
        // setFrameWidth((current.clientWidth - margin*2) / 2);
    }

    useEffect(() => {
        handleResize();
        smoothscroll.polyfill();
    }, []);

    useEventListener(window, 'resize', handleResize);

    return (
        <Container>
            <MessageCard submited={submited} setSubmited={setSubmited} setSubmitResult={setSubmitResult}>{submitResult}</MessageCard>
            <Header />
            <LandingSection forwardRef={landingSection} />
            <BasicSection title="Experiments" scroll>
                    {macFrameList.map((article, index) => 
                        <MacFrame key={index} title={article.title} linkTo={article.address} thumbnail={article.thumbnail} />
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
            <BasicSection title="Our Team" summary="We like to build something cool." scroll>
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
                            <ListItem key={index}>
                                {contact}
                            </ListItem>
                        )}
                        <ListItem>
                            <Link href="https://www.instagram.com/pool.digital.studio">
                                {/* <Image src={donut} alt="Pool studio logo" /> */}
                                Instagram
                            </Link>
                        </ListItem>
                    </ContactList>
                    <FormBlock>
                        <Image src={donut} alt="donut" aria-label="hidden" 
                            style={{ position: "absolute", top: "-15%", right: "15%", transform: "rotate(-20deg)" }} />
                        <Image src={donut} alt="donut" aria-label="hidden"
                            style={{ position: "absolute", left: "-10%", bottom: "20%", transform: "rotate(-80deg)" }} />
                        <Form setSubmitResult={setSubmitResult} setSubmited={setSubmited} />
                    </FormBlock>
                </GridContainer>
            </BasicSection>
            <Footer />
            <ScrollTopButton observeTarget={landingSection} />
        </Container>
    )
}

export default Landing
