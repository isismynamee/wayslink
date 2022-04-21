import React, { useEffect, useState } from 'react'
import {Carousel} from 'react-bootstrap'
import { API } from '../config/api'
import img3 from '../img/ig48.svg'

export const CarouselCom = () => {
    const [comments, setComments] = useState([])
    
    const getComments = async () =>{
        try {
            const all = await API.get('/feedbacks');
            setComments(all.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        getComments();
    }, [])
    // console.log(comments)
  return (
    <div className='bg-secondary w-100 bg-opacity-25 rounded template mt-5 pt-2 px-5'>
            <Carousel className='mx-auto bg-dark bg-opacity-50 caro mt-4 rounded'>
                    {comments.map((item) => (
                <Carousel.Item interval={2000}>
                    <img className="d-block w-50 h-100 mx-auto" src={img3} alt="First slide" />
                    <Carousel.Caption>
                        <h3> {item.name} </h3>
                        <p> {item.feedback} </p>
                    </Carousel.Caption>
                </Carousel.Item>
                    ))}
            </Carousel>
      </div>
  )
}
