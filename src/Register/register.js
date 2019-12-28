import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import {  Icon, message,Button,Input } from 'antd';
var registerCSS= require('./register.css')

export default class RegisterPage extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    changeValue=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    upload =()=>{
        var data={
            "username":this.state.username,
            "password":this.state.password,
            "phonenumber":this.state.phonenumber,
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
                message.info("用户名已存在")
            }else if(result.state==1){
                message.info("注册成功")
            }      
        }).catch(e=>{
            message.error(e);
        })
    }

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
            <Input type="text" placeholder="请输入手机号" name="phonenumber"value={this.state.phonenumber} onChange={e=>this.changeValue(e)}></Input>
            </div>
            <div className={registerCSS.registery}>
            <a><Input type="text" placeholder="用户名" name="username" value={this.state.username} onChange={e=>this.changeValue(e)}></Input></a>
            </div> 
            <div className={registerCSS.registersr}>
            <a><Input type="text" placeholder="请输入6-18位密码，字母/数字/符号" name="password" value={this.state.password} onChange={e=>this.changeValue(e)} ></Input></a>
            </div>
            <div className={registerCSS.registerl}>
            <Link to="/homepage">
            <Button name="register" onClick={this.upload}>注册</Button></Link>
            </div>
            <div className={registerCSS.registerla}>
                <Link to="/login">登录</Link>
                <span> | </span>
                <Link to="/found">找回密码</Link>
            </div>
            <div className={registerCSS.Icon}>
            <Icon type="mobile" className={registerCSS.mobile} />
            <Icon type="user" className={registerCSS.user} />
            <Icon type="lock" className={registerCSS.lock} />
            </div>
            </div>
            </div>
            </div>
        )
    }
}