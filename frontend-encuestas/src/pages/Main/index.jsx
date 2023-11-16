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
        <>
            <NavBar />
            <h1>Encuestas</h1>
            <Styled.List>
            {response?.content?.map((encuesta) => (
                    <Link href={`/update/${encuesta.id}`} key={encuesta.id}>
                        <a>
                            {encuesta.product}
                        </a>
                    </Link>
                    
                )
                )} 
            </Styled.List>
        </>
    )
}

export default Mainpage