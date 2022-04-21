import React, { useState } from 'react'
// import { Button } from 'react-bootstrap'
import img1 from '../img/tiktok48.svg'
import img2 from '../img/fb48.svg'
import img3 from '../img/ig48.svg'
import img4 from '../img/twt48.svg'
import img5 from '../img/yt48.svg'
import { API } from '../config/api'

export const Generate = () => {
  const [preview, setPreview] = useState(null)
  const [form, setForm] = useState({
    title: '',
    url: '',
    image: ''
  });
  // const {title, url, image} = form

  const changeL = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value
    })

    if(e.target.type === "file"){
      let imagep= URL.createObjectURL(e.target.files[0])
      setPreview(imagep)
    }
  }
  const submitL = async (e) => {
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

    const response = await API.post('/link', dataSet, settings)
    console.log(response)
  }
  return (
    <div className='bg-light create scroll h-25 w-50'>
      <form onSubmit={submitL}>
        <div className='d-flex rounded bg-secondary bg-opacity-50 p-2 m-3'>
          <div className='d-grid'>
            {preview &&(
            <img src={preview} className="rounded my-3 w-25" alt="Preview" />
            )}
            <input type="file" onChange={changeL} name="image" />
          </div>
          <div className='my-2 d-grid w-100'>
          <p className='my-2'>Title Link</p>
          <input type="text" name="title" onChange={changeL} placeholder='The Title' className='pt-1 input border-start-0 border-end-0 border-top-0 border-dark border-1 bg-secondary bg-opacity-10 w-100'/>
          <p className='my-2'>Link</p>
          <input type="text" name="url" onChange={changeL} placeholder='The Title' className='pt-1 input border-start-0 border-end-0 border-top-0 border-dark border-1 bg-secondary bg-opacity-10 w-100'/>
          </div>
        </div>
        {/* <div className='d-flex rounded bg-secondary bg-opacity-50 p-2 m-3'>
          <img className='w-25 h-75 rounded' src={img2} alt="QR" />
          <div className='m-2 d-grid w-100'>
          <p className='my-2'>Title Link</p>
          <input type="text" name="title" onChange={changeL} placeholder='The Title' className='p-1 input border-start-0 border-end-0 border-top-0 border-dark border-1 bg-secondary bg-opacity-10 w-100'/>
          <p className='my-2'>Link</p>
          <input type="text" name="url" onChange={changeL} placeholder='The Title' className='p-1 input border-start-0 border-end-0 border-top-0 border-dark border-1 bg-secondary bg-opacity-10 w-100'/>
          </div>
        </div>
        <div className='d-flex rounded bg-secondary bg-opacity-50 p-2 m-3'>
          <img className='w-25 h-75 rounded' src={img3} alt="QR" />
          <div className='m-2 d-grid w-100'>
          <p className='my-2'>Title Link</p>
          <input type="text" name="title" onChange={changeL} placeholder='The Title' className='p-1 input border-start-0 border-end-0 border-top-0 border-dark border-1 bg-secondary bg-opacity-10 w-100'/>
          <p className='my-2'>Link</p>
          <input type="text" name="url" onChange={changeL} placeholder='The Title' className='p-1 input border-start-0 border-end-0 border-top-0 border-dark border-1 bg-secondary bg-opacity-10 w-100'/>
          </div>
        </div>
        <div className='d-flex rounded bg-secondary bg-opacity-50 p-2 m-3'>
          <img className='w-25 h-75 rounded' src={img4} alt="QR" />
          <div className='m-2 d-grid w-100'>
          <p className='my-2'>Title Link</p>
          <input type="text" name="title" onChange={changeL} placeholder='The Title' className='p-1 input border-start-0 border-end-0 border-top-0 border-dark border-1 bg-secondary bg-opacity-10 w-100'/>
          <p className='my-2'>Link</p>
          <input type="text" name="url" onChange={changeL} placeholder='The Title' className='p-1 input border-start-0 border-end-0 border-top-0 border-dark border-1 bg-secondary bg-opacity-10 w-100'/>
          </div>
        </div>
        <div className='d-flex rounded bg-secondary bg-opacity-50 p-2 m-3'>
          <img className='w-25 h-75 rounded' src={img5} alt="QR" />
          <div className='m-2 d-grid w-100'>
          <p className='my-2'>Title Link</p>
          <input type="text" name="title" onChange={changeL} placeholder='The Title' className='p-1 input border-start-0 border-end-0 border-top-0 border-dark border-1 bg-secondary bg-opacity-10 w-100'/>
          <p className='my-2'>Link</p>
          <input type="text" name="url" onChange={changeL} placeholder='The Title' className='p-1 input border-start-0 border-end-0 border-top-0 border-dark border-1 bg-secondary bg-opacity-10 w-100'/>
          </div>
        </div> */}
        <button className='btn btnpub btn-warning text-center mx-3 rounded' type='submit'>Add New Link</button>
      </form>
    </div>
  )
}
