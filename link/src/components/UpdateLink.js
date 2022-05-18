import React, { useEffect, useState } from 'react'
import img1 from '../img/tiktok48.svg'
import img2 from '../img/fb48.svg'
import img3 from '../img/ig48.svg'
import img4 from '../img/twt48.svg'
import img5 from '../img/yt48.svg'
import { API } from '../config/api'
import { useParams } from 'react-router-dom'

export const UpdateLink = () => {
  const {id} = useParams()
  const [linking, setLinking] = useState([])
  const [preview, setPreview] = useState(null)
  const [form, setForm] = useState({
      title: "",
      url: "",
      image: ""
    });
  
  const getLinking = async (id) => {
      try {
          const res = await API.get(`/link/${id}`)
          setPreview(res.data.data.image)
          setForm({
            ...form,
            title: res.data.data.title,
            url: res.data.data.url
          })
          setLinking(res.data.data)
      } catch (error) {
          console.log(error)
      }
  }
  
  useEffect(() => {
      getLinking(id)
  }, [])

  const updated = (e) => {
      setForm({
          ...form,
          [e.target.name]: e.target.type === "file" ? e.target.files :  e.target.value
      });

      if(e.target.type === "file"){
        let url = URL.createObjectURL(e.target.files[0])
        setPreview(url)
      }
  }

  const submitU = async (e) => {
    try {
      e.preventDefault();

      const setting = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }

      const formU = new FormData();

      if(form.image){
        formU.set("image", form?.image[0], form?.image[0]?.name)
      }
      formU.set("title", form.title)
      formU.set("url", form.url)

      const res = await API.patch(`/link/${id}`, formU, setting)

      console.log(res.data.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    setLinking(id)
  },[linking])
    
  return (
    <div className='bg-light create scroll h-25 w-50'>
      <form onSubmit={submitU}>
        <div className='d-flex rounded bg-secondary bg-opacity-50 p-2 m-3'>
          <div className='d-grid'>
            <img src={preview} className="rounded my-3 mx-auto input-image" alt="Preview" />
            <input onChange={updated} className='w-50 mx-auto' type="file" name="image" />
          </div>
          <div className='my-2 d-grid w-100'>
          <p className='my-2'>Title Link</p>
          <input value={form.title} onChange={updated} type="text" name="title" placeholder='The Title' className='pt-1 input border-start-0 border-end-0 border-top-0 border-dark border-1 bg-secondary bg-opacity-10 w-100'/>
          <p className='my-2'>Link</p>
          <input value={form.url} onChange={updated} type="text" name="url" placeholder='The Title' className='pt-1 input border-start-0 border-end-0 border-top-0 border-dark border-1 bg-secondary bg-opacity-10 w-100'/>
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
        <button className='btn btnpub btn-warning text-center mx-3 rounded' type='submit'>Update Old Link</button>
      </form>
    </div>
  )
}
