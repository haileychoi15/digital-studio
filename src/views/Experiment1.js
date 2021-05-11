import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { css } from 'styled-components';
import bali from 'assets/images/bali.jpg'
import { BsArrowRight } from 'react-icons/bs';

const Container = styled.div`
    width: 100vw;
    font-family: 'Lora', serif;
    font-size: 1.2rem;
    font-weight: 400;
    color: #FF2323;
    background-color: #FFF5EF;
    overflow: hidden;

    @media screen and (min-width: 48rem) {
        font-size: 1.875rem;
    }

    button {
        font-family: 'Lora', serif;
        font-size: 1.2rem;
        font-weight: 400;
        background: none;

        @media screen and (min-width: 48rem) {
            font-size: 1.875rem;
        }
    }

    input[type=range] {
    -webkit-appearance: none; 
    width: 100%; 
    height: 4px;
    background: #FFF5EF; 
    cursor: pointer;
    border-radius: 0; /* iOS */
    transition: all 450ms ease-in;

    @media screen and (min-width: 48rem) {
        height: 6px;
    }
  }

  input[type=range]:focus {
    outline: none; 
  }

  input[type=range]::-webkit-slider-thumb{
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    background: #FFF5EF;
    border: 1px solid #FFF5EF;
    border-radius:50%;
    cursor: pointer;

    @media screen and (min-width: 48rem) {
        width: 24px;
        height: 24px;
    }
  }
  input[type=range]::-moz-range-thumb{
    -webkit-appearance: none;
    width:10px;
    height:10px;
    background: #FFF5EF;
    border: 1px solid #FFF5EF;
    border-radius:50%;
    cursor: pointer;
  }
`;

const Header = styled.header`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding: 1rem;

    margin-bottom: 2rem;

    @media screen and (min-width: 48rem) {
        margin-bottom: 10rem;
    }
`;

const HeaderTitle = styled.h1`
    position: absolute;
    top: 1rem;
    left: 1.3rem;
    font-size: 1.6rem;
    font-weight: 600;
`;

const HeaderAside = styled.div`
    position: absolute;
    transform: rotate(-90deg);
`;

const HeaderDescription = styled.p`
    font-size: 4.75rem;
    font-weight: 400;
    padding: 0;
    z-index: 10;

    @media screen and (min-width: 48rem) {
        padding: 0 10% 0 5%;
        font-size: 8.75rem;
    }
`;

const circleSizes = {
    small: '80px',
    big: '300px',
}

const circleSizeStyles = css`
    ${({ size }) => size && css`
        width: ${circleSizes[size]};
        height: ${circleSizes[size]};
    `}
`;

const Circle = styled.div`
    position: absolute;
    border: 1px solid #FF2323;
    border-radius: 50%;
    background-color: #FF2323;

    ${circleSizeStyles}

    ${({ isColored }) => !isColored && css`
        background: none;
    `}
`;

const BackgroundImage = styled.div`
    position: absolute;
    top: 50%;
    right: 8%;
    transform: translate(0, -50%);
    width: fit-content;
    height: fit-content;

    @media screen and (min-width: 48rem) {
        right: 22%;
    }
`;

const Image = styled.div`
    width: 226px;
    height: 282px;
    background-position: center;
    background-size: 100%;

    @media screen and (min-width: 48rem) {
        width: 383px;
        height: 478px;
    }
`;

const Section = styled.section`
    position: relative;
    line-height: 1.2;
    padding: 1rem;
    margin-bottom: 3rem;
    &:last-child {
        margin-bottom: 0;
    }

    @media screen and (min-width: 48rem) {
        padding: 0 12%;

        margin-bottom: 16rem;

        &:nth-child(2) {
            margin-bottom: 12rem;
        }
    }
`;

const SectionTitle = styled.h2`
    font-weight: 500;
    margin-bottom: 2rem;

    @media screen and (min-width: 48rem) {
        margin-bottom: 4rem;
    }
`;

const ListGroup = styled.div`
    display: flex;
    justify-content: space-between;
`;

const List = styled.ul`
    min-width: 50%;
`;

const ListItem = styled.li`
    display: flex;
    align-items: center;
    min-height: 46px; 

    & + & {
        margin-top: 1rem;
    }

    @media screen and (min-width: 48rem) {
        min-height: unset; 

    }
`;

const Index = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 25px;
    border: 1px solid #FF2323;
    border-radius: 50%;
    margin-right: 0.5rem;
    flex-shrink: 0;
    font-weight: 500;

    @media screen and (min-width: 48rem) {
        width: 55px;
        height: 40px;
        margin-right: 1rem;
    }
`;

const TesterSection = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 3rem 0;

    @media screen and (min-width: 48rem) {
        padding: 8rem 0;
    }
`;

