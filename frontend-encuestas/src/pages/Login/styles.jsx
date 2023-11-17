import { styled } from 'styled-components'

const Body = styled.section`
    height: 100vh;
    width: 100vw;
    font-family: Arial, Helvetica, sans-serif;
    
    @media screen and (max-width: 640px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media screen and (min-width: 641px) {
        display: flex;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    
    @media screen and (max-width: 640px) {
        height: 70vh;
        width: 100vw;
    }

    @media screen and (min-width: 641px) {
          width: 70vw;
    }
`

const Field = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Footer = styled.footer`
    background: rgb(0,230,154);
    background: linear-gradient(135deg, rgba(0,230,154,1) 0%, rgba(0,255,111,1) 50%, rgba(25,255,183,1) 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 640px) {
        height: 30vh;
        width: 100vw;
    }

    @media screen and (min-width: 641px) {
        width: 30vw;
    }
`

const Input = styled.input`
    border-radius: 10px;
    border: 1px solid;
    height: 1.5em;
    box-shadow: 1px 5px 8px -4px rgba(0,0,0,0.75);
    `

const Submit = styled.input`
    border-radius: 50px;
    background-color: #96E8BC;
    
    &:hover{
        font-size: 1.1rem;
        transition: 0.5s;
        color: white;
    }
    @media screen and (max-width: 640px) {
        width: 100px;
    }

    @media screen and (min-width: 641px) {
        width: 150px;
    }
`

const Signup = styled.section`
    background-color: white;
    border-radius: 10px;
    box-shadow: 1px 5px 8px -4px rgba(0,0,0,0.75);
    height: 1.5rem;
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: #FEE440;
    }
`

const Anchor = styled.a`
    color: black;
    text-decoration: none;

    &:hover{
        color: #31572C;
    }
`

export default {
    Body,
    Form,
    Field,
    Footer,
    Input,
    Submit,
    Signup,
    Anchor
}