import React from 'react'
import {Link,BrowserRouter,Route} from 'react-router-dom'
import { Menu, Dropdown, Icon, Button,message,Input } from 'antd';
var playCSS= require('./play.css')
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
  
export default class PlayPage extends React.Component{
    render(){
        return(
            <div className={playCSS.act}>
                <div className={playCSS.header}>
           <div className={playCSS.headerys}>
               <Link to="/homepage">天天影视</Link>
               </div>
            <div className={playCSS.search}>
                <Search placeholder="一个母亲的复仇" onSearch={value => console.log(value)} enterButton />
            </div>
            <div className={playCSS.lh}>
                <div className={playCSS.login}>
                    <Link to="/login">立即登录</Link>
                </div><div className={playCSS.span}>
                <span>|</span></div>
                <div className={playCSS.history}>
                <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                历史记录<Icon type="down" />
                </a>
                </Dropdown>
                </div>
                <div className={playCSS.history}></div>
                </div>
            </div>
            <div className={playCSS.body1}>
                <div className={playCSS.bf}>
                <Link to="/video"><img src="https://p.ssl.qhimg.com/t0183b24336187e73af.jpg"></img></Link></div>
            <div className={playCSS.name}>
                金三角大营救
            </div>
            <div className={playCSS.scroe}>
              <p>  5.9分</p>
            </div>
            <div  className={playCSS.type}>
                类型 :      
                    <Link to="/act/ry"><Button shape="round"  type="ghost" className={playCSS.type1}><span>动作</span></Button></Link>
                    <Link to="/act/ry"><Button shape="round"  type="ghost" className={playCSS.type2}><span>剧情</span></Button></Link>
                    <Link to="/act/ry"><Button shape="round"  type="ghost" className={playCSS.type3}><span>犯罪</span></Button></Link>
            <p className={playCSS.year}>年代 : 2018</p>
            <p className={playCSS.place}>地区 : 大陆</p>
            <p className={playCSS.director}>导演 : 张涛</p>
            <p className={playCSS.actor}>演员 : 彭禺厶/于心妍/李乔丹</p>
            
            </div>
            <div className={playCSS.ljbf}>
                <Link to="/video"><Button shape="round" type="ghost" className={playCSS.ljbf1}>立即播放</Button></Link>
            </div>
            <div className={playCSS.intro}>
           <p>简介 : 影片主要讲述了身世显赫的女主林歌阑，为了自己的记者梦，深入虎穴拍照调查，结果目睹毒贩团伙的杀人罪行，被毒枭绑架利用，甚至被注射新型毒品，其父为了爱女派出身份神秘，各怀绝技的五人小组前来营救的故事。而电影的最终聚焦点，则是在于守护正义，或者说是这场关于消灭毒品的战争上。</p>
           </div>
            </div>
           
            </div>
        )
    }
}