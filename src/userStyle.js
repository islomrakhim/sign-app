import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
`

export const Output = styled.div`
    width: 450px;
    border-bottom: 1px solid lightgrey;
    padding: 10px;

    h4 {
        font-family: sans-serif;
        font-size: 17px;
        font-weight: 300;
        color: ${({ $darkMode }) => ($darkMode ? '#f2f2f2' : '#111')}
    }
`
