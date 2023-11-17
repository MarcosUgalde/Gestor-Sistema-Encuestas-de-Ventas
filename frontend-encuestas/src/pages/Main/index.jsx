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
                <h1>Todas las encuestas</h1>
                <Styled.Table>
                    <th>DNI de cliente</th>
                    <th>Producto</th>
                    <th>Subproducto Gas</th>
                    <th>Subproducto Luz</th>
                    <th>Mantenimiento Gas</th>
                    <th>Mantenimiento Luz</th>
                    <th>Estado</th>
                {response?.content?.map((encuesta) => {
                        return (
                            <>
                                <tr>
                                    <td>
                                        <Link href={`/update/${encuesta.id}`} key={encuesta.id}>
                                            <Styled.Anchor>
                                                {encuesta.client_dni}
                                            </Styled.Anchor>
                                        </Link>
                                    </td>
                                    <td>{encuesta.product}</td>
                                    <td>{encuesta.subproduct_gas}</td>
                                    <td>{encuesta.subproduct_light}</td>
                                    <td>{encuesta.maintenance_gas}</td>
                                    <td>{encuesta.maintenance_light}</td>
                                    <td>{encuesta.estado}</td>
                                </tr>
                            </>
                        )
                        
                }
                    )} 
                </Styled.Table>
            </Styled.Body>
        
    )
}

export default Mainpage