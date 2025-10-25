import bcLightImage from '../src/assets/tahoe-light.jpeg'
import lightIcon from '../src/assets/light.svg'
import darkIcon from '../src/assets/dark.svg'
import bcDarkImage from '../src/assets/tahoe-dark.jpeg'
import { Link } from 'react-router-dom';
import {
    EmailInput,
    FormBox,
    IconWrap,
    MainContainer,
    MainForm,
    MainFormLeft,
    MainFormRight,
    MainImage,
    ModeButton,
    ModeIcon,
    NameInput,
    PassInput,
    SubmitButton,
    SurnameInput
} from './signStyle'

const SignComponent = ({ user, setUser, darkMode, setDarkMode }) => {
    const hero = darkMode ? darkIcon : lightIcon;
    const mainhero = darkMode ? bcDarkImage : bcLightImage;
    return (
        <>
            <MainContainer $darkMode={darkMode}>
                <MainForm>
                    <MainFormLeft>
                        <MainImage src={mainhero}></MainImage>
                    </MainFormLeft>
                    <MainFormRight $darkMode={darkMode}>
                        <IconWrap>
                            <ModeButton type="button" onClick={() => setDarkMode(!darkMode)}>
                                <ModeIcon src={hero} />
                            </ModeButton>
                        </IconWrap>
                        <p $darkMode={darkMode}>Please enter your information to proceed</p>
                        <FormBox>
                            <NameInput
                                type="text"
                                placeholder="Full Name"
                                value={user.name}
                                onChange={(e) => setUser({ ...user, name: e.target.value })}
                                $darkMode={darkMode} />

                            <EmailInput
                                type="email"
                                placeholder='Email'
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                                $darkMode={darkMode} />
                            <PassInput
                                type="password"
                                placeholder='Password'
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                                $darkMode={darkMode} />
                            <Link to={'/user'}><SubmitButton>Sign up</SubmitButton></Link>
                        </FormBox>
                    </MainFormRight>

                </MainForm>
            </MainContainer>
        </>
    )
}

export default SignComponent