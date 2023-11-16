import { styled } from 'styled-components'

const Body = styled.section`
    background-color: #C9FFE2;
    min-height: 98vh;
`

const List = styled.section`
    display: flex;
    flex-direction: column;
`

const Anchor = styled.a`
    color: #205B56;
    font-size: 1.3em;
    margin-top: 8px;
    text-decoration: none;
`

export default {
    Body,
    List,
    Anchor
}