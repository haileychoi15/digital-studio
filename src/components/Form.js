import React, { useState } from 'react';
import styled from 'styled-components';
import RoundButton from 'components/buttons/RoundButton';
import TextInput from 'components/inputs/TextInput';
import GlassCard from 'components/cards/GlassCard';

const FormContainer = styled.form`
    position: relative;
`;

const SubmitButton = styled.div`
    position: absolute;
    right: -50px;
    bottom: -50px;

    @media screen and (min-width: 48rem) {
        right: -65px;
        bottom: -65px;
    }
`;

function Form() {

    const [emailValue, setEmailValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [messageValue, setMessageValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(emailValue, nameValue, messageValue);
    }

    return (
        <GlassCard>
            <FormContainer onSubmit={(e) => handleSubmit(e)}>
                <TextInput value={nameValue} setValue={setNameValue} placeholder="Name / Company" />
                <TextInput value={emailValue} setValue={setEmailValue} placeholder="Email" />
                <TextInput value={messageValue} setValue={setMessageValue} placeholder="Message" textarea />
                <SubmitButton>
                    <RoundButton buttonColor="white" isSubmit>Send</RoundButton>
                </SubmitButton>
            </FormContainer>
        </GlassCard>
    )
}

export default Form
