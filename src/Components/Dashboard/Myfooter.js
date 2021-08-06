import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../Images/lexologo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button } from 'react-bootstrap';
import axios from 'axios';
const Myfooter = () => {
     //     //initialize
     const [data, setData] = useState({
        email: "",
    })
    
    const handleChange = (e) =>{
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }
    const subScribe = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/theuser/register',{
        //set new values
        email: data.email,  
    })
    .then(function (response) {
        // handle success
        alert(response.data);
        // setData(response.data.users)
        
    })
    .catch(function (error) {
        // handle error
        console.log(error.response.data);
        alert(error.response.data)
    })
    }  
    return (
        <div>
        <div className="myfooter1">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-6">
                    <img className="logohere"
                    src={logo} width="80px" height="40px"
                    alt="First slide"
                    />
                    <Form onSubmit={subScribe}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label><p>Subscribe our newsletter to get latest news update</p></Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" id="email" onChange={handleChange} required/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <div className="col-lg-4 col-md-4 col-6">
                    <p>About Lexo</p>
                    <p>Who We Are</p>
                    <p>Our History</p>
                    <p>FAQs</p>
                    <p>Careers</p>
                    <p>Contact Us</p>
                    <p>Code of Conduct</p>
                </div>
                <div className="col-lg-4 col-md-4 col-6">
                    <p>Products & Services</p>
                    <p>Lexo Fuel</p>
                    <p>Lexo Card</p>
                    <p>Lexo Lubricants</p>
                    <p>Lexo Gas</p>
                    <p>Lexo Express</p>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p>&#169; 2021 Refuel All rights reserved.</p>
        </div>
        </div>
    )
}

export default Myfooter
