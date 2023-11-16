import NavBar from "../../components/NavBar"
import { subproduct, mantenimiento } from '../../utils'
import { useState } from "react"

function Create() {
console.log(subproduct) 
console.log(mantenimiento)
const [selectedProduct, setSelectedProduct] = useState('')
const [showTarifaSubproduct, setShowTarifaSubproduct] = useState(false);
const [showGasSubproduct, setShowGasSubproduct] = useState(false);
const [showMantenimiento, setShowMantenimiento] = useState(false);
const [showMantenimientoLuz, setShowMantenimientoLuz] = useState(false);
const [showMantenimientoGas, setShowMantenimientoGas] = useState(false);

const handleProductSelect = (selectedValue) => {
    setSelectedProduct(selectedValue);
    setShowTarifaSubproduct(selectedValue === 'Luz' || selectedValue === 'Dual');
    setShowGasSubproduct(selectedValue === 'Gas' || selectedValue === 'Dual');
    setShowMantenimiento(selectedValue === 'Luz' || selectedValue === 'Gas');
    setShowMantenimientoLuz(selectedValue === 'Dual');
    setShowMantenimientoGas(selectedValue === 'Dual');
  };

    return (
        <>
            <NavBar />
            <form>
                <h1>Nueva encuesta</h1>
                <label htmlFor="client_dni">Inserte su DNI</label>
                <input type="text" name="client_dni" id="client_dni" />
                <label htmlFor="product">Seleccione un producto</label>
                <select name="product" id="product" onChange={(e) => handleProductSelect(e.target.value)}>
                    <option value="Luz">LUZ</option>
                    <option value="Gas">GAS</option>
                    <option value="Dual">DUAL</option>
                </select>
                {showTarifaSubproduct && (
                    <div>
                    <label htmlFor="subproduct">Elija una opción para subproducto LUZ</label>
                    <select name="subproduct" id="subproduct">
                        <option value="Tarifa plana">TARIFA PLANA</option>
                        <option value="Tarifa por uso">TARIFA POR USO</option>
                    </select>
                    </div>
                )}

                {showGasSubproduct && (
                    <div>
                        <label htmlFor="subproduct">Elija una opción para subproducto GAS</label>
                        <select name="subproduct" id="subproduct">
                            <option value="Plana">PLENA</option>
                            <option value="Total">TOTAL</option>
                        </select>
                    </div>
                )}
                    {showMantenimiento && (
                        <div>
                            <label htmlFor="mantenimiento">Mantenimiento</label>
                    
                                <select name="mantenimiento" id="mantenimiento">
                                    <option value="SÍ">SÍ</option>
                                    <option value="NO">NO</option>
                                </select>
                        </div>
                    )}
                    {showMantenimientoLuz && (
                        <div>
                            <label htmlFor="mantenimiento">Mantenimientos LUZ</label>
                                <select name="mantenimiento" id="mantenimiento">
                                    <option value="SÍ">SÍ</option>
                                    <option value="NO">NO</option>
                                </select>
                        </div>
                    )}
                    {showMantenimientoGas && (
                        <div>
                            <label htmlFor="mantenimiento">Mantenimientos GAS</label>
                                <select name="mantenimiento" id="mantenimiento">
                                    <option value="SÍ">SÍ</option>
                                    <option value="NO">NO</option>
                                </select>
                        </div>
                    )}

                <label htmlFor="estado">Estado</label>
                <select name="" id="">
                    <option value="">VENDIDO</option>
                    <option value="">EN PROCESO</option>
                    <option value="">NO VENDIDO</option>
                    <option value="">NO VÁLIDO</option>
                </select>
            </form>
        </>
    )
}

export default Create