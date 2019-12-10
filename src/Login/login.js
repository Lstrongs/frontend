import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import {  Icon } from 'antd';
var loginCSS= require('./login.css')

export default class LoginPage extends React.Component{

    constructor(props){
        super(props)
        this.state={
            usermane:'',
            password:''
        }
    }
    changeValue = e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    info = e=>{
        //访问服务器，登陆成功
        if(this.state.usermane=='123'&&this.state.password=='123'){
            alert('登陆成功');
            window.localStorage.setItem("username","123")
            window.localStorage.setItem("token","11111")
            this.props.history.push('/homepage')
        }else{
            alert('登陆失败')
        }
    }

    render(){
        return(
            <div className={loginCSS.login}>
                <div className={loginCSS.loginA}>
                <Link to="/homepage"><h3>天天影视</h3></Link>
                </div>
                <div className={loginCSS.loginB}>
           <div className={loginCSS.loginC}>
               <h5>账户登录</h5>
               <div className={loginCSS.loginS}>
            <input type="text" name="usermane" id="usermane" value={this.state.username} onChange={this.changeValue} placeholder="请输入手机号" />
            </div>
            <div className={loginCSS.logink}>
            <input type="text" name="password" id="password" value={this.state.password} onChange={this.changeValue} placeholder="请输入密码" />
            </div>
            <div className={loginCSS.loginS}>
               
            <button onClick={this.login} onClick={this.info} name="login">立即登录</button>
            <div className={loginCSS.link}>
            <p className={loginCSS.register}><NavLink to="/register">立即注册</NavLink></p>
            </div>
            <div className={loginCSS.link}>
            <span className={loginCSS.span}>|</span>
            </div>
            <div className={loginCSS.link}>
            <p className={loginCSS.found}><NavLink to="/found">找回密码</NavLink></p>
            </div>
            <div >
            <Icon type="mobile" className={loginCSS.mobile} />
            <Icon type="lock" className={loginCSS.lock} />
            </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}