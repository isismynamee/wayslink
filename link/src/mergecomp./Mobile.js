import React, { useEffect, useState } from 'react'
import { API } from '../config/api'
import img from '../img/fb48.svg'
import img1 from '../img/tiktok48.svg'
import img2 from '../img/yt48.svg'
import img3 from '../img/ig48.svg'
import img4 from '../img/twt48.svg'

export const Mobile = () => {
    const [creat, setCreat] = useState([])
    const [linked, setLinked] = useState([])
    
    // let count = viewers.valueOf(id)

    const getCreat = async () =>{
        try {
            const all = await API.get('/creatives');
            setCreat(all.data.data)
            console.log(all.data.data)
        } catch (error) {
            console.log(error.message)
        }
    }
    
    const getLinkeds = async () =>{
        try {
            const all = await API.get('/links');
            setLinked(all.data.data)
            console.log(all.data.data)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() =>{
        getLinkeds();
        getCreat();
    }, [])
  return (
    <div className='bg-info p-4 m-3 template-mobile rounded'>
        <div className='text-center d-flex flex-column justify-content-between rounded'>
            {creat.map((creat) =>(
            <div>
                <img className='my-4 mx-auto' src={creat.image} alt="Data Dummy" />
                <p className='my-3 mx-4'>{creat.description}</p>
            </div>
            ))}
            {linked.map((linked) => (
            <div className='w-50 h-25 my-2 mx-auto bg-dark bg-opacity-25 caro rounded'>
                <a href={linked.url} target="_blank" className="text-white text-decoration-none rounded">
                    <div className='d-flex justify-content-start mx-2 my-1'>
                        <img className='image-link' src={linked.image} alt="Facebook" />
                        <p className='my-auto mx-auto'>{linked.title}</p>
                    </div>
                </a>
            </div>
            ))}
            <div className='w-50 h-25 my-2 mx-auto bg-dark bg-opacity-25 caro rounded'>
                <a href="#" target="_blank" className="text-white text-decoration-none rounded">
                    <div className='d-flex justify-content-start mx-2 my-1'>
                        <img className='image-link' src={img} alt="Facebook" />
                        <p className='my-auto mx-auto'>Facebook</p>
                    </div>
                </a>
            </div>
            <div className='w-50 h-25 my-2 mx-auto bg-dark bg-opacity-25 caro rounded'>
                <a href="#" target="_blank" className="text-white text-decoration-none rounded">
                    <div className='d-flex justify-content-start mx-2 my-1'>
                        <img className='image-link' src={img1} alt="Facebook" />
                        <p className='my-auto mx-auto'>Tiktok</p>
                    </div>
                </a>
            </div>
            <div className='w-50 h-25 my-2 mx-auto bg-dark bg-opacity-25 caro rounded'>
                <a href="#" target="_blank" className="text-white text-decoration-none rounded">
                    <div className='d-flex justify-content-start mx-2 my-1'>
                        <img className='image-link' src={img2} alt="Facebook" />
                        <p className='my-auto mx-auto'>Youtube</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}
