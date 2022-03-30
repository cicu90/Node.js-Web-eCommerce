import React from 'react';
import styles from './LoginPage.module.scss';

const LoginPage = () => {


  return (
  <div className={styles.LoginPage}>
    <div id="login-content" className="col-md-11 login">
      <div className="panel-central-default">
        <div className="panel-header">
          <h1 className="panel-title center">Login Admin</h1>
          <h3 className="panel-text center">Web eCommerce</h3>
        </div>
          <div className="panel-input">
            <form method="post">
              <label>Admin :</label>
              <input type="text" className="form-control" placeholder="Your name here..." required>
              </input>
              <label>Password :</label>
              <input type="password" className="form-control" name="password" placeholder="Your name here..." required>
              </input>
              <button className="bbtn btn-info pull-right" type="submit" name="btnLogin">Login</button>
            </form>
              <p className="pull-right">Forgot Password?</p>
            {/* <a href="#">
            </a> */}
          </div>
      </div>
    </div>
  </div>
);
}

export default LoginPage;
