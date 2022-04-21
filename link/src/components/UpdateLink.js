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
    
    const getLinking = async (id) => {
        try {
            const res = await API.get(`/link/${id}`)
            setLinking(res.data.data)
            // console.log(res);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getLinking(id)
    }, [])
    
  return (
    <div className='bg-light create scroll h-25 w-50'>
      <form>
        <div className='d-flex rounded bg-secondary bg-opacity-50 p-2 m-3'>
          <div className='d-grid'>
            <img src={linking.image} className="rounded my-3 mx-auto input-image" alt="Preview" />
            <input className='w-50 mx-auto' type="file" name="image" />
          </div>
          <div className='my-2 d-grid w-100'>
          <p className='my-2'>Title Link</p>
          <input value={linking.title} type="text" name="title" placeholder='The Title' className='pt-1 input border-start-0 border-end-0 border-top-0 border-dark border-1 bg-secondary bg-opacity-10 w-100'/>
          <p className='my-2'>Link</p>
          <input value={linking.url} type="text" name="url" placeholder='The Title' className='pt-1 input border-start-0 border-end-0 border-top-0 border-dark border-1 bg-secondary bg-opacity-10 w-100'/>
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
