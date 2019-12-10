import React from 'react'
import {Link,BrowserRouter,Route} from 'react-router-dom'
import RyPage from './Ry/ry';
import SyPage from './Sy/sy';
import HpPage from './Hp/hp';
import { Menu, Dropdown, Icon, message,Input } from 'antd';
var actCSS= require('./act.css')
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
  
export default class ActPage extends React.Component{
    render(){
        return(
            <div className={actCSS.act}>
                <div className={actCSS.header}>
           <div className={actCSS.headerys}>
               <Link to="/homepage">天天影视</Link>
               </div>
            <div className={actCSS.search}>
                <Search placeholder="一个母亲的复仇" onSearch={value => console.log(value)} enterButton />
            </div>
            <div className={actCSS.lh}>
                <div className={actCSS.login}>
                    <Link to="/login">立即登录</Link>
                </div><div className={actCSS.span}>
                <span>|</span></div>
                <div className={actCSS.history}>
                <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                历史记录<Icon type="down" />
                </a>
                </Dropdown>
                </div>
                <div className={actCSS.history}></div>
                </div>
            </div>
            <div className={actCSS.body1}>
                
                <div className={actCSS.type}>
                    <div className={actCSS.dl1}>
                    <dl className={actCSS.dl1}><dt className={actCSS.dt1}>类型:</dt>
                    <dd className={actCSS.dd1}>
                        <a><Link to="/act/ry">动作</Link></a>
                        <a><Link to="/comedy/ry">喜剧</Link></a>
                        <a><Link to="/love/ry">爱情</Link></a>
                        <a><Link to="/act/sy">恐怖</Link></a>
                        <a><Link to="/act/hp">科幻</Link></a>
                        <a><Link to="/act/sy">剧情</Link></a>
                        <a><Link to="/act/hp">犯罪</Link></a>
                        <a><Link to="/act/sy">惊悚</Link></a>
                        <a><Link to="/act/hp">悬疑</Link></a>
                        <a><Link to="/act/sy">文艺</Link></a>
                        <a><Link to="/act/hp">战争</Link></a>
                        <a><Link to="/act/sy">伦理</Link></a>
                        <a><Link to="/act/hp">记录</Link></a>
                        <a><Link to="/act/sy">动画</Link></a>
                        </dd>
                        </dl>
                        </div>
                    <div className={actCSS.dl2}>
                    <dl className={actCSS.dl2}><dt className={actCSS.dt2}>地区:</dt>
                    <dd className={actCSS.dd2}>
                        <a><Link to="/act/hp">美国</Link></a>
                        <a><Link to="/act/sy">大陆</Link></a>
                        <a><Link to="/act/hp">香港</Link></a>
                        <a><Link to="/act/ry">韩国</Link></a>
                        <a><Link to="/act/sy">日本</Link></a>
                        <a><Link to="/act/hp">法国</Link></a>
                        <a><Link to="/act/ry">英国</Link></a>
                        <a><Link to="/act/hp">台湾</Link></a>
                        <a><Link to="/act/sy">泰国</Link></a>
                        <a><Link to="/act/hp">印度</Link></a>
                        <a><Link to="/act/sy">其他</Link></a>
                    </dd></dl></div>
                         </div>
                        <div className={actCSS.movie}>
                            
                            <div className={actCSS.ry}> <Link to="/act/ry">最近热映</Link></div>
                            <div className={actCSS.sy}><Link to="/act/sy">最近上映</Link></div>
                            <div className={actCSS.hp}><Link to="/act/hp">最受好评</Link></div>
                            
                            </div>
                            <div>
                <Route path="/act/hp" component={HpPage}></Route>
               <Route path="/act/ry" component={RyPage}></Route>
               <Route path="/act/sy" component={SyPage}></Route>
               </div>
            </div>
              
            </div>
        )
    }
}