const Card = styled.div`
    width: 100%;
    //height: 400px;
    height: fit-content;
    border-radius: 18px;
    padding-top: 2rem;
    background-color: #FFF5EF;

    margin-bottom: 2rem;

    @media screen and (min-width: 48rem) {
        position: absolute;
        top: 8rem; // section paddingtop 만큼
        right: -10%;
        width: 40%;
        min-width: 320px;
        max-width: 450px;
        border-radius: 25px;
        padding-top: 4rem;

        margin-bottom: 0;
    }

    @media screen and (min-width: 64rem) {
        right: 0;
    }
`;

const CardImage = styled.div`
    width: 100%;
    height: 240px;
    background-position: center;
    background-size: 100%;

    @media screen and (min-width: 48rem) {
        height: 310px;
    }
`;

const CardDescription = styled.p`
    padding: 1rem;
    color: #000;

    ${({ fontSize, fontWeight, fontStyle, textAlign }) => css`
        font-size: ${fontSize};
        font-weight: ${fontWeight};
        font-style: ${fontStyle};
        text-align: ${textAlign};
    `}

    @media screen and (min-width: 48rem) {
        min-height: 128px;
    }
`;

const ControllerGroup = styled.div`
    width: 100%;

    @media screen and (min-width: 48rem) {
        min-width: 320px;
        width: 50%;
        max-width: 420px;
    }
`;

const StyleButton = styled.button`
    color: #FFF5EF;
    transition: all 250ms;

    &:hover {
        transform: skew(20deg);
    }
`;

const FontController = styled.div`
    margin-bottom: 3rem;

    @media screen and (min-width: 48rem) {
        margin-bottom: 4rem;
    }
`;

const StyleListItem = styled.li`
    display: flex;
    align-items: center;

    & + & {
        margin-top: 1rem;
    }
`;

const Sort = styled.div`
    width: 30px;
    height: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    ${({ align }) => align === "left" && css`
        align-items: flex-start;
    `};

    ${({ align }) => align === "right" && css`
        align-items: flex-end;
    `};

    @media screen and (min-width: 48rem) {
        width: 38px;
        height: 34px;
    }
`;

const Stick = styled.div`
    width: 100%;
    height: 4px;
    background-color: #FFF5EF;

    &:nth-child(2) {
        width: 80%;
    }
    
    @media screen and (min-width: 48rem) {
        height: 6px;
    }
`;

const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    font-size: 0.875rem;

    @media screen and (min-width: 48rem) {
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: flex-start;
        font-size: 1.375rem;
    }
`;

const GoBackButton = styled.button`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    .arrow-icon {
        transition: all 250ms;
    }
    
    &:hover {
        .arrow-icon {
            
            transform: translateX(10px);
        }
    }

    @media screen and (min-width: 48rem) {
        margin-bottom: 0;
    }
