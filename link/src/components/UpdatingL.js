import React, { useState } from 'react'
import img1 from '../img/tiktok48.svg'
import img2 from '../img/fb48.svg'
import img3 from '../img/ig48.svg'
import img4 from '../img/twt48.svg'
import img5 from '../img/yt48.svg'
import { API } from '../config/api'

export const UpdatingL = () => {
    const [preview, setPreview] = useState(null)
    const [form, setForm] = useState({
      title: '',
      url: ''
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
      dataSet.set("url", form.url)
      dataSet.set("image", form.image[0], form.image[0].name)

      const response = await API.post('/creative', dataSet, settings)
      console.log(response)
    }
  return (
    <div className='bg-light create scroll w-50'>
      <form onSubmit={submitC}>
        <div className='d-grid mx-2 px-2'>
          {preview &&(
          <img src={preview} className="rounded w-25" alt="Preview" />
          )}
          <input type="file" onChange={changeC} name="image" />
        </div>
        <div className='d-flex rounded bg-secondary bg-opacity-50 p-2 m-3'>
          <img className='w-25 h-75 rounded' src={img1} alt="QR" />
          <div className='m-2 d-grid w-100'>
          <p className='my-2'>Title Link</p>
          <input type="text" name="title" onChange={changeC} placeholder='The Title' className='p-1 input border-start-0 border-end-0 border-top-0 border-dark border-1 bg-secondary bg-opacity-10 w-100'/>
          <p className='my-2'>Link</p>
          <input type="text" name="url" onChange={changeC} placeholder='The Title' className='p-1 input border-start-0 border-end-0 border-top-0 border-dark border-1 bg-secondary bg-opacity-10 w-100'/>
          </div>
        </div>
        <div className='d-flex rounded bg-secondary bg-opacity-50 p-2 m-3'>
          <img className='w-25 h-75 rounded' src={img2} alt="QR" />
          <div className='m-2 d-grid w-100'>
          <p className='my-2'>Title Link</p>
          <input type="text" name="title" onChange={changeC} placeholder='The Title' className='p-1 input border-start-0 border-end-0 border-top-0 border-dark border-1 bg-secondary bg-opacity-10 w-100'/>
          <p className='my-2'>Link</p>
          <input type="text" name="url" onChange={changeC} placeholder='The Title' className='p-1 input border-start-0 border-end-0 border-top-0 border-dark border-1 bg-secondary bg-opacity-10 w-100'/>
          </div>
        </div>
        <div className='d-flex rounded bg-secondary bg-opacity-50 p-2 m-3'>
          <img className='w-25 h-75 rounded' src={img3} alt="QR" />
          <div className='m-2 d-grid w-100'>
          <p className='my-2'>Title Link</p>
          <input type="text" name="title" onChange={changeC} placeholder='The Title' className='p-1 input border-start-0 border-end-0 border-top-0 border-dark border-1 bg-secondary bg-opacity-10 w-100'/>
          <p className='my-2'>Link</p>
          <input type="text" name="url" onChange={changeC} placeholder='The Title' className='p-1 input border-start-0 border-end-0 border-top-0 border-dark border-1 bg-secondary bg-opacity-10 w-100'/>
          </div>
        </div>
        <div className='d-flex rounded bg-secondary bg-opacity-50 p-2 m-3'>
          <img className='w-25 h-75 rounded' src={img4} alt="QR" />
          <div className='m-2 d-grid w-100'>
          <p className='my-2'>Title Link</p>
          <input type="text" name="title" onChange={changeC} placeholder='The Title' className='p-1 input border-start-0 border-end-0 border-top-0 border-dark border-1 bg-secondary bg-opacity-10 w-100'/>
          <p className='my-2'>Link</p>
          <input type="text" name="url" onChange={changeC} placeholder='The Title' className='p-1 input border-start-0 border-end-0 border-top-0 border-dark border-1 bg-secondary bg-opacity-10 w-100'/>
          </div>
        </div>
        <div className='d-flex rounded bg-secondary bg-opacity-50 p-2 m-3'>
          <img className='w-25 h-75 rounded' src={img5} alt="QR" />
          <div className='m-2 d-grid w-100'>
          <p className='my-2'>Title Link</p>
          <input type="text" name="title" onChange={changeC} placeholder='The Title' className='p-1 input border-start-0 border-end-0 border-top-0 border-dark border-1 bg-secondary bg-opacity-10 w-100'/>
          <p className='my-2'>Link</p>
          <input type="text" name="url" onChange={changeC} placeholder='The Title' className='p-1 input border-start-0 border-end-0 border-top-0 border-dark border-1 bg-secondary bg-opacity-10 w-100'/>
          </div>
        </div>
        <button className='btn btnpub btn-warning text-center mx-3 rounded' type='submit'>Add New Link</button>
      </form>
    </div>
  )
}