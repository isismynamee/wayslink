import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { API } from '../config/api';
import { UserContext } from '../context/UserContext';

export const DUser = () => {
    let {id} = useParams()
    const [state] = useContext(UserContext)

    const [user, setUser] = useState([]);
    const [dUser, setDUser] = useState(null);

    const seeU = async (id) => {
        try {
            const response = await API.get('/users');
            setUser(response.data.data)
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        seeU()
    }, [])

    return (
    <div className='bg-secondary bg-opacity-25 usert rounded mt-5 pt-3 px-5'>
        <div>
            <div className='m-3'>
                <h4>My Information</h4>
            </div>
            <div className='bg-light p-3'>
                <h5 className='my-3 opacity-50'>Name</h5>
                <h3 className='pb-2 border-bottom border-dark'>{state.user.name}</h3>
                <h5 className='my-3 opacity-50'>Email</h5>
                <h3 className='pb-2 border-bottom border-dark'>{state.user.email}</h3>
            </div>
            <div className='d-flex justify-content-end'>
                <Button className='btn btn-warning rounded mx-3 my-4 px-4 py-2'>Save Account</Button>
                <Button  className='btn btn-danger rounded mx-3 my-4 px-4 py-2'>Delete Account</Button>
            </div>
        </div>
    </div>
  )
}
