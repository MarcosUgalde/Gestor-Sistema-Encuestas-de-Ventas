import NavBar from "../../components/NavBar"

function Create() {
    return (
        <>
            <NavBar />
            <form>
                <h1>Nueva encuesta</h1>
                <label htmlFor="client_dni">Inserte su DNI</label>
                <input type="text" name="client_dni" id="client_dni" />
                <label htmlFor="product">Seleccione un producto</label>
                <select name="product" id="product">
                    <option value="Luz">LUZ</option>
                    <option value="Gas">GAS</option>
                    <option value="Dual">DUAL</option>
                </select>
                <label htmlFor="subproduct">Elija una opción</label>
                <select name="subproduct" id="subproduct">
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                <label htmlFor="mantenimiento">Mantenimiento</label>
                <select name="" id=""></select>
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