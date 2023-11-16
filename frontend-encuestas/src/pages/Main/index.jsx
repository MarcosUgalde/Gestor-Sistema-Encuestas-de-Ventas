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
                <Styled.List>
                {response?.content?.map((encuesta) => (
                        <Link href={`/update/${encuesta.id}`} key={encuesta.id}>
                            <Styled.Anchor>
                                {encuesta.client_dni}
                            </Styled.Anchor>
                        </Link>
                        
                    )
                    )} 
                </Styled.List>
            </Styled.Body>
        
    )
}

export default Mainpage