import React, { useState } from 'react'
import { API } from '../config/api';
import img from '../img/proof.png'
import { UpdatingL } from './UpdatingL';

export const UpdateL = () => {
    const [form, setForm] = useState({
      title: '',
      description: ''
    });
    
    
    const changeL = (e) => {
      setForm({
        ...form,
        [e.target.name] : e.target.value
      })
    }
  
    const submitL = async (e) => {
      e.preventDefault()
  
      const settings = {
        headers: {
          "Content-Type" : "application/json"
        }
      }
  
      const dataSet = JSON.stringify(form)
  
  
      const response = await API.post('/link', dataSet, settings)
      console.log(response)
    }
  
  
    return (
      <div className='bg-secondary w-100 bg-opacity-25 rounded template mt-5 pt-3 px-5'>
        <div>
          <h3 className='position-absolute my-2 top-0'>Template</h3>
        </div>
            <form onSubmit={submitL}>
            <img className='position-absolute h-75 end-0 my-5 pt-5 me-5' src={img} alt="Phone" />
                <h3>Create Link</h3>
              <div className='bg-light w-50'>
                <div className='d-grid mx-2'>
                  <p className='pt-3'>Title</p>
                  <input className='p-1 mx-2 border-start-0 border-end-0 border-top-0 border-dark border-1 my-2' type="text" name="title" onChange={changeL} />
                  <p className='pt-3'>Description</p>
                  <input className='p-1 mx-2 border-start-0 border-end-0 border-top-0 border-dark border-1 my-2' type="text" name="description" onChange={changeL} />
                </div>
              <button className='btn btn-warning rounded done' type="submit">Publish Link</button>
              </div>
            </form>
            <UpdatingL />
      </div>
    )
}
