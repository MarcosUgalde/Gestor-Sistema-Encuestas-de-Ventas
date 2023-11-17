import NavBar from "../../components/NavBar"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useDelete, useId, useOneEncuesta, useUpdate, useUser } from "../../hooks"
import DeleteModal from "../../components/DeleteModal"

function Update() {
const { register, handleSubmit } = useForm()
const id = useId()
const encuesta = useOneEncuesta({ encuestaId: id})
console.log(encuesta)

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
// const [showTarifaSubproduct, setShowTarifaSubproduct] = useState(false);
// const [showGasSubproduct, setShowGasSubproduct] = useState(false);
// const [showMantenimiento, setShowMantenimiento] = useState(false);
// const [showMantenimientoLuz, setShowMantenimientoLuz] = useState(false);
// const [showMantenimientoGas, setShowMantenimientoGas] = useState(false);

const handleProductSelect = (selectedValue) => {
    setSelectedProduct(selectedValue);
    setLightOptions(selectedValue === 'Luz' || selectedValue === 'Dual');
    setGasOptions(selectedValue === 'Gas' || selectedValue === 'Dual');
    // setShowTarifaSubproduct(selectedValue === 'Luz' || selectedValue === 'Dual');
    // setShowGasSubproduct(selectedValue === 'Gas' || selectedValue === 'Dual');
    // setShowMantenimiento(selectedValue === 'Luz' || selectedValue === 'Gas');
    // setShowMantenimientoLuz(selectedValue === 'Dual');
    // setShowMantenimientoGas(selectedValue === 'Dual');
  };

    return (
        <>
            <NavBar />
            <form onSubmit={handleSubmit(doUpdate)}>
                <h1>Modificar encuesta {id}</h1>
                <input type="hidden" name="encuestaId" id="encuestaId" {...register('encuestaId', {required: true})} value={id}  />
                <label htmlFor="client_dni">Inserte su DNI</label>
                <input type="text" name="client_dni" id="client_dni" {...register('client_dni', {required: true})} defaultValue={encuesta?.data?.content[0]?.client_dni} />
                <label htmlFor="product">Seleccione un producto</label>
                <select name="product" id="product" {...register('product', {required: true})} onChange={(e) => {handleProductSelect(e.target.value);}} defaultValue={encuesta?.data?.content[0]?.product} >
                    <option value="Luz">LUZ</option>
                    <option value="Gas">GAS</option>
                    <option value="Dual">DUAL</option>
                </select>
                {lightOptions && (
                    // <div>
                    // <label htmlFor="subproduct">Elija una opción para subproducto LUZ</label>
                    // <select name="subproduct" id="subproduct" {...register('subproduct', {required: true})}>
                    //     <option value="Tarifa plana">TARIFA PLANA</option>
                    //     <option value="Tarifa por uso">TARIFA POR USO</option>
                    // </select>
                    // </div>
                    <>
                        <div>
                            <label htmlFor="subproduct">Elija una opción para subproducto LUZ</label>
                            <select name="subproduct" id="subproduct" {...register('subproduct_light', {required: true})}>
                                <option value="Tarifa plana">TARIFA PLANA</option>
                                <option value="Tarifa por uso">TARIFA POR USO</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="mantenimiento">Mantenimientos LUZ</label>
                                <select name="mantenimiento" id="mantenimiento" {...register('maintenance_light', { required: true })}>
                                    <option value="SÍ">SÍ</option>
                                    <option value="NO">NO</option>
                                </select>
                        </div>
                    </>
                )}

                {gasOptions && (
                    // <div>
                    //     <label htmlFor="subproduct">Elija una opción para subproducto GAS</label>
                    //     <select name="subproduct" id="subproduct" {...register('subproduct', {required: true})}>
                    //         <option value="Plena">PLENA</option>
                    //         <option value="Total">TOTAL</option>
                    //     </select>
                    // </div>
                    <>
                        <div>
                            <label htmlFor="subproduct">Elija una opción para subproducto GAS</label>
                            <select name="subproduct" id="subproduct" {...register('subproduct_gas', {required: true})}>
                                <option value="Plena">PLENA</option>
                                <option value="Total">TOTAL</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="mantenimiento">Mantenimientos GAS</label>
                                <select name="mantenimiento" id="mantenimiento" {...register('maintenance_gas', { required: true })}>
                                    <option value="SÍ">SÍ</option>
                                    <option value="NO">NO</option>
                                </select>
                        </div>
                    </>
                )}
                    {/* {showMantenimiento && (
                        <div>
                            <label htmlFor="mantenimiento">Mantenimiento</label>
                    
                                <select name="mantenimiento" id="mantenimiento" {...register('mantenimiento', { required: true })} >
                                    <option value="SÍ">SÍ</option>
                                    <option value="NO">NO</option>
                                </select>
                        </div>
                    )}
                    {showMantenimientoLuz && (
                        <div>
                            <label htmlFor="mantenimiento">Mantenimientos LUZ</label>
                                <select name="mantenimiento" id="mantenimiento" {...register('mantenimiento', { required: true })}>
                                    <option value="SÍ">SÍ</option>
                                    <option value="NO">NO</option>
                                </select>
                        </div>
                    )}
                    {showMantenimientoGas && (
                        <div>
                            <label htmlFor="mantenimiento">Mantenimientos GAS</label>
                                <select name="mantenimiento" id="mantenimiento" {...register('mantenimiento', { required: true })}>
                                    <option value="SÍ">SÍ</option>
                                    <option value="NO">NO</option>
                                </select>
                        </div>
                    )} */}

                <label htmlFor="estado">Estado</label>
                <select name="estado" id="estado" {...register('estado', { required: true })}>
                    <option value="VENDIDO">VENDIDO</option>
                    <option value="EN PROCESO">EN PROCESO</option>
                    <option value="NO VENDIDO">NO VENDIDO</option>
                    <option value="NO VÁLIDO">NO VÁLIDO</option>
                </select>
                {authorized ? (
                    <input type="submit" value="Guardar cambios" />
                ) : (
                    <p>You are not authorized to save changes.</p>
                )}
                <button onClick={() =>openDeleteModal(id)}>Borrar registro</button>
            </form>
            {isDeleteModalVisible && (
                <DeleteModal productId={encuestaIdToDelete} isVisible={isDeleteModalVisible} onClose={() => setDeleteModalVisible(false)} onDelete={handleDelete} />
            )}
        </>
    )
}

export default Update