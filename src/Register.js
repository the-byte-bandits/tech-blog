import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react"
import { is } from 'date-fns/locale';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [responseReceived, setResponseReceived] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  // const [isTermsValid, setIsTermsValid] = useState(false);



  
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    name.length < 3 ? setIsNameValid(false) : setIsNameValid(true);
    password.length < 7 ? setIsPasswordValid(false) : setIsPasswordValid(true);
    // isTermsValid ? setIsTermsValid(true) : setIsTermsValid(false);

    if (name.length < 3 || password.length < 7)
      return
    
    const userData = {
      name: name,
      email: email,
      password: password
    };

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Response:', responseData);

        setName('');
        setEmail('');
        setPassword('');

        setResponseReceived(true);
        
      } else {
        const responseData = await response.json();
        alert('Error: '+ responseData.error);
        console.error('Error>>:', response.json());
      }
    } catch (error) {
      console.error('Error>:', error);
    }
  };

  // Redirect to the login page if the response has been received
  if (responseReceived) {
    navigate('/login'); // Replace with the correct login route
  }

  return (
    <>
      <div className="container-fluid mt-3 correction">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card bg-dark text-white my-5 mx-auto" style={{ borderRadius: '1rem', maxWidth: '400px' }}>
              <div className="card-body p-5 d-flex flex-column align-items-center mx-auto w-100">
                <h2 className="fw-bold b-2 text-uppercase ">Register</h2>
                <Form className='mt-4' onSubmit={handleFormSubmit}>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Control
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="Name"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="email">
                    <Form.Control
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Email"
                      required={true}
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

                  <div className='d-flex justify-content-center mb-4'>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        // onChange={(e) => setIsTermsValid(e.target.checked)}                   
                      />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        I have read and agree to the terms
                      </label>
                    </div>
                  </div>

                  <Button
                    className="mb-4 w-100"
                    variant="outline-light"
                    type="submit"
                  >
                    Register
                  </Button>

                  <ul style={{margin:'0'}}>
                    {!isNameValid && <li>Name length more than 3</li>}
                    {/* {!isEmailValid && <li>Email is required</li>} */}
                    {!isPasswordValid && <li>Password length more than 7</li>}
                    {/* {isTermsValid && <li>You must accept the terms</li>} */}
                  </ul>

                </Form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;