import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: ${({ $darkMode }) => ($darkMode ? "#111" : "white")};
`

export const MainForm = styled.form`
    display: flex;
    width: 100%;
    height: 100%;
`

export const MainFormLeft = styled.div`
    display: flex;
    flex:1;
`

export const MainImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const MainFormRight = styled(MainFormLeft)`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    p{
        font-family: sans-serif;
        font-weight: 600;
        font-size:32px;
        width: 350px;
        line-height: 40px;
        color: ${({ $darkMode }) => ($darkMode ? "#f2f2f2" : "#111")};
    }
`

export const FormBox = styled.div`
    display: flex;
    width: 350px;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 18px;
   
`

export const EmailInput = styled.input`
    width: 100%;
    height: 45px;
    padding: 15px;
    border: 1px solid lightgrey;
    border-radius: 5px;
    background-color: ${({ $darkMode }) => ($darkMode ? "transparent" : "white")};
    color: ${({ $darkMode }) => ($darkMode ? '#f2f2f2' : '#111')};;
`

export const PassInput = styled(EmailInput)`
`

export const NameInput = styled(EmailInput)`
`
export const SurnameInput = styled(EmailInput)`
`

export const SubmitButton = styled.button`
    width: 200px;
    height: 45px;
    border: none;
    background-color: dodgerblue;
    color: white;
    border-radius: 5px;
    margin-top: 20px;
`

export const IconWrap = styled.div`
    display: flex;
    width: 350px;
    justify-content: start;
`

export const ModeButton = styled.button`
    background-color: transparent;
    border:none;
    border-radius: 50px;
    width: 35px;
    height: 35px;
    cursor: pointer;
`

export const ModeIcon = styled.img`
    height: 30px;
`