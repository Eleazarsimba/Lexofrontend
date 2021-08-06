import React from 'react'
import Addressinfo from './Addressinfo'
import Menu from './Menu'
import Mycarousel1 from './Mycarousel1'
import Myfooter from './Myfooter'
import {BiArrowToTop} from 'react-icons/bi'
import Call from './Call'

const Home = () => {
    //set scroll to top
    const toTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    return (
        <div>
            <Addressinfo />
            <Menu />
            <Mycarousel1 />
            <Call />
            <Myfooter />
            <div className="totopicon">
                <BiArrowToTop color="#00ff00" size="40" onClick={toTop} />
            </div>
        </div>
    )
}

export default Home
