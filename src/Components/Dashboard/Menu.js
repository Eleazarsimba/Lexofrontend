import React, {useState} from 'react'
import {FiMenu} from 'react-icons/fi'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../Images/lexologo.png'
import $ from 'jquery';
const Menu = () => {
    const [show1, setShow] = useState('none');
    const showMenu = () =>{
    window.scrollTo({top: 0, behavior: 'smooth', display: 'block'}); 
     //set show or hide pass
    if(show1 === "none"){
        setShow("block");
    }else{
        setShow("none");
    }
}

$(window).scroll(function(e){ 
    //this sets the navbar fixed on scroll
    var $el = $('.mainmenu'); 
    var isPositionFixed = ($el.css('position') === 'fixed');
    if ($(this).scrollTop() > 150 && !isPositionFixed){ 
      $el.css({'position': 'fixed', 'top': '0px'}); 
    }
    if ($(this).scrollTop() < 150 && isPositionFixed){
      $el.css({'position': 'static', 'top': '0px'}); 
    } 
  });
    return (
        <div>
        <div className="mainmenu">
            <div className="row">
                <div className="col-lg-2 col-md-2 col-4">
                    <h6 className="menup">
                    <img height="50px" width="100px"
                    src={logo}
                    alt="First slide"
                    />
                    </h6>
                </div>
                <div className="col-lg-10 col-md-10 col-4">
                        <div class="menu1"> 
                            <ul>
                                <li>Home</li>
                                <li>About us</li>
                                <li>Services</li>
                                <li>Management</li>
                            </ul>
                        </div>
                </div>
                <div className="col-lg-2 col-md-2 col-4">
                    <h6 id="menuicon"><FiMenu color="#00ff00" size="25" className="socialacc" onClick={showMenu} /></h6>
                </div>
            </div>
        </div>
            <div class="menu2" style={{display: show1}}> 
                <ul>
                   <li>Home</li>
                   <li>About us</li>
                   <li>Services</li>
                   <li>Management</li>
                </ul>
            </div>
        </div>
    )
}

export default Menu
