import Styled from './styles' 

function DeleteModal({ onClose, onDelete, isVisible }) {
    return (
        <Styled.Modal style={{ display: isVisible ? 'block' : 'none' }}>
            <Styled.Text>
                <h2>Estás a punto de elimianr una encuesta</h2>
                <p>¿Estás seguro de que quieres eliminar esta encuesta?</p>
                <Styled.Buttons>
                    <Styled.Delete onClick={onDelete}>Delete</Styled.Delete>
                    <Styled.Cancel onClick={onClose}>Cancel</Styled.Cancel>
                </Styled.Buttons>
            </Styled.Text>
        </Styled.Modal>
    )
}

export default DeleteModal