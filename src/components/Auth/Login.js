import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

import Form from 'react-bootstrap/Form';
import './Auth.css';

export const Login = () => {
  const {onLoginSubmit, loginError} = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm({
    email: '',
    password: '',
  }, onLoginSubmit);

  return (
    <div className="formContainer">
      <Form className="currentForm bg-dark" onSubmit={onSubmit}>
        <h1 className='mb-5 title'>Login</h1>
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

        <Form.Group className="mb-5" controlId="formBasicPassword">
          <Form.Label className="h2">Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" 
            value={values.password}
            onChange={changeHandler}
          />         
          {loginError && 
          <Form.Text className="text-danger">
              <p>{loginError}</p>
          </Form.Text>}
          <Form.Text className="text-muted">
              <span>If you don't have a profile click <Link to="/register">here</Link></span>
          </Form.Text>
        </Form.Group>  
        <button className="submitBtn" type="submit">
          Chip in
        </button>
      </Form>
    </div>
  );
}