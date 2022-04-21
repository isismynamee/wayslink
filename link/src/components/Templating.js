import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../img/proof.png'

export const Templating = () => {
    let nav = useNavigate()
    const form = () =>{
        nav('/template-form')
    }
  return (
    <div className='mt-3'>
        <h3>Template</h3>
        <div className='p-5 mt-5 rounded bg-secondary bg-opacity-25'>
            <div className='h-75 w-75 pb-5'>
                <img onClick={form} className='w-25 cursor' src={img} alt="Template LinkTree" />
            </div>
        </div>
    </div>
  )
}
