import React from 'react';
import "../style/Login-Register.css";

const Login = () => {
  return (
    <div className='login'>
      <div className="login-container">
        <h1>Login</h1>
        <div className="login-icon">
          <h1><ion-icon name="bag-check-outline"></ion-icon></h1>
        </div>
        <div className="user-name">
          <h3><ion-icon name="person"></ion-icon></h3>
          <input id='user-input' type="text" placeholder='Username...'/>
        </div>
        <div className="user-password">
          <h3><ion-icon name="lock-closed"></ion-icon></h3>
          <input id='pass-input' type="text" placeholder='Password...'/>
        </div>
        <div className="keep-log">
          <input  type="checkbox" /> <h3>Keep Me Logged In</h3>
        </div>
        <button className='Login-button'>LOGIN</button>
        <h3>Login with:</h3>
        <div className="login-with">
          <h3><ion-icon style={{color:"red"}} size="large" name="logo-google"></ion-icon></h3>
          <h3><ion-icon style={{color:"CornflowerBlue"}} size="large" name="logo-facebook"></ion-icon></h3>
          <h3><ion-icon style={{color:"DeepSkyBlue"}} size="large" name="logo-twitter"></ion-icon></h3>

        </div>


        
      </div>
        
    </div>
  )
}

export default Login