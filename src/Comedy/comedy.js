import React from 'react'
import {Link,BrowserRouter,Route} from 'react-router-dom'
import RyPage from './Ry/ry';
import SyPage from './Sy/sy';
import HpPage from './Hp/hp';
import { Menu, Dropdown, Icon, message,Input } from 'antd';
var comedyCSS= require('./comedy.css')
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
  
export default class ComedyPage extends React.Component{
    render(){
        return(
            <div className={comedyCSS.act}>
                <div className={comedyCSS.header}>
           <div className={comedyCSS.headerys}>
               <Link to="/homepage">天天影视</Link>
               </div>
            <div className={comedyCSS.search}>
                <Search placeholder="一个母亲的复仇" onSearch={value => console.log(value)} enterButton />
            </div>
            <div className={comedyCSS.lh}>
                <div className={comedyCSS.login}>
                    <Link to="/login">立即登录</Link>
                </div><div className={comedyCSS.span}>
                <span>|</span></div>
                <div className={comedyCSS.history}>
                <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                历史记录<Icon type="down" />
                </a>
                </Dropdown>
                </div>
                <div className={comedyCSS.history}></div>
                </div>
            </div>
            <div className={comedyCSS.body1}>
                
                <div className={comedyCSS.type}>
                    <div className={comedyCSS.dl1}>
                    <dl className={comedyCSS.dl1}><dt className={comedyCSS.dt1}>类型:</dt>
                    <dd className={comedyCSS.dd1}>
                        <a><Link to="/act/ry">动作</Link></a>
                        <a><Link to="/comedy/ry">喜剧</Link></a>
                        <a><Link to="/love/ry">爱情</Link></a>
                        <a><Link to="/comedy/ry">恐怖</Link></a>
                        <a><Link to="/comedy/hp">科幻</Link></a>
                        <a><Link to="/comedy/sy">剧情</Link></a>
                        <a><Link to="/comedy/ry">犯罪</Link></a>
                        <a><Link to="/comedy/sy">惊悚</Link></a>
                        <a><Link to="/comedy/ry">悬疑</Link></a>
                        <a><Link to="/comedy/hp">文艺</Link></a>
                        <a><Link to="/comedy/sy">战争</Link></a>
                        <a><Link to="/comedy/hp">伦理</Link></a>
                        <a><Link to="/comedy/ry">记录</Link></a>
                        <a><Link to="/comedy/hp">动画</Link></a>
                        </dd>
                        </dl>
                        </div>
                    <div className={comedyCSS.dl2}>
                    <dl className={comedyCSS.dl2}><dt className={comedyCSS.dt2}>地区:</dt>
                    <dd className={comedyCSS.dd2}>
                        <a><Link to="/act/hp">美国</Link></a>
                        <a><Link to="/comedy/hp">大陆</Link></a>
                        <a><Link to="/love/hp">香港</Link></a>
                        <a><Link to="/comedy/hp">韩国</Link></a>
                        <a><Link to="/comedy/sy">日本</Link></a>
                        <a><Link to="/comedy/hp">法国</Link></a>
                        <a><Link to="/comedy/sy">英国</Link></a>
                        <a><Link to="/comedy/ry">台湾</Link></a>
                        <a><Link to="/comedy/hp">泰国</Link></a>
                        <a><Link to="/comedy/sy">印度</Link></a>
                        <a><Link to="/comedy/hp">其他</Link></a>
                    </dd></dl></div>
                         </div>
                        <div className={comedyCSS.movie}>
                            
                            <div className={comedyCSS.ry}> <Link to="/comedy/ry">最近热映</Link></div>
                            <div className={comedyCSS.sy}><Link to="/comedy/sy">最近上映</Link></div>
                            <div className={comedyCSS.hp}><Link to="/comedy/hp">最受好评</Link></div>
                            
                            </div>
                            <div>
                <Route path="/comedy/hp" component={HpPage}></Route>
               <Route path="/comedy/ry" component={RyPage}></Route>
               <Route path="/comedy/sy" component={SyPage}></Route>
               </div>
            </div>
              
            </div>
        )
    }
}