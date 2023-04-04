import Form from 'react-bootstrap/Form';
import { useContext } from "react";
import { Link } from 'react-router-dom'; 
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../contexts/AuthContext';
import './Auth.css';

export const Register = () => {
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit, formErrors, authFormValidate } = useForm({
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
            onBlur={authFormValidate}
            style={formErrors.email ? { borderColor: "red" } : {}}
          />
          {formErrors.email &&  
            <div className="mb-3">
              <Form.Text className="text-danger">
                {formErrors.email}
              </Form.Text>                        
            </div>         
          }
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label className="h2">Username</Form.Label>
          <Form.Control name="username" type="text" placeholder="Username" 
            value={values.username}
            onChange={changeHandler}
            onBlur={authFormValidate}
            style={formErrors.username ? { borderColor: "red" } : {}}
          />         
        </Form.Group>
        {formErrors.username &&           
            <Form.Text className="text-danger">
              {formErrors.username}
            </Form.Text>                        
        }

        <Form.Group className="mb-5" controlId="password">
          <Form.Label className="h2">Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" 
            value={values.password}
            onChange={changeHandler}
            onBlur={authFormValidate}
            style={formErrors.password ? { borderColor: "red" } : {}}
          />
        </Form.Group>

        {formErrors.password &&           
            <Form.Text className="text-danger">
              {formErrors.password}
            </Form.Text>                        
        }

        <Form.Group className="mb-5" controlId="confirmPassword">
          <Form.Label className="h2">Confirm Password</Form.Label>
          <Form.Control name="confirmPassword" type="password" placeholder="confirm password" 
            value={values.confirmPassword}
            onChange={changeHandler}
            onBlur={authFormValidate}
            style={formErrors.confirmPassword ? { borderColor: "red" } : {}}
          />
          {formErrors.confirmPassword &&  
            <div>
              <Form.Text className="text-danger">
                {formErrors.confirmPassword}
              </Form.Text>                        
            </div>         
          }
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