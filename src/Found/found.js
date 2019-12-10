import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import {  Icon } from 'antd';
var foundCSS= require('./found.css')

export default class FoundPage extends React.Component{
    render(){
        return(
            <div className={foundCSS.register}>
                <div className={foundCSS.registerA}>
                <Link to="/homepage"><h3>天天影视</h3></Link>
                </div>
                <div className={foundCSS.registerB}>
           <div className={foundCSS.registerC}>
               <div className={foundCSS.registera}><Link to="/login">＜</Link></div>
               <div><h5>找回密码</h5></div>
               <div className={foundCSS.registerS}>
            <input type="text" placeholder="请输入手机号"></input>
            </div>
            <div className={foundCSS.registery}>
            <a><input type="text" placeholder="请输入右边验证码" ></input></a>
            </div>
            <div className={foundCSS.registeryzm}>
            <a href="http://localhost:3000/found" ><img  alt src="https://captcha.360kan.com/image.php?app=360video&t=1561687393831"></img></a>
            </div>
            <div className={foundCSS.registerdx}>
            <input type="text" placeholder="请输入短信验证码"></input>
            </div>
            <div className={foundCSS.registerhq}>
            <button>获取验证码</button>
            </div>
            <div className={foundCSS.registersr}>
            <a><input type="text" placeholder="请输入6-18位新密码，字母/数字/符号" ></input></a>
            </div>
            <div className={foundCSS.registersr1}>
            <a><input type="text" placeholder="重复输入新密码" ></input></a>
            </div>
            <div className={foundCSS.registerl}>
                <Link to="/homepage">
            <button>确定</button></Link>
            </div>
            <div className={foundCSS.Icon}>
            <Icon type="mobile" className={foundCSS.mobile} />
            <Icon type="mail" className={foundCSS.mail} />
            <Icon type="lock" className={foundCSS.mail1} />
            <Icon type="check-circle" className={foundCSS.check} />
            <Icon type="lock" className={foundCSS.lock} />
            </div>
            </div>
            </div>
            </div>
        )
    }
}