`;

function Experiment1() {

    const fontList = ['Ogg', 'Caslon', 'Garamond', 'Times New Roman', 'Freight Text', 'Tiempos Text' ,'GT Sectra', 'Plantin', 'GT Super', 'ITC Clearface'];
    const fontStyleList = [
        {
            name: 'Regular',
            fontWeight: '400',
            fontStyle: 'normal',
        },
        {
            name: 'Medium',
            fontWeight: '500',
            fontStyle: 'normal',
        },
        {
            name: 'Bold',
            fontWeight: 'bold',
            fontStyle: 'normal',
        },
        {
            name: 'Italic',
            fontWeight: '400',
            fontStyle: 'italic',
        },
        {
            name: 'Italic Medium',
            fontWeight: '500',
            fontStyle: 'italic',
        }
        ,{
            name: 'Italic Bold',
            fontWeight: 'bold',
            fontStyle: 'italic',
        }
    ];

    const [fontSize, setFontSize] = useState(30);
    const [fontWeight, setFontWeight] = useState('400');
    const [fontStyle, setFontStyle] = useState('normal');
    const [textAlign, setTextAlign] = useState('left');

    const history = useHistory();

    return (
        <Container>
            <Header>
                <Circle isColored size="small" style={{ top: "-40px", left: "10rem" }}></Circle>
                <HeaderTitle>Serif</HeaderTitle>
                <HeaderDescription>Serif is <br /> the new red</HeaderDescription>
                <HeaderAside style={{ top: "1rem", right: "2.5rem", transformOrigin: "top right" }}>fonts</HeaderAside>
                <HeaderAside style={{ bottom: "0.2rem", left: "1rem", transformOrigin: "top left" }}>typography matters</HeaderAside>
                <BackgroundImage aria-hidden>
                    <Image style={{ backgroundImage: `url(${bali})` }}></Image>
                    <Circle isColored size="big" style={{ top: "2rem", right: "-150px", zIndex: "-1" }}></Circle>
                    <Circle isColored={false} size="small" style={{ bottom: "-40px", right: "-40px" }}></Circle>
                </BackgroundImage>
            </Header>
            <div>
                <Section>
                    <SectionTitle>Serif typefaces</SectionTitle>
                    <p>Serif typefaces tend to be thought of as classic and traditional, whereas sans-serif typefaces are thought of as more modern and contemporary. The fine details of serifs, especially the more delicate and high-contrast designs, don’t always display well on screens, especially at small sizes on low-resolution displays. I think all of this will change in the next few years though as high-resolution screens are becoming more common. Expect to see more delicate, high-contrast serifs being used on the web in the near future.</p>
                </Section>
                <Section>
                    <SectionTitle>Top 10 Most Popular Serif Fonts</SectionTitle>
                    <ListGroup>
                        <List>
                            {fontList.filter((font, index) => index < fontList.length/2).map((font, index) => 
                                <ListItem key={index}>
                                    <Index>{index + 1}</Index>
                                    {font}
                                </ListItem>
                            )}
                        </List>
                        <List>
                            {fontList.filter((font, index) => index >= fontList.length/2).map((font, index) => 
                                <ListItem key={index}>
                                    <Index>{index + 1 + fontList.length/2}</Index>
                                    {font}
                                </ListItem>
                            )}
                        </List>
                    </ListGroup>
                    <Circle isColored size="big" style={{ top: "-30%", right: "-150px" }}></Circle>
                </Section>
                <Section style={{ color: "#FFF5EF", backgroundColor: "#FF2323" }}>
                    <TesterSection>
                        <SectionTitle>Type Tester</SectionTitle>
                        <Card>
                            <CardImage style={{ backgroundImage: `url(${bali})` }}></CardImage>
                            <CardDescription fontSize={`${fontSize}px`} fontWeight={fontWeight} fontStyle={fontStyle} textAlign={textAlign}>Today's serif is Lora.</CardDescription>
                        </Card>
                        <ControllerGroup>
                            <FontController>   
                                <ListGroup>
                                    <ul>
                                        {fontStyleList.filter((font, index) => index < fontStyleList.length/2).map((font, index) => 
                                            <StyleListItem key={index}>
                                                <StyleButton style={{ fontWeight: `${font.fontWeight}`, fontStyle: `${font.fontStyle}` }}
                                                             onClick={() => {setFontWeight(font.fontWeight); setFontStyle(font.fontStyle);}}>
                                                    {font.name}
                                                </StyleButton>
                                            </StyleListItem>
                                        )}
                                    </ul>
                                    <ul>
                                        {fontStyleList.filter((font, index) => index >= fontStyleList.length/2).map((font, index) => 
                                            <StyleListItem key={index} style={{ fontWeight: `${font.fontWeight}`, fontStyle: `${font.fontStyle}` }}>
                                                <StyleButton style={{ fontWeight: `${font.fontWeight}`, fontStyle: `${font.fontStyle}` }}
                                                             onClick={() => {setFontWeight(font.fontWeight); setFontStyle(font.fontStyle);}}>
                                                    {font.name}
                                                </StyleButton>
                                            </StyleListItem>
                                        )}
                                    </ul>
                                </ListGroup>
                            </FontController> 
                            <FontController>
                                <ListGroup>
                                    <div>Size</div>
                                    <div>{fontSize}px</div>
                                </ListGroup>
                                <input type="range" min="20" max="40" value={fontSize} onChange={(e) => setFontSize(e.target.value)} />
                            </FontController>
                            <div>
                                <ListGroup>
                                    <Sort align="left" aria-label="Align left" onClick={() => setTextAlign("left")}>
                                        <Stick></Stick> 
                                        <Stick></Stick> 
                                        <Stick></Stick> 
                                    </Sort>
                                    <Sort align="center" aria-label="Align center" onClick={() => setTextAlign("center")}>
                                        <Stick></Stick> 
                                        <Stick></Stick> 
                                        <Stick></Stick> 
                                    </Sort>
                                    <Sort align="right" aria-label="Align right" onClick={() => setTextAlign("right")}>
                                        <Stick></Stick> 
                                        <Stick></Stick> 
                                        <Stick></Stick> 
                                    </Sort>
                                </ListGroup>
                            </div>
                        </ControllerGroup>
                    </TesterSection>
                </Section>
            </div>
            <Footer>
                <GoBackButton onClick={() => history.goBack()} style={{ fontSize: "inherit", color: "inherit" }}>
                    <span>Go back to Virtual Studio</span>
                    <BsArrowRight className="arrow-icon" style={{ marginLeft: "0.5rem" }} />
                </GoBackButton>
                <p>© 2021, Virtual Studio. All rights reserved.</p>
            </Footer>
        </Container>
    )
}

export default Experiment1
