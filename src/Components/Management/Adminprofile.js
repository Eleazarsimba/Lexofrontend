import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form,Button } from 'react-bootstrap';
import axios from 'axios';

const Adminprofile = () => {
    const email1 = localStorage.getItem('email');
    // const usernamel = localStorage.getItem('username');

        const [data, setData] = useState({
            // username: usernamel,
            email: email1,
        })
        
        const handleChange = (e) =>{
            const newdata = { ...data }
            newdata[e.target.id] = e.target.value
            setData(newdata)
            console.log(newdata)
        }
        const update1 = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:3001/theadmin/update/${email1}`,{
            email: email1,
            // username: data.username,
            
        })
        .then(function (response) {
           console.log(response.data)
           setData(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }
    return (
        <div className="updateprofile">
            <Form onSubmit={update1}>
                <h4 style={{textAlign:'center'}}>Update profile</h4>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" id="email" value={email1} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" id="username" value={data.username} onChange={handleChange} />
                </Form.Group>
        
                <Button variant="primary" type="submit">
                    Update
                </Button>
            </Form>
        </div>
    )
}

export default Adminprofile