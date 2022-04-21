import { useContext, useEffect } from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom'
import { Landing } from './mergecomp./Landing';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { API, setAuthToken } from './config/api'
import { UserContext } from './context/UserContext';
import { Template } from './mergecomp./Template';
import { User } from './mergecomp./User';
import { MyLink } from './mergecomp./MyLink';
import { Mobile } from './mergecomp./Mobile';
import { TemplatePhone } from './mergecomp./TemplatePhone';
import { Templateedit} from './mergecomp./Templateedit'
import { Comment } from './mergecomp./Comment';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  let nav = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  console.clear();
  console.log(state);
  useEffect(() => {

    // Redirect Auth
    if (state.isLogin === true) {
      nav("/user");
    }else{
      nav("/");
    }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      // Get user data
      let payload = response.data.data.user;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);
  
  return(
    <Routes>
      <Route exact path='/' element={<Landing />} />
      <Route exact path='/user' element={<User />} />
      <Route exact path='/template-phone' element={<TemplatePhone />} />
      <Route exact path='/template-form' element={<Template />} />
      <Route exact path='/template-form-edit/:id' element={<Templateedit />} />
      <Route exact path='/my-link' element={<MyLink />} />
      <Route exact path='/m-template' element={<Mobile />} />
      <Route exact path='/feedback' element={<Comment />} />
    </Routes>
  )
}

export default App;
