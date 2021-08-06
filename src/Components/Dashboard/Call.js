import React from 'react'
import {FiClock,FiPhoneCall} from 'react-icons/fi'
import {MdMessage} from 'react-icons/md'
const Call = () => {
    return (
        <div className="callinfo">
            <h5>Contact Us</h5>
            <div className="row">
            <div className="col-lg-4 col-md-4 col-4">
                <h6 className="showthis" id="openinghrs"><FiClock color="#00ff00" size="25" />Opening hours<p>5:00am-11:00pm Sun-Mon</p></h6>
            </div>
            <div className="col-lg-4 col-md-4 col-4">
                <h6 className="showthis" id="makecall"><MdMessage color="#00ff00" size="20" />
                    <a href="sms:0706083697">0706083697</a>
                </h6>
            </div>
            <div className="col-lg-4 col-md-4 col-4">
                <h6 className="showthis" id="makecall"><FiPhoneCall color="#00ff00" size="20" />
                    <a href="tel:0706083697">0706083697</a>
                </h6>
            </div>
        </div>
        </div>
    )
}

export default Call
