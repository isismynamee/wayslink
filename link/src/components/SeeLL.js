import React, { useEffect, useState } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import {API} from '../config/api'
import ModalD from '../components/ModalD'
import img from '../img/Edit.png'
import img1 from '../img/Delete.png'
import img2 from '../img/View.png'

export const SeeLL = () => {
    let {id} = useParams();
    let nav = useNavigate()
    const mobile =() =>{
        nav('/m-template')
    }

    const [viewers, setViewers] = useState(1)
    const [view, setView] = useState(123)
    const [creat, setCreat] = useState([])

    const getCreat = async () =>{
        try {
            const response = await API.get('/creatives');
            setCreat(response.data.data)
            // console.log(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        getCreat()
    }, [])
    
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [idDelete, setIdDelete] = useState(null)
    const [confirmDelete, setConfirmDelete] = useState(null)

    const deleteData = (id) => {
        setIdDelete(id)
        handleShow()
    }

    const deleteCreat = async (id) => {
        try {
            await API.delete(`/creative/${id}`)
            getCreat()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(confirmDelete){
            handleClose()
            deleteCreat(idDelete)
            setConfirmDelete(null)
        }
    }, [confirmDelete])

  return (
    <div className='p-3 rounded Mlink bg-secondary bg-opacity-25'>
        <div className='d-flex justify-content-around '>
            <h5 className='mx-3 my-auto w-25'>All Links <span className='mx-3 my-auto'>{viewers}</span></h5>
            <input placeholder='Input' className='bg-secondary mx-3 my-auto w-100 bg-opacity-10 border-bottom border-dark border-0' type="search" name="search" />
            <button className='w-25 btn btn-warning rounded mx-3 my-auto' type="submit">Search</button>
        </div>
        <div className='d-flex justify-content-evenly my-5'>
            <div className='d-grid'>
                {creat.map((item, index) =>(
                <div key={index} className='d-flex my-4 text-center justify-content-between'>
                    <div className='d-flex'>
                        <div className='d-grid flex-column justify-content-around mx-5'>
                            <img src={item.image} className="my-auto" width="50px" alt="Preview" />
                        </div>
                        <div className='d-grid flex-column justify-content-around mx-5' >
                            <h5>{item.title}</h5>
                            <h6 className='opacity-75'>{item.description}</h6>
                        </div>
                    </div>
                    <div className='d-flex flex-column justify-content-around mx-5'>
                        <h5>{view}</h5>
                        <h6 className='opacity-75'>View</h6>
                    </div>
                    <div className='d-flex'>
                        <img onClick={mobile} className='my-auto mx-5' src={img2} alt="View" />
                        <img onClick={(() => nav(`/template-form-edit/${item.id}`))} className='my-auto mx-5' src={img} alt="Edit" />
                        <img className='my-auto mx-5' onClick={() => {deleteData(item.id)}} src={img1} alt="Delete" />
                    </div>
                </div>
                ))}
                <ModalD setConfirmDelete={setConfirmDelete} show={show} handleClose={handleClose} />
            </div>
        </div>
    </div>
  )
}
