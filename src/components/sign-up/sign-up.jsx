import React, {useState} from 'react'

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button2";
import {createUserProfileDocument, signUp} from "../../firebase";
import './sign-up.scss'
import {useHistory} from "react-router-dom";
import {ErrorMessage} from "../../ui";
import 'firebase/auth'

export const SignUp = () => {
    const [displayName, setDisplayName] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmedPasswordValue, setConfirmedPasswordValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();
    const onSignUpClicked = async () => {
        if (passwordValue !== confirmedPasswordValue) {
            alert("Password don't match")
            return;
        }
        try {
            alert('emailValue=' + emailValue + ' passwordValue=' + passwordValue + ' displayName=' + displayName)
            const {user} = signUp(emailValue, passwordValue);
            await createUserProfileDocument(user, displayName);
            // rout to home page
            history.push('/');
        } catch (e) {
            console.error(e.message);
            setErrorMessage(e.message);
        }
    }

    return (
        <div className='sign-up'>
            <h1>I don't have an account</h1>
            <span>Create an account with a user name and password</span>
            {errorMessage
                ? <ErrorMessage style={{
                    marginBottom: '16px',
                }}>
                    {errorMessage}
                </ErrorMessage>
                : null}
            <form className='sign-up-form'>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={e => setDisplayName(e.target.value)}
                    label='Display Name'
                    required>
                </FormInput>
                <FormInput
                    type='email'
                    name='email'
                    value={emailValue}
                    onChange={e => setEmailValue(e.target.value)}
                    label='Email'
                    required>
                </FormInput>
                <FormInput
                    type='password'
                    name='password'
                    value={passwordValue}
                    onChange={e => setPasswordValue(e.target.value)}
                    label='Password'
                    required>
                </FormInput>
                <FormInput
                    type='password'
                    name='confirmedPassword'
                    value={confirmedPasswordValue}
                    onChange={e => setConfirmedPasswordValue(e.target.value)}
                    label='Confirmed Password'
                    required>
                </FormInput>
                <CustomButton type='button' onClick={onSignUpClicked}>SIGN UP</CustomButton>

            </form>
        </div>

    )

}
export default SignUp
