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
    border-radius: 15px;
    width: 30vw;
    height: 60vh;
    margin-top: 15vh;
    margin-left: 33vw;
    box-shadow: 10px 10px 11px 2px rgba(0,0,0,0.75);
`

export default {
    Body,
    Form
}