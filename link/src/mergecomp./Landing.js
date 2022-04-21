import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext';
import { API } from '../config/api'
import img from '../img/Logo.png'
import img1 from '../img/PC.png'
import img2 from '../img/Phone.png'

import { Modal, Form, Button } from 'react-bootstrap'

export const Landing = () => {
    const [showL, setShowL] = useState(false);
    const handleCloseL = () => setShowL(false);
    const handleShowL = () => setShowL(true);
      
    const [showR, setShowR] = useState(false);
    const handleCloseR = () => setShowR(false);
    const handleShowR = () => setShowR(true);
  
    const switchL =()=>{
      setShowR(true)
      setShowL(false)
    } 
    const switchR =()=>{
        setShowR(false)
        setShowL(true)
    }        
  
    const Login = () => {
      const nav = useNavigate();
      const [state, dispatch] = useContext(UserContext);
      
      const [form, setForm] = useState({
      email: "",
      password: ""
    })
  
    const { email, password } = form;
  
    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = async (e) => {
      try {
        e.preventDefault();
  
        const config = {
          headers: {
            "Content-type": "application/json"
          }
        }
  
        const body = JSON.stringify(form)
  
        const response = await API.post('/login', body, config)
  
        console.log(response.data.data)
  
        if (response.status === 200) {
          
          // Status check
          if (response.data.data.role === 'user') {
            nav('/user');
          }else{
            nav('/');
          }
          dispatch({
            type: "LOGIN_SUCCESS",
            payload: response.data.data,
          });
        }
      } catch (error) {
        console.log(error.message);
      }
    };
      return (
        <Modal className='my-5 modal py-5' show={showL} onHide={handleCloseL}>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <Modal.Title className="fw-1 fs-1 t-red my-3">Login</Modal.Title>
                <Form.Control value={email} onChange={handleChange} id='email' name='email' type="email" placeholder="Enter email" className="border-2 border-info bg-secondary bg-opacity-25 my-3" />
                <Form.Control value={password} onChange={handleChange} id='password' name='password' type="password" placeholder="Password" className="border-2 border-info bg-secondary bg-opacity-25 my-3" />
                <Button className='mx-auto fw-bold my-3 w-100' variant="warning" type="submit"> Sign In </Button>
                <p className="text-center"> Don't have an account ? Click <span onClick={switchL} className="fw-bold cursor" >Here</span></p>
            </Form>
          </Modal.Body>
        </Modal>
      );
    };
    const Register = () => {
      const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
      });
  
      const {name, email, password} = form
  
      const handleChangeF = async (e) =>{
        setForm({
          ...form,
          [e.target.name]: e.target.value
        })
      }
  
      const handleSR = async (e) =>{
        try {
          e.preventDefault();
  
          const settings = {
            headers:{
              "Content-Type": "application/json"
            }
          }
          const body = JSON.stringify(form)
  
          const response = await API.post('/register', body, settings)
          console.log(response)
  
          if(response.status === 200){
            switchR()
          }
        } catch (error) {
          console.log(error.message)
        }
      }
  
      return (
        <Modal className='my-5 py-5' show={showR} onHide={handleCloseR}>
          <Modal.Body>
            <Form >
                <Modal.Title className="fs-1 fw-1 t-red my-3"> Register </Modal.Title>
                <Form.Control onChange={handleChangeF} value={email} type="email" placeholder="Enter email" name="email"  className="border-2 bg-secondary bg-opacity-25 my-3" />
                <Form.Control onChange={handleChangeF} value={password} type="password" placeholder="Password" name="password" className="border-2 bg-secondary bg-opacity-25 my-3" />
                <Form.Control onChange={handleChangeF} value={name} type="text" placeholder="Full Name" name="name" className="border-2 bg-secondary bg-opacity-25 my-3" />
                <Button className='mx-auto fw-bold my-3 w-100' variant="warning" onClick={handleSR} type="submit">
                  Register
                </Button>
                <p className="text-center"> Already have an account ? Click <span onClick={switchR} className="fw-bold cursor" > Here </span></p>
            </Form>
          </Modal.Body>
        </Modal>
      );
    };
  return (
    <div>
      <div className='d-flex justify-content-between my-3'>
        <div class="mx-5">
          <img src={img} alt="WaysLink" />
        </div>
        <div className='mx-4' >
          <Button onClick={handleShowL} className='btn btn-light mx-2 px-4' >Login</Button>
          <Button onClick={handleShowR} className='btn btn-warning mx-2 px-4' >Register</Button>
        </div>
      </div>
      <Login />
      <Register />
      <div className='bg-warning landing py-5'>
        <div className='d-flex justify-content-center'>
          <div className='d-grid text-white'>
            <p className='slogan'>The Only Link <br /> You'll Ever Need</p>
            <p>Add a link for your Social Bio and optimize your social media traffic</p>
            <p>safe, fast and easy to use</p>
            <Button onClick={handleShowR} className='btn btn-dark w-50'> Get Started For Free </Button>
          </div>
          <div>
            <img className='phone pt-3' src={img2} alt="Phone" />
            <img className='pc' src={img1} alt="PC" />
          </div>
        </div>
      </div>
    </div>
  )
}
