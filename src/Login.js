import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useContext, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { authUserInfoContext } from './Context/MyContext';
import Cookies from 'js-cookie';
import { set } from 'mongoose';

function Login() {
  const navigate = useNavigate();

  const {authUserInfo, setAuthUserInfo} = useContext(authUserInfoContext);
  const [accessToken, setAccessToken] = useState(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (authUserInfo) {
      navigate('/dashboard');
    }
  }, [authUserInfo]);


  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password
    };

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Response:', responseData);

        setAuthUserInfo(responseData);

        console.log('>>->>',authUserInfo);


        setEmail('');
        setPassword('');

        Cookies.set('access_token',responseData.accessToken,{expires:1})
        setAccessToken(responseData.accessToken);
        navigate('/dashboard');
      } else {
        const responseData = await response.json();
        alert('Error: '+ responseData.error);
        console.log('Error:', response);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

   return (
    <>
      <div className="container-fluid mt-3 correction" >
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card bg-dark text-white my-5 mx-auto" style={{ borderRadius: '1rem', maxWidth: '400px' }}>
              <div className="card-body p-5 d-flex flex-column align-items-center mx-auto w-100">
                <h2 className="fw-bold b-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">Please enter your login and password!</p>
                <Form onSubmit={handleFormSubmit}>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Control
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="password">
                    <Form.Control
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                  <Button className="mb-4 w-100" variant="outline-light" type="submit" value="Login">Login</Button>
                  <div>
                    <p className="mb-0">Don't have an account? <a href="/register" className="text-white-50 fw-bold">Sign Up</a></p>

                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;


