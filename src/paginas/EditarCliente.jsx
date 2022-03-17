import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import Formulario from "../components/Formulario"
const EditarCliente = () => {
  const [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(true)
const [error, setError] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        const obtenerClienteAPI = async () => {

            try {
                const url = `http://localhost:4000/clientes/${id}`
       
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                if(respuesta.status===404){
                  setError(true)
                  
                }else{
                  setError(false)
                }
                setCliente(resultado)
            } catch (error) {
                console.log(error)
            }
            setCargando(!cargando)
            
            
        }
        obtenerClienteAPI()
    }, [])
  
  return (
    <>
        <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
        <p className='mt-3' >Utiliza este formulario para editar datos de un cliente</p>
       {error ? (<h2> No existe Cliente con el id: {id} </h2>)
       :(
        <Formulario 
          cliente={cliente}
          cargando={cargando}
        />
       )}
       
       
    </>
  )
}

export default EditarCliente