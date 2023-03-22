import Form from 'react-bootstrap/Form';
import { useContext } from "react";
import { Link } from 'react-router-dom'; 
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../contexts/AuthContext';
import './Auth.css';

export const Register = () => {
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  }, onRegisterSubmit)

  return (
    <div className="formContainer">
      <Form className="currentForm bg-dark" onSubmit={onSubmit}>
        <h1 className='mb-5 title'>Register</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="h2">Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="example@example.com" 
            value={values.email}
            onChange={changeHandler}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label className="h2">Username</Form.Label>
          <Form.Control name="username" type="text" placeholder="Username" 
            value={values.username}
            onChange={changeHandler}
          />         
        </Form.Group>

        <Form.Group className="mb-5" controlId="formBasicPassword">
          <Form.Label className="h2">Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" 
            value={values.password}
            onChange={changeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-5" controlId="formBasicPassword">
          <Form.Label className="h2">Confirm Password</Form.Label>
          <Form.Control name="confirmPassword" type="password" placeholder="confirm password" 
            value={values.confirmPassword}
            onChange={changeHandler}
          />
          <Form.Text className="text-muted">
            <span>If you already have profile click <Link to="/login">here</Link></span>
          </Form.Text>
        </Form.Group>      
        <button className="submitBtn" type="submit">
          Register
        </button>
      </Form>
    </div>
  );
}