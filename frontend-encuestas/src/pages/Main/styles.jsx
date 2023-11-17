import { styled } from 'styled-components'

const Body = styled.section`
    background-color: #C9FFE2;
    min-height: 98vh;
`
const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Client = styled.th`
    width: 150px;
    height: 2.5em;
    background-color: #7DD181;
    padding-top: 1.2em;
`

const Product = styled.th`
    width: 100px;
    background-color: #96E8BC;
`
const Subproductgas = styled.th`
    width: 130px;
    background-color: #7DD181;
`

const Subproductlight = styled.th`
    background-color: #96E8BC;
`

const Maintenancegas = styled.th`
    background-color: #7DD181;
`

const Maintenancelight = styled.th`
    background-color: #96E8BC;
`

const Estado = styled.th`
    width: 150px;
    height: 2.5em;
    background-color: #7DD181;
    padding-top: 1.2em;
`

const Table = styled.section`
    box-shadow: 1px 12px 8px -4px rgba(0,0,0,0.75);
    width: fit-content;
`
const Cell = styled.td`
    height: 2.0em;
    background-color: #7DD181;
    padding: 10px;
`

const Cell2 = styled.td`
    background-color: #96E8BC;
    padding: 10px;
`

const Anchor = styled.a`
    color: #205B56;
    font-size: 1.3em;
    margin-top: 8px;
    text-decoration: none;
`

export default {
    Body,
    Main,
    Table,
    Client,
    Product,
    Subproductgas,
    Subproductlight,
    Maintenancegas,
    Maintenancelight,
    Estado,
    Cell,
    Cell2,
    Anchor
}