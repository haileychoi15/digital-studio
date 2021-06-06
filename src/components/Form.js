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

function Form({ setSubmitResult }) {

    const [emailValue, setEmailValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [messageValue, setMessageValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail();
    }

    const handleResponse = (response) => {
        if (response === 'OK') {
            setEmailValue('');
            setNameValue('');
            setMessageValue('');

            setSubmitResult('Thank you for getting in touch. We’ll get back to you soon.');   

        } else {
            setSubmitResult('Sorry Something went wrong. Please try again or contact us directly.');    
        }   
    }

    const sendEmail = async () => {

        if (emailValue.trim() === '' ||  nameValue.trim() === '' || messageValue.trim() === '') {
            setSubmitResult('Please fill up the form completely.');
            return false;
        }

        const secureToken = process.env.REACT_APP_SMTP_SECURE_TOKEN;
        const response = await window.Email.send({
            SecureToken: secureToken,
            To : 'pool.digital.studio@gmail.com',
            From: 'imdud0612@gmail.com',
            Subject : `Inquiry from ${nameValue}(${emailValue})`,
            Body : messageValue
        });

        console.log('smtp response : ', response);
        handleResponse(response);
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
