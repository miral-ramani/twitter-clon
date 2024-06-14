import React from 'react'
import logpage from './index.module.css';
import XIcon from '@mui/icons-material/X';
import { Link } from 'react-router-dom';

const Login = (props) => {

    return (
        <div className={logpage.profile_main} >
            <div className={logpage.left_box}>
                <div className={logpage.logo}>
                    <XIcon style={{ fontSize: "60px", color: "black" }} /> </div>
                <div className={logpage.middle_box}>{props.children}</div>
                <div style={{ color: 'black' }}>Already Member <Link className={logpage.link} to='/login'>Login</Link> OR <Link className={logpage.link} to='/'>SignUp</Link>  </div>
            </div>

            <div className={logpage.right_box}>
                <h1 style={{ fontSize: '20px', color: "black" }}>It's Free to Sign up</h1>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "55px", color: "black" }} >
                    Twitter  <XIcon style={{ fontSize: "65px", color: "black" }} />
                </div>
            </div>
        </div>
    )
}

export default Login;
