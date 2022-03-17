import React from 'react'
import {useNavigate} from 'react-router-dom'

const Cliente = ({cliente, handleEliminar}) => {

    const navigate = useNavigate()
 const {nombre, email, telefono, empresa, id}= cliente
 const handleClickVer = (id)=>{
    
      navigate(`/clientes/${id}`)
 }

  return(
    <tr className='border-b'>
        <td className='p-3'>{nombre}</td>
        <td className='p-3'>
            <p><span className='text-gray-800 uppercase font-bold'>Email:</span>{email}</p>
            <p><span className='text-gray-800 uppercase font-bold'>Tel:</span>{telefono}</p>
        </td>
        <td className='p-3'>
            {empresa}
        </td>
        <td className='p-3'>
            <button
                onClick={()=>handleClickVer(id)}
                className='bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 uppercase
                font-bold text-xs mt-3'
                type='button'
            >Ver</button>
            <button
                onClick={()=>navigate(`/clientes/editar/${id}`)}
                className='bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase
                font-bold text-xs mt-3'
                type='button'
            >Editar</button>
            <button
                onClick={()=>handleEliminar(id)}
                className='bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase
                font-bold text-xs mt-3'
                type='button'
            >Eliminar</button>
        </td>
    </tr>
)
}

export default Cliente