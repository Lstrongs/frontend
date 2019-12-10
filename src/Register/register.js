import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import {  Icon } from 'antd';
var registerCSS= require('./register.css')

export default class RegisterPage extends React.Component{
    render(){
        return(
            <div className={registerCSS.register}>
                <div className={registerCSS.registerA}>
                <Link to="/homepage"><h3>天天影视</h3></Link>
                </div>
                <div className={registerCSS.registerB}>
           <div className={registerCSS.registerC}>
               <div className={registerCSS.registera}><Link to="/login">＜</Link></div>
               <div><h5>注册</h5></div>
               <div className={registerCSS.registerS}>
            <input type="text" placeholder="请输入手机号"></input>
            </div>
            <div className={registerCSS.registery}>
            <a><input type="text" placeholder="请输入右边验证码" ></input></a>
            </div>
            <div className={registerCSS.registeryzm}>
            <a href="http://localhost:3000/register" ><img  alt src="https://captcha.360kan.com/image.php?app=360video&t=1561687393831"></img></a>
            </div>
            <div className={registerCSS.registerdx}>
            <input type="text" placeholder="请输入短信验证码"></input>
            </div>
            <div className={registerCSS.registerhq}>
            <button>获取验证码</button>
            </div>
            <div className={registerCSS.registersr}>
            <a><input type="text" placeholder="请输入6-18位密码，字母/数字/符号" ></input></a>
            </div>
            <div className={registerCSS.registerl}>
            <Link to="/homepage">
            <button name="register">注册</button></Link>
            </div>
            <div className={registerCSS.registerla}>
                <Link to="/login">登录</Link>
                <span> | </span>
                <Link to="/found">找回密码</Link>
            </div>
            <div className={registerCSS.Icon}>
            <Icon type="mobile" className={registerCSS.mobile} />
            <Icon type="mail" className={registerCSS.mail} />
            <Icon type="check-circle" className={registerCSS.check} />
            <Icon type="lock" className={registerCSS.lock} />
            </div>
            </div>
            </div>
            </div>
        )
    }
}