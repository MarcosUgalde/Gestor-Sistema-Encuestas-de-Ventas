import Styled from './styles'
import NavBar from "../../components/NavBar"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useDelete, useId, useOneEncuesta, useUpdate, useUser } from "../../hooks"
import DeleteModal from "../../components/DeleteModal"

function Update() {
const { register, handleSubmit } = useForm()
const id = useId()
const encuesta = useOneEncuesta({ encuestaId: id})

const authorized = useUser().data.access
const [isDeleteModalVisible, setDeleteModalVisible] = useState(false)
const [encuestaIdToDelete, setEncuestaIdToDelete] = useState(null)

const doUpdate = useUpdate()
const doDelete = useDelete()

const openDeleteModal = (id) => {
    setEncuestaIdToDelete(id)
    setDeleteModalVisible(true)
    return id
}

const handleDelete = () => {
    if(!authorized) return alert('¡No estás autorizado para realizar esta acción!')
    if(encuestaIdToDelete) {
        console.log('Deleting product with id: ', encuestaIdToDelete)
        doDelete(encuestaIdToDelete)
    }
    setDeleteModalVisible(false)
}

const [selectedProduct, setSelectedProduct] = useState('')
const [lightOptions, setLightOptions] = useState(selectedProduct === "Luz" || selectedProduct === "Dual")
const [gasOptions, setGasOptions] = useState(selectedProduct === "Gas" || selectedProduct === "Dual")

const handleProductSelect = (selectedValue) => {
    setSelectedProduct(selectedValue);
    setLightOptions(selectedValue === 'Luz' || selectedValue === 'Dual');
    setGasOptions(selectedValue === 'Gas' || selectedValue === 'Dual');
  };

    return (
        <Styled.Body>
            <NavBar />
            <Styled.Form onSubmit={handleSubmit(doUpdate)}>
                <h1>Modificar encuesta del cliente: <i>{encuesta?.data?.content[0]?.client_dni}</i></h1>
                <input type="hidden" name="encuestaId" id="encuestaId" {...register('encuestaId', {required: true})} value={id}  />
                <label htmlFor="client_dni">Inserte su DNI</label>
                <Styled.Input type="text" name="client_dni" id="client_dni" {...register('client_dni', {required: true})} defaultValue={encuesta?.data?.content[0]?.client_dni} />
                <label htmlFor="product">Seleccione un producto</label>
                <Styled.Select name="product" id="product" {...register('product', {required: true})} onChange={(e) => {handleProductSelect(e.target.value);}} defaultValue={encuesta?.data?.content[0]?.product} >
                    <option></option>
                    <option value="Luz">LUZ</option>
                    <option value="Gas">GAS</option>
                    <option value="Dual">DUAL</option>
                </Styled.Select>
                {lightOptions && (
                    <>
                        <Styled.Field>
                            <label htmlFor="subproduct">Elija una opción para subproducto LUZ</label>
                            <Styled.Select name="subproduct" id="subproduct" {...register('subproduct_light', {required: true})}>
                                <option></option>
                                <option value="Tarifa plana">TARIFA PLANA</option>
                                <option value="Tarifa por uso">TARIFA POR USO</option>
                            </Styled.Select>
                        </Styled.Field>

                        <Styled.Field>
                            <label htmlFor="mantenimiento">¿Mantenimiento para LUZ?</label>
                                <Styled.Select name="mantenimiento" id="mantenimiento" {...register('maintenance_light', { required: true })}>
                                    <option></option>
                                    <option value="SÍ">SÍ</option>
                                    <option value="NO">NO</option>
                                </Styled.Select>
                        </Styled.Field>
                    </>
                )}

                {gasOptions && (
                    <>
                        <Styled.Field>
                            <label htmlFor="subproduct">Elija una opción para subproducto GAS</label>
                            <Styled.Select name="subproduct" id="subproduct" {...register('subproduct_gas', {required: true})}>
                                <option></option>
                                <option value="Plena">PLENA</option>
                                <option value="Total">TOTAL</option>
                            </Styled.Select>
                        </Styled.Field>

                        <Styled.Field>
                            <label htmlFor="mantenimiento">¿Mantenimiento para GAS?</label>
                                <Styled.Select name="mantenimiento" id="mantenimiento" {...register('maintenance_gas', { required: true })}>
                                    <option></option>
                                    <option value="SÍ">SÍ</option>
                                    <option value="NO">NO</option>
                                </Styled.Select>
                        </Styled.Field>
                    </>
                )}

                <label htmlFor="estado">Estado</label>
                <Styled.Select name="estado" id="estado" {...register('estado', { required: true })}>
                    <option></option>
                    <option value="VENDIDO">VENDIDO</option>
                    <option value="EN PROCESO">EN PROCESO</option>
                    <option value="NO VENDIDO">NO VENDIDO</option>
                    <option value="NO VÁLIDO">NO VÁLIDO</option>
                </Styled.Select>
                <Styled.Buttons>
                    {authorized ? (
                        <Styled.Submit type="submit" value="Guardar cambios" />
                    ) : (
                        <p>You are not authorized to save changes.</p>
                    )}
                    <Styled.Delete onClick={() =>openDeleteModal(id)}>Borrar registro</Styled.Delete>
                </Styled.Buttons>
            </Styled.Form>
            {isDeleteModalVisible && (
                <DeleteModal productId={encuestaIdToDelete} isVisible={isDeleteModalVisible} onClose={() => setDeleteModalVisible(false)} onDelete={handleDelete} />
            )}
        </Styled.Body>
    )
}

export default Update