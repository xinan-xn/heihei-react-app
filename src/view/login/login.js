import React from 'react'
import './login.css'
import user_img from '../../images/user_img.png'
function Login() {
  return (
    <div id="login_boxWrap">
      <h2 className='login_register'>
        <span>登录&注册</span>
      </h2>
      <div className='login_register_box'>
        <div className='box'>
          <div className='login_box'>
            <figure className='user_img'>
              {/* <image></image> */}
              <img src={user_img}/>
              <figcaption>如有账号，请直接登录</figcaption>
            </figure>
            <div className='login_form'>
              <p>
                <input type='text'name="username" placeholder="用户名"/>
              </p>
              <p>
                  <input type="password" name="userpassword" placeholder="请输入密码" />
              </p>
              <p className="mima clearfix">
                  <span>
                      <input id="rem" type="checkbox" name="remember" />
                      <label for="rem"></label>记住密码
                  </span>
                  <a href="#">忘记密码？</a>
              </p>
              <button className="form_btn">登录</button>
              <p className="form_tip">没有帐号？<a href="#">立即注册</a></p>
            </div>
          </div>
          <div className='register_box'>
               <h3>注册账号</h3>
               <div className='register_form'>
                 <p>
                    <input type="text" placeholder="用户名"/>
                 </p>
                 <p>
                    <input type="password" placeholder="设置密码"/>
                </p>
                <p>
                    <input type="password" placeholder="确定密码"/>
                </p>
                <p>
                    <input type="text" placeholder="学习宣言"/>
                </p>
                <button className="form_btn">马上注册</button>
                <p className="form_tip">已有帐号？<a href="#">立即登录</a></p>
               </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
