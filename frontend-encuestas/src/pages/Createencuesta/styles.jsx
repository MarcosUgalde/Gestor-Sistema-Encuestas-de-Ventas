import {styled} from 'styled-components'

const Body = styled.section`
    background-color: #7DD181; 
    height: 97vh;
    width: 99vw;
`

const Form = styled.form`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 15px;
    width: 30vw;
    height: 75vh;
    margin-top: 10vh;
    margin-left: 33vw;
    box-shadow: 10px 10px 11px 2px rgba(0,0,0,0.75);
`

const Field = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 0.4em;
    height: fit-content;
`

const Select = styled.select`
    width: 135px;
    border-radius: 10px;
`

const Input = styled.input`
    border-radius: 10px;
`

const Submit = styled.input`
    border-radius: 10px;
    border: none;
    background-color: #C9FFE2;
    height: 1.5em;
    width: 80px;
`

export default {
    Body,
    Form,
    Field,
    Select,
    Input,
    Submit
}