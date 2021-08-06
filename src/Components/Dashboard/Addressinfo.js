import React from 'react'
import {GoMail} from 'react-icons/go'
import {FaFacebookSquare, FaTwitterSquare, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import {ImLocation2} from 'react-icons/im'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

const Addressinfo = () => {
    return (
        <div className="addressinfo">  
            <div className="row" id="address1">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <h6 className="emailp">
                        <a href="mailto: eleazarsimba5@gmail.com"><GoMail color="#00ff00" size="20" className="addressin" />
                        eleazarsimba5@gmail.com</a>
                    </h6>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <Link to="/map" style={{textDecoration:"none"}}>
                        <h6 className="emailp"><ImLocation2 color="#00ff00" size="20" className="addressin" />
                        3008 Nairobi, Kenya, Opposite AM Bank</h6>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <h6 className="emailp">
                        <a href="https://web.facebook.com/eleazar.simba13.03.1999"><FaFacebookSquare color="#00ff00" size="20" className="socialacc" /></a>
                        <a href="https://twitter.com/eleazar705"><FaTwitterSquare color="#00ff00" size="20" className="socialacc" /></a>
                        <a href="https://www.instagram.com/eleazar.simba/"><FaInstagram color="#00ff00" size="20" className="socialacc" /></a>
                        <a href="https://www.linkedin.com/in/eleazar-simba-3bb331166/"><FaLinkedinIn color="#00ff00" size="20" className="socialacc" /></a>
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default Addressinfo
