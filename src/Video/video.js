import React from 'react'
import {Link,BrowserRouter,Route} from 'react-router-dom'
import { Menu, Dropdown, Icon, Button,message,Input,Progress } from 'antd';
var videoCSS= require('./video.css')
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
  
export default class VideoPage extends React.Component{
    render(){
        return(
            <div className={videoCSS.act}>
                <div className={videoCSS.header}>
           <div className={videoCSS.headerys}>
               <Link to="/homepage">天天影视</Link>
               </div>
            <div className={videoCSS.search}>
                <Search placeholder="一个母亲的复仇" onSearch={value => console.log(value)} enterButton />
            </div>
            <div className={videoCSS.lh}>
                <div className={videoCSS.login}>
                    <Link to="/login">立即登录</Link>
                </div><div className={videoCSS.span}>
                <span>|</span></div>
                <div className={videoCSS.history}>
                <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                历史记录<Icon type="down" />
                </a>
                </Dropdown>
                </div>
                <div className={videoCSS.history}></div>
                </div>
            </div>
           
        <div className={videoCSS.body}>
        <div className={videoCSS.video}>
        <video className={videoCSS.sp}>
            <source src="" type=""></source>
            <source src="" type=""></source>
        </video>
            <div className={videoCSS.bf}>
        <div className={videoCSS.bf1}>
            <Button onclick="playPause()" className={videoCSS.bf2} shape="circle-outline"><Icon type="caret-right" /></Button>
            <Button onclick="makeBig()" className={videoCSS.bf3} shape="circle-outline"><Icon type="fullscreen" /></Button>
        </div>
        </div>
       <div className={videoCSS.name}>
           金三角大营救
           <h4>7.8分</h4>
       </div>
       <div className={videoCSS.intro}><p>简介 : 影片主要讲述了身世显赫的女主林歌阑，为了自己的记者梦，深入虎穴拍照调查，结果目睹毒贩团伙的杀人罪行，被毒枭绑架利用，甚至被注射新型毒品，其父为了爱女派出身份神秘，各怀绝技的五人小组前来营救的故事。而电影的最终聚焦点，则是在于守护正义，或者说是这场关于消灭毒品的战争上。</p></div>
        </div>
        </div>
        </div>
           
           
            
        )
    }
}