import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import {  Icon,Button,Input,message } from 'antd';
var loginCSS= require('./login.css')

export default class LoginPage extends React.Component{

    constructor(props){
        super(props)
        this.state={}
    }
    changeValue = e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    upload =()=>{
        var data={
            "username":this.state.username,
            "password":this.state.password,
        }
        fetch("",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }).then(response=>response.json())
        .then(result=>{
            if(result.state==2){
                message.info("登录失败")
            }else if(result.state==1){
                message.info("登录成功")
            }      
        }).catch(e=>{
            message.error(e);
        })
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
            <Input type="text" name="username"  value={this.state.username} onChange={e=>this.changeValue(e)} placeholder="请输入手机号"></Input>
            </div>
            <div className={loginCSS.logink}>
            <Input type="text" name="password"  value={this.state.password} onChange={e=>this.changeValue(e)} placeholder="请输入密码"></Input>
            </div>
            <div className={loginCSS.loginS}>
            <Link to="/homepage">
            <Button onClick={this.upload} name="login">立即登录</Button></Link>
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