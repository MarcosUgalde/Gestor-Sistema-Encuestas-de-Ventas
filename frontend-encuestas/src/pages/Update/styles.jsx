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
const Buttons = styled.section`
    display: flex;
    justify-content: space-around;
    width: 30vw;
`

const Submit = styled.input`
    border-radius: 10px;
    border: none;
    height: 1.5em;
    width: 120px;
    color: white;
    background-color: green;

    &:hover{
        color: green;
        background-color: white;
        transition: 0.4s;
    }
`

const Delete = styled.button`
    width: 120px;
    background-color: red;
    color: white;
    border-radius: 10px;
    border: none;

    &:hover{
        color: red;
        background-color: white;
        transition: 0.4s;
    }
`

export default {
    Body,
    Form,
    Field,
    Select,
    Input,
    Buttons,
    Submit,
    Delete
}