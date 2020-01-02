import React from 'react'
import DefaultHeader from './../Header/header'
import { Input,Button } from 'antd';
import {Link,BrowserRouter,Route} from 'react-router-dom'
var HomePageCSS= require('./homepage.css')
export default class HomePage extends React.Component{

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
        "account":this.state.account,
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
           
        }else if(result.state==1){
            
        }      
    }).catch(e=>{
        
    })
}
  
    render(){
        return(
          <div className={HomePageCSS.login}>
            <DefaultHeader/>
          <div className={HomePageCSS.login1}>
          <div className={HomePageCSS.username}>
          <Input name="username" type="text" placeholder="管理员账号" className={HomePageCSS.account} name="account"value={this.state.account} onChange={e=>this.changeValue(e)}/>
          </div>
          <div className={HomePageCSS.password}>
          <Input.Password name="password" type="password" placeholder="密码" className={HomePageCSS.word} name="password"value={this.state.password} onChange={e=>this.changeValue(e)}/>
          </div>
          <div className={HomePageCSS.button}>
            <Link to="/Menu/menulist">
          <Button className={HomePageCSS.b} name="login" onClick={this.upload}>登录</Button></Link> 
          </div>
          </div>       
          
            </div>
        )
    }
}