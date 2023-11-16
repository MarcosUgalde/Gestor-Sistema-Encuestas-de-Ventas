import { styled } from 'styled-components'

const Nav = styled.nav`
    height: 5vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.2rem;
    gap: 1.1em;
    background-color: #22333b;
`

const Anchor = styled.a`
    ${({ isActive }) => `
        color: ${isActive ? '#7DD181' : '#4DA1A9'};
        text-decoration: ${!isActive && 'none'};
        transition: 0.4s
    `}
`
const Userlogout = styled.section`
    display: flex;
    flex-direction: column;
`

const User = styled.span`
    color: red;
    cursor: pointer;
    position: relative;
`

const Dropdown = styled.ul`
    position: absolute;
    background-color: #fff;
    list-style: none;
    padding: 0;
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 10;

    li {
    cursor: pointer;
    color: black;

    &:hover {
        color: red;
        }
    }
`

export default {
    Nav,
    Anchor,
    Userlogout,
    User,
    Dropdown
}