import React, { useEffect, useState } from 'react'
import img from '../img/proof.png'
import { API } from '../config/api'
import { Generate } from './Generate'
import { UpdateLink } from './UpdateLink'
import { useParams } from 'react-router-dom'

export const Update = () => {
    const {id} = useParams()
    const [creative, setCreative] = useState([])
    const [preview, setPreview] = useState(null)
    const [form, setForm] = useState({
        title: "",
        description: "",
        image: ""
      });
    
    const getCreative = async (id) => {
        try {
            const res = await API.get(`/creative/${id}`)
            setPreview(res.data.data.image)
            setForm({
              ...form,
              title: res.data.data.title,
              description: res.data.data.description
            })
            setCreative(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        getCreative(id)
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
        formU.set("description", form.description)

        const res = await API.patch(`/creative/${id}`, formU, setting)

        console.log(res.data.data)

      } catch (error) {
        console.log(error)
      }
    }

    useEffect(()=> {
      setCreative(id)
    },[creative])

  return (
    <div className='bg-secondary w-100 bg-opacity-25 rounded template mt-5 pt-2 px-5'>
      <div>
        <h3 className='position-absolute my-2 top-0'>Template</h3>
      </div>
          <img className='position-absolute h-75 end-0 my-5 pt-5 me-5' src={img} alt="Phone" />
              <h3>Create Link</h3>
            <div className='bg-light w-50'>
          <form onSubmit={submitU}>
              <div className='d-grid mx-2'>
                <div className='d-grid pt-1'>
                  {preview &&(
                  <img src={preview} onChange={updated} className="rounded mt-1 input-image" alt="Preview" />
                  )}
                  <input onChange={updated} className='input-imagee my-2' type="file" name="image" />
                </div>
                <p className='pt-3'>Title</p>
                <input onChange={updated} value={form.title} className='p-1 mx-2 border-start-0 border-end-0 border-top-0 border-dark border-1 my-2' type="text" name="title" />
                <p className='pt-3'>Description</p>
                <input onChange={updated} value={form.description} className='p-1 mx-2 border-start-0 border-end-0 border-top-0 border-dark border-1 my-2' type="text" name="description" />
              </div>
            <button className='btn btn-warning mx-5 rounded done' type="submit">Update Link</button>
          </form>
            </div>
          <UpdateLink />
    </div>
  )
}

// {/* <div className='d-grid'>
// <h3 className='my-3'>Template</h3>
// <form onSubmit={submitC}>
//   <div className='d-flex p-3 justify-content-between bg-secondary bg-opacity-25 template rounded pt-5 px-5'>
//     <h2>Create Link</h2>
//     <div className='d-flex justify-content-around'>
//       <div className='d-grid mx-5 scroll rounded bg-light w-75'>
//         <div className='d-flex m-4'>
//           {preview &&(
//           <img className='w-25 h-75' src={preview} alt="QR"/>
//           )}
//           <input type="file" onChange={changeC} name="image" />
//         </div>
//         <div className='d-grid px-3 my-auto'>
//           <p className='opacity-50'>Title</p>
//           <input type="text" name="title" placeholder='The Title' className='p-1 input border-start-0 border-end-0 border-top-0 border-dark border-1 my-2'/>
//         </div>
//         <div className='d-grid px-3 my-auto'>
//           <p className='opacity-50'>Description</p>
//           <input type="text" name="Description" placeholder='The Description' className='p-1 input border-start-0 border-end-0 border-top-0 border-dark border-1 my-2'/>
//         </div>
//       </div>
//       <img src={img} alt="Phone" />
//     </div>
//   </div>
//   <button className='btn btn-warning'>Publish Link</button>
// </form>
// </div> */}