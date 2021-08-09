import React,{useState} from 'react';
import { Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button } from 'react-bootstrap';
import axios from 'axios';

const Sendmail = () => {
    const [data, setData] = useState({
        subject: "",
        html: ""
    })
    
    const handleChange = (e) =>{
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    const sendToall = async (e) =>{
    e.preventDefault()
    await axios.post('http://localhost:3001/theuser/textmail',{
        subject: data.subject,
        html: data.html
        
    })
    .then(function (response) {
        // handle success
        console.log(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log(error.response.data.error.message);
    })
}

    const token = localStorage.getItem('token');
    if (!token) {
        return <Redirect to="*" />;
    }
    return (
        <div>
            <Form className="sendtomany" onSubmit={sendToall}>
                <h4 style={{textAlign:'center'}}>Send an Email</h4>
                <Form.Group className="mb-3" controlId="formRole">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject" id="subject" onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMessage">
                    <textarea style={{width:'100%'}} type="text" placeholder="Type your message" id="html" onChange={handleChange}></textarea>
                </Form.Group>
                <Button variant="primary" type="submit">
                    SEND
                </Button>
            </Form>
        </div>
    )
}

export default Sendmail
