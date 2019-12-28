import React from 'react'
import {Link,BrowserRouter,Route} from 'react-router-dom'
import { Menu, Dropdown, Icon, Button,message,Input } from 'antd';
var movieCSS= require('./movie.css')
const { Search } = Input;

const onClick = ({ key }) => {
    message.info(`跳转成功 ${key}`);
  };
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1"><Link to="/login">一个母亲的复仇</Link></Menu.Item>
      <Menu.Item key="2">大侦探皮卡丘</Menu.Item>
      <Menu.Item key="3">何以为家</Menu.Item>
    </Menu>
  );
export default class Movie extends React.Component{

    render(){
        
        return(
            <div className={movieCSS.act}>
                
                <div className={movieCSS.header}>
           <div className={movieCSS.headerys}>
               <Link to="/homepage">天天影视</Link>
               </div>
            <div className={movieCSS.search}>
                <Search placeholder="一个母亲的复仇" onSearch={value => console.log(value)} enterButton />
            </div>
            <div className={movieCSS.lh}>
                <div className={movieCSS.login}>
                    <Link to="/login">立即登录</Link>
                </div><div className={movieCSS.span}>
                <span>|</span></div>
                <div className={movieCSS.history}>
                <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                历史记录<Icon type="down" />
                </a>
                </Dropdown>
                </div>
                </div>
            </div>
            <div>
                <p>{this.props.Movie.poster}</p>
                <p>{this.props.Movie.name}</p>
               <Button> <p>{this.props.Movie.type}</p></Button>
                <p>{this.props.Movie.direction}</p>
                <p>{this.props.Movie.actor}</p>
                <p>{this.props.Movie.describe}</p>
            </div></div>
        )
    }
}