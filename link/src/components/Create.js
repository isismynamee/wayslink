import React, { useState } from 'react'
import img from '../img/proof.png'
import { API } from '../config/api'
import { Generate } from './Generate'

export const Create = () => {
  const [preview, setPreview] = useState(null)
  const [form, setForm] = useState({
    title: '',
    description: '',
    image: ''
  });
  // const {title, url, image} = form

  const changeC = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value
    })

    if(e.target.type === "file"){
      let url= URL.createObjectURL(e.target.files[0])
      setPreview(url)
    }
  }
  const submitC = async (e) => {
    e.preventDefault()
    
    const settings = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }

    const dataSet = new FormData();
    dataSet.set("title", form.title)
    dataSet.set("description", form.description)
    dataSet.set("image", form.image[0], form.image[0].name)

    const response = await API.post('/creative', dataSet, settings)
    console.log(response)
  }


  return (
    <div className='bg-secondary w-100 bg-opacity-25 rounded template mt-5 pt-3 px-5'>
      <div>
        <h3 className='position-absolute my-2 top-0'>Template</h3>
      </div>
          <img className='position-absolute h-75 end-0 my-5 pt-5 me-5' src={img} alt="Phone" />
              <h3>Create Link</h3>
            <div className='bg-light w-50'>
          <form onSubmit={submitC}>
              <div className='d-grid mx-2'>
                <div className='d-grid pt-2'>
                  {preview &&(
                  <img src={preview} className="rounded my-3 w-25" alt="Preview" />
                  )}
                  <input type="file" onChange={changeC} name="image" />
                </div>
                <p className='pt-3'>Title</p>
                <input className='p-1 mx-2 border-start-0 border-end-0 border-top-0 border-dark border-1 my-2' type="text" name="title" onChange={changeC} />
                <p className='pt-3'>Description</p>
                <input className='p-1 mx-2 border-start-0 border-end-0 border-top-0 border-dark border-1 my-2' type="text" name="description" onChange={changeC} />
              </div>
            <button className='btn btn-warning mx-5 rounded done' type="submit">Publish Link</button>
          </form>
            </div>
          <Generate />
    </div>
  )
}