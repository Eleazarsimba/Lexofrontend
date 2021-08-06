import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
const Subscribe = () => {
    const history = useHistory();
    const confirmSub = (e) =>{
        axios.put(`http://localhost:3001/theuser/verifymail`)
        .then(function (response) {
            document.getElementById('retak').innerHTML= '<p>Thanks for subscribing to Lexo, you will be redirected to Lexo homepage</p>'
            setTimeout(() => {
                history.push('/')
              }, 3000)
            console.log(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error.response.data.error.message);
        })
        }
    return (
        <div>
            <p style={{cursor:'pointer'}} onClick={confirmSub} id="retak">CLICK HERE to confirm subscription to Lexo and then redirect to homepage</p>
        </div>
    )
}

export default Subscribe
