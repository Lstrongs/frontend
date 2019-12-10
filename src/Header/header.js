import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import { Menu, Dropdown, Icon, message, Button } from 'antd';
import { Carousel, } from 'antd';
var HeaderCSS = require('./header.css')

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


export default class DefaultHeader extends React.Component {
  state = {
    dotPosition: 'right',
  };
  handlePositionChange = ({ target: { value: dotPosition } }) => this.setState({ dotPosition });

  constructor(props){
    super(props)
    this.state={
        username:window.localStorage.getItem("username")
    }
  }

  logout = e=>{
    window.localStorage.removeItem("username")
    window.localStorage.removeItem("token")
    this.setState({
      username:null 
    })
  }

  render() {
    let userProfile=null;

    let username = window.localStorage.getItem("username")
    if(this.state.username!=null){
      userProfile=
      <div className={HeaderCSS.logout}>
        <NavLink to="/profile">{this.state.username}</NavLink>  <span> </span>
       <Link to="/homepage"><a  onClick={this.logout}>注销</a></Link>
      </div>
    }else{
      userProfile= <a className={HeaderCSS.headerl}><NavLink to="/login">登陆    </NavLink></a>
    }
    const { dotPosition } = this.state;
    return (
      <div className={HeaderCSS.header}>
        <div className={HeaderCSS.header1}>
          <a className={HeaderCSS.headertt}><Link to="/homepage">天天影视 </Link></a>
            {userProfile}
          <div className={HeaderCSS.headers}>
            <input placeholder="大侦探皮卡丘" type="text" name="name" ></input></div>
          <div>
            <button className={HeaderCSS.headersb}>全网搜</button>
          </div>
          <div className={HeaderCSS.menu}>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="#">
                历史记录<Icon type="down" />
              </a>
            </Dropdown>
          </div>
        </div>
        <div className={HeaderCSS.lbt}>
          <div>
            <Carousel dotPosition={dotPosition} autoplay className={HeaderCSS.lbt}>
              <div className={HeaderCSS.lbt1}></div>
              <div className={HeaderCSS.lbt2}></div>
              <div className={HeaderCSS.lbt3}></div>
              <div className={HeaderCSS.lbt4}></div>
            </Carousel>
          </div>
        </div>
      </div>

    )
  }
}