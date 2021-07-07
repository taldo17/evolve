import React, {useState} from 'react'

import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button2";
import {signUp} from "../../firebase/auth";
import {createUserProfileDocument, getGroupScores} from "../../firebase/database";
import './sign-up.scss'
import {useHistory} from "react-router-dom";
import {ErrorMessage, UploadSingleFileButton} from "../../ui";
import 'firebase/auth'

export const SignUp = () => {
    const [displayName, setDisplayName] = useState('');
    const [firstLevelGroup, setFirstLevelGroup] = useState('');
    const [secondLevelGroup, setSecondLevelGroup] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmedPasswordValue, setConfirmedPasswordValue] = useState('');
    const [profilePictureFile, setProfilePictureFile] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const history = useHistory();
    const onSignUpClicked = async () => {
        if (passwordValue !== confirmedPasswordValue) {
            alert("Password don't match")
            return;
        }
        const firstGroup = await getGroupScores(firstLevelGroup)
        if (!firstGroup) {
            alert("First Group doesn't exists")
            return;
        }
        const secondGroup = await getGroupScores(secondLevelGroup)
        if (!secondGroup) {
            alert("Second Group doesn't exists")
            return;
        }
        try {
            const {user} = await signUp(emailValue, passwordValue);
            const evolveUser ={
                displayName: displayName,
                email: user.email,
                firstLevelGroup,
                secondLevelGroup
            }
            await createUserProfileDocument(user, evolveUser, profilePictureFile);
            // rout to home page
            history.push('/');
        } catch (e) {
            console.error(e.message);
            setErrorMessage(e.message);
        }
    }
    const handleFileSelect = file => {
        setProfilePictureFile(file);
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
                    type='text'
                    name='firstLevelGroup'
                    value={firstLevelGroup}
                    onChange={e => setFirstLevelGroup(e.target.value.toUpperCase())}
                    label='First Level Group'
                    required>
                </FormInput>
                <FormInput
                    type='text'
                    name='secondLevelGroup'
                    value={secondLevelGroup}
                    onChange={e => setSecondLevelGroup(e.target.value.toUpperCase())}
                    label='Second Level Group'
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
                <UploadSingleFileButton
                    onFileUploaded={handleFileSelect}/>
                {/*<CustomUploadButton*/}
                {/*    onFileUploaded={handleFileSelect}>*/}
                {/*    UPLOAD PROFILE IMAGE*/}
                {/*</CustomUploadButton>*/}
                <CustomButton type='button' onClick={onSignUpClicked}>SIGN UP</CustomButton>

            </form>
        </div>

    )

}
export default SignUp
