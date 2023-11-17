import Styled from './styles'
import NavBar from "../../components/NavBar"
import { Link } from 'wouter'
import { useEncuestas } from "../../hooks"

function Mainpage () {
    const { data: response, isLoading } = useEncuestas()

    console.log('infoencuestas: ', response);


    if(isLoading) {
        return <p>Loading...</p>
    }

    return (
        
            <Styled.Body>
                <NavBar />
                <Styled.Main>
                    <h1>Todas las encuestas</h1>
                    <Styled.Table>
                        <Styled.Client>DNI de cliente</Styled.Client>
                        <Styled.Product>Producto</Styled.Product>
                        <Styled.Subproductgas>Subproducto Gas</Styled.Subproductgas>
                        <Styled.Subproductlight>Subproducto Luz</Styled.Subproductlight>
                        <Styled.Maintenancegas>Mantenimiento Gas</Styled.Maintenancegas>
                        <Styled.Maintenancelight>Mantenimiento Luz</Styled.Maintenancelight>
                        <Styled.Estado>Estado</Styled.Estado>
                    {response?.content?.map((encuesta) => {
                            return (
                                <>
                                    <tr>
                                        <Styled.Cell>
                                            <Link href={`/update/${encuesta.id}`} key={encuesta.id}>
                                                <Styled.Anchor>
                                                    {encuesta.client_dni}
                                                </Styled.Anchor>
                                            </Link>
                                        </Styled.Cell>
                                        <Styled.Cell2>{encuesta.product}</Styled.Cell2>
                                        <Styled.Cell>{encuesta.subproduct_gas ? encuesta.subproduct_gas : <p><i>N/A</i></p>}</Styled.Cell>
                                        <Styled.Cell2>{encuesta.subproduct_light ? encuesta.subproduct_light : <p><i>N/A</i></p>}</Styled.Cell2>
                                        <Styled.Cell>{encuesta.maintenance_gas ? encuesta.maintenance_gas : <p><i>N/A</i></p>}</Styled.Cell>
                                        <Styled.Cell2>{encuesta.maintenance_light ? encuesta.maintenance_light : <p><i>N/A</i></p>}</Styled.Cell2>
                                        <Styled.Cell>{encuesta.estado}</Styled.Cell>
                                    </tr>
                                </>
                            )
                            
                    }
                        )} 
                    </Styled.Table>
                </Styled.Main>
            </Styled.Body>
        
    )
}

export default Mainpage