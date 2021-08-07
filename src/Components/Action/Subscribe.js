import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Subscribe = () => {
    const history = useHistory();
        axios.put(`http://localhost:3001/theuser/verifymail`)
        .then(function (response) {
            document.getElementById('retak').innerHTML= '<p>Thanks for subscribing to Lexo, you will be redirected to Lexo homepage</p>'
            document.getElementById('loader1')
            setTimeout(() => {
                history.push('/')
              }, 2000)
            console.log(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error.response.data.error.message);
        })
    
    return (
        <div>
            <div id="retak"></div>
            <div id="loader1">
                <Loader
                    type="TailSpin" //from https://www.npmjs.com/package/react-loader-spinner
                    color="#000000"
                    height={100}
                    width={100}
                />
            </div>
        </div>
    )
}

export default Subscribe
