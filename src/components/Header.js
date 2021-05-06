import React from 'react';
import styled from 'styled-components';
import RoundButton from 'components/buttons/RoundButton';

const HeaderContainer = styled.header`
    position: relative;
    width: 100%;
    padding: 0 1rem;

    background-color: red;
`;

const Navigation = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
`;

const Logo = styled.div`
    padding: 2rem 0;
    text-align: center;

    margin-bottom: 5rem;
`;

const ContactButton = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    
    @media screen and (min-width: 48rem) {
        top: 1.5rem;
        right: 1.5rem;
    }
`;

function Header() {

    //const glitchTextList = ['design', 'and', 'develope'];

    return (
        <HeaderContainer>
            <Navigation>
                <Logo>( virtual ) studio</Logo>
                <ContactButton>
                    <RoundButton buttonColor="primary">Contact</RoundButton>
                </ContactButton>
            </Navigation>
        </HeaderContainer>
    )
}

export default Header
