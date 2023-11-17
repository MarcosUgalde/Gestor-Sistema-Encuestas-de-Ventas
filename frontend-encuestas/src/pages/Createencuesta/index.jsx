import Styled from './styles'
import NavBar from "../../components/NavBar"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useInsertion } from "../../hooks"

function Create() {
const { register, handleSubmit } = useForm()
const doInsertion = useInsertion()

const [selectedProduct, setSelectedProduct] = useState('')
const [lightOptions, setLightOptions] = useState('')
const [gasOptions, setGasOptions] = useState('')

const handleProductSelect = (selectedValue) => {
    setSelectedProduct(selectedValue);
    setLightOptions(selectedValue === 'Luz' || selectedValue === 'Dual');
    setGasOptions(selectedValue === 'Gas' || selectedValue === 'Dual');
  };

    return (
        <Styled.Body>
            <NavBar />
            <Styled.Form onSubmit={handleSubmit(doInsertion)}>
                <h1>Nueva encuesta</h1>
                <label htmlFor="client_dni">Inserte su DNI</label>
                <Styled.Input type="text" name="client_dni" id="client_dni" {...register('client_dni', {required: true})} />
                <label htmlFor="product">Seleccione un producto</label>
                <Styled.Select name="product" id="product" {...register('product', {required: true})} onChange={(e) => {handleProductSelect(e.target.value);}}  >
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
                        <label htmlFor="mantenimiento">¿Desea tener mantenimientos para LUZ?</label>
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
                            <label htmlFor="mantenimiento">¿Desea tener mantenimiento para GAS?</label>
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
                <Styled.Submit type="submit" />
            </Styled.Form>
        </Styled.Body>
    )
}

export default Create