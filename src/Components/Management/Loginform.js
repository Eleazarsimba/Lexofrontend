import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Loginform = () => {
        const [passtype, setShow] = useState('password');
        const showPass = () =>{
        //set show or hide pass
        if(passtype === "password"){
            setShow("text");
        }else{
            setShow("password");
        }
    }
    const [data, setData] = useState({
        email: "",
        password: "",
    })
    
    const handleChange = (e) =>{
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }
    const history = useHistory();
    const login = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/theadmin/login',{
        email: data.email,
        password: data.password,       
    })
    .then(function (response) {
        // handle success
        console.log(response.data);
        window.localStorage.setItem('token', response.data.token);
        window.localStorage.setItem('email', response.data.email);
        history.push("/dashboard");
    })
    .catch(function (error) {
        // handle error
        console.log(error.response.data.error);
        alert(error.response.data.error)
    })
}
    return (
           <Form className="loginform" onSubmit={login}>
               <div className="profheader">
                <h5>LOGIN FORM</h5>
                <p>Enter email and password to login</p>
               </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" id="email" onChange={handleChange} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={passtype} placeholder="Password" id="password" onChange={handleChange} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Show password" onChange={showPass} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
    )
}

export default Loginform