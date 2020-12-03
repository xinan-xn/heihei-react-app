import React, {useState } from "react";
import {useHistory } from "react-router-dom";
import "./login.css";
import "./normalize.css";
import user_img from '../../images/user_img.png'

import {getRegister,login} from "../../server/api"

function BLogin(props) {


  
  //登录跳转
  let to1 = useHistory();
  const [load, setLoad] = useState(1);
  // 用户名
  const [username, setUsername] = useState("");
  // 密码
  const [password, setPassword] = useState("");
  // 确认密码
  const [passwordA, setPassworda] = useState("");
  
  let [code, setCodex] = useState();

  // 验证码
  const [vcode, setVcode] = useState("");
  const [vcodeShow, setVcodeShow] = useState(false);
  const [vcodeSrc, setVcodeSrc] = useState("/miaov/user/verify?" + Date.now());

  const ToLoginr = async () => {
    const data = await login({
      verify:vcode,
      username,
      password
    });
    console.log(data);
    
    if (data.data.code === 0) {
      console.log(to1);
      window.localStorage.setItem("user", username);
      console.log(username);
      alert("登陆成功")
      to1.push("/");
    }else{
      alert(data.data.msg)
    }
  };
  const ToRegister = async () => {
    // console.log();
    const data = await getRegister({verify:vcode, username, password, repassword:passwordA});
    console.log(data);
    setCodex(data.data.code);
    if (code === 0) {
      setLoad(1);
      alert("注册成功")
    }else{
      alert(data.data.msg)
    }
  };
  return (
    <div id="login_boxWrap">
      <h2 className="login_register">
        <span>登录&注册</span>
      </h2>
      <div className="login_register_box">
        <div className="box">
          <div
            className="login_box"
            className={load === 1 ? "login_box" : "hide"}
          >
            <figure className="user_img">
              <p><img src={user_img} /></p>
              <figcaption>如有账号，请直接登录</figcaption>
            </figure>
            <div className="login_form">
              <p>
                <input
                  type="text"
                  placeholder="用户名"
                  autoComplete="off"
                  value={username}
                  onChange={({ target }) => {
                    setUsername(target.value);
                  }}
                />
              </p>
              <p>
                <input
                  type="password"
                  placeholder="请输入密码"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </p>
              <p>
                <input
                  type="text"
                  style={{width:"40%"}}
                  placeholder="验证码"
                  value={vcode}
                  onChange={(e) => {
                    setVcode(e.target.value);
                  }}
                  onFocus={() => {
                    setVcodeShow(true);
                  }}
                />
                {vcodeShow ? (
                  <img
                    className="verify"
                    src={vcodeSrc}
                    onClick={() => {
                      setVcodeSrc("/miaov/user/verify?" + Date.now());
                    }}
                    alt=""
                  ></img>
                ) : (
                  ""
                )}
              </p>
              <button
                className="form_btn"
                onClick={() => {
                  ToLoginr();
                }}
              >
                登录
              </button>
              <p className="form_tip">
                没有帐号？
                <a
                  className="login_a"
                  onClick={() => {
                    setLoad(0);
                  }}
                >
                  立即注册
                </a>
              </p>
            </div>
          </div>
          <div className={load === 0 ? "register_box" : "hide"}>
            <h3>注册账号</h3>
            <div className="register_form">
              <p>
                <input
                  type="text"
                  autoComplete="off"
                  placeholder="用户名"
                  value={username}
                  onChange={({ target }) => {
                    setUsername(target.value);
                  }}
                />
              </p>
              <p>
                <input
                  type="password"
                  autoComplete="off"
                  placeholder="设置密码"
                  value={password}
                  onChange={({ target }) => {
                    setPassword(target.value);
                  }}
                />
              </p>
              <p>
                <input
                  type="password"
                  placeholder="确定密码"
                  value={passwordA}
                  onChange={({ target }) => {
                    setPassworda(target.value);
                  }}
                  onBlur={() => {
                    if (password !== passwordA) {
                      alert("密码不正确，请重新输入！！");
                      setPassworda("");
                    }
                  }}
                />
              </p>
              <p>
                <input
                  type="text"
                  style={{width:"40%"}}
                  placeholder="验证码"
                  onChange={(e) => {
                    setVcode(e.target.value);
                  }}
                  onFocus={() => {
                    setVcodeShow(true);
                  }}
                />
                {vcodeShow ? (
                  <img
                    className="verify"
                    src={vcodeSrc}
                    onClick={() => {
                      setVcodeSrc("/miaov/user/verify?" + Date.now());
                    }}
                    alt=""
                  ></img>
                ) : (
                  ""
                )}
              </p>
              <button
                className="form_btn"
                onClick={() => {
                  ToRegister();
                }}
              >
                马上注册
              </button>
              <p className="form_tip">
                已有帐号？
                <a
                  className="login_a"
                  onClick={() => {
                    setLoad(1);
                  }}
                >
                  立即登录
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BLogin;
// export default connect((res) => {
//   return res;
// })(BLogin);
