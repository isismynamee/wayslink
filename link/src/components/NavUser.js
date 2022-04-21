import React, { useContext } from 'react'
import { useNavigate} from 'react-router-dom';
import img from '../img/Logo.png'
import img1 from '../img/Template.png'
import img2 from '../img/User.png'
import img3 from '../img/Link.png'
import img4 from '../img/feedback.png'
import img5 from '../img/Logout.png'
import { UserContext } from '../context/UserContext';

export const NavUser = () => {
    const [state, dispatch] = useContext(UserContext);
    let nav = useNavigate();

    const template = () => {
        nav('/template-phone')
    }
    const user = () => {
        nav('/user')
    }
    const link = () => {
        nav('/my-link')
    }
    const feedback = () => {
        nav('/feedback')
    }

    const logout = () => {
      console.log(state);
      dispatch({
        type: "LOGOUT",
      });
      nav("/");
    };
  return (
    <div className='d-grid px-5 mx-5 mt-3'>
        <img className='mb-4' src={img} alt="WaysLink" />
        <div>
            <div className='d-flex flex-column'>
                <div onClick={template} className='d-flex cursor text-warning mt-5'>
                    <img src={img1} alt="Template" />
                    <p className='mx-auto my-auto'>Template</p>
                </div>
                <div onClick={user} className='d-flex cursor text-warning mt-5'>
                    <img src={img2} alt="User" />
                    <p className='mx-auto my-auto'>Profile</p>
                </div>
                <div onClick={link} className='d-flex cursor text-warning mt-5'>
                    <img src={img3} alt="Link" />
                    <p className='mx-auto my-auto'>My Link</p>
                </div>
                <div onClick={feedback} className='cursor text-warning d-flex mt-5'>
                    <img className='feedback' src={img4} alt="Logout" />
                    <p className='mx-auto my-auto'>Feedback</p>
                </div>
                <div onClick={logout} className='logout cursor text-warning d-flex'>
                    <img src={img5} alt="Logout" />
                    <p className='mx-auto my-auto'>Logout</p>
                </div>
            </div>
        </div>
    </div>
  )
}
