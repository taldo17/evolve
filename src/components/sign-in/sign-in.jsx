import React, { useState } from 'react'
import FormInput from "../form-input/form-input";
import { useHistory } from 'react-router-dom';
import './sign-in.scss'
import CustomButton from "../custom-button/custom-button2";
import {signInWithGoogle, signIn} from '../../firebase'
import {ErrorMessage} from '../../ui';
import 'firebase/auth'

export const SignIn = () => {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();
    const onSignInClicked = async () => {
        try {
            console.log ('before signIn email='+emailValue+ 'password='+passwordValue);
            await signIn(emailValue, passwordValue);
            console.log ('after signIn email='+emailValue+ 'password='+passwordValue);
            // rout to home page
            history.push('/');
            console.log ('after redirect');
        } catch (e) {
            console.log('Failed in onSignInClicked ' , e.message);
            setErrorMessage(e.message);
        }
    }
    const onSignInWithGoogleClicked = async () => {
        signInWithGoogle();
        history.push('/');
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            {errorMessage
                ? <ErrorMessage style={{
                    marginBottom: '16px',
                }}>
                    {errorMessage}
                </ErrorMessage>
                : null}
            <form >
                <FormInput
                    onChange={e => setEmailValue(e.target.value)}
                    name='email'
                    type='email'
                    value={emailValue}
                    required
                    label='email'/>
                <FormInput
                    onChange={e => setPasswordValue(e.target.value)}
                    name='password'
                    type='password'
                    value={passwordValue}
                    required
                    label='password'/>

                <div className='buttons'>
                    <CustomButton type='button' onClick={onSignInClicked}>Sign in</CustomButton>
                    <CustomButton type='button' onClick={onSignInWithGoogleClicked} isGoogleSignIn>Sign in with Google</CustomButton>
                </div>
            </form>
        </div>
    )

}

export default SignIn
