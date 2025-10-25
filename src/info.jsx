import React from 'react'
import bcimage from '../src/assets/tahoe-light.jpeg'

import {
    MainContainer,
    MainForm,
    MainFormLeft,
    MainFormRight,
    MainImage
} from './signStyle'
import {
    Container,
    Output
} from './userStyle'

const InfoComponent = ({ user, darkMode }) => {
    return (
        <>
            <MainContainer $darkMode={darkMode}>
                <MainForm>
                    <MainFormLeft>
                        <MainImage src={bcimage}></MainImage>
                    </MainFormLeft>
                    <MainFormRight>
                        <Container><p $darkMode={darkMode}>Hello {user.name ? user.name : "Guest"}! Your email and password are:</p>
                            <Output $darkMode={darkMode}><h4>Email: {user.email}</h4> </Output>
                            <Output $darkMode={darkMode}><h4>Password: {user.password} </h4> </Output>
                        </Container>
                    </MainFormRight>

                </MainForm>
            </MainContainer>
        </>
    )
}

export default InfoComponent