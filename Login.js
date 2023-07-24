import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react"
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   return (
    <>
      <div className="container-fluid mt-3">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card bg-dark text-white my-5 mx-auto" style={{ borderRadius: '1rem', maxWidth: '400px' }}>
              <div className="card-body p-5 d-flex flex-column align-items-center mx-auto w-100">
                <h2 className="fw-bold b-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">Please enter your login and password!</p>
                <Form onSubmit={()=>{}}>
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

                  {/* <div className='d-flex flex-row mt-3 mb-5'>
                    <Button tag='a' className='m-3' style={{ color: 'white', backgroundColor: 'black', border: 'none' }}>
                      <i className="fa-brands fa-facebook"></i>
                    </Button>

                    <Button tag='a' className='m-3' style={{ color: 'white', backgroundColor: 'black', border: 'none' }}>
                      <i className="fa-brands fa-twitter"></i>
                    </Button>

                    <Button tag='a' className='m-3' style={{ color: 'white', backgroundColor: 'black', border: 'none' }}>
                      <i className="fa-brands fa-google"></i>
                    </Button>
                  </div> */}

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


