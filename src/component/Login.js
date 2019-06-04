import React, { Component } from 'react';
import "./login.css"

class Login extends Component{

render(){
    return(
        <div>
        <div class="sidenav">
         <div class="login-main-text">
            <h2>Be Connect<br/></h2>
            <img src="beconnect.jpg" width="400" height="400"></img>
         </div>
      </div>
      <div class="main">
         <div class="col-md-6 col-sm-12">
            <div class="login-form">
               <form>
                  <div class="form-group">
                     <label>User Name</label>
                     <input type="text" class="form-control" placeholder="User Name"/>
                  </div>
                  <div class="form-group">
                     <label>Password</label>
                     <input type="password" class="form-control" placeholder="Password"/>
                  </div>
                  <button type="submit" class="btn btn-black">Login</button>
                  <button type="submit" class="btn btn-secondary">Register</button>
               </form>
            </div>
         </div>
      </div>
        </div>
    )
}
}
export default Login;