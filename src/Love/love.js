import React from 'react'
import {Link,BrowserRouter,Route} from 'react-router-dom'
import RyPage from './Ry/ry';
import SyPage from './Sy/sy';
import HpPage from './Hp/hp';
import { Menu, Dropdown, Icon, message,Input } from 'antd';
var loveCSS= require('./love.css')
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
  
export default class LovePage extends React.Component{
    render(){
        return(
            <div className={loveCSS.act}>
                <div className={loveCSS.header}>
           <div className={loveCSS.headerys}>
               <Link to="/homepage">天天影视</Link>
               </div>
            <div className={loveCSS.search}>
                <Search placeholder="一个母亲的复仇" onSearch={value => console.log(value)} enterButton />
            </div>
            <div className={loveCSS.lh}>
                <div className={loveCSS.login}>
                    <Link to="/login">立即登录</Link>
                </div><div className={loveCSS.span}>
                <span>|</span></div>
                <div className={loveCSS.history}>
                <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                历史记录<Icon type="down" />
                </a>
                </Dropdown>
                </div>
                <div className={loveCSS.history}></div>
                </div>
            </div>
            <div className={loveCSS.body1}>
                
                <div className={loveCSS.type}>
                    <div className={loveCSS.dl1}>
                    <dl className={loveCSS.dl1}><dt className={loveCSS.dt1}>类型:</dt>
                    <dd className={loveCSS.dd1}>
                        <a><Link to="/act/ry">动作</Link></a>
                        <a><Link to="/comedy/ry">喜剧</Link></a>
                        <a><Link to="/love/ry">爱情</Link></a>
                        <a><Link to="/love/hp">恐怖</Link></a>
                        <a><Link to="/love/sy">科幻</Link></a>
                        <a><Link to="/love/hp">剧情</Link></a>
                        <a><Link to="/love/sy">犯罪</Link></a>
                        <a><Link to="/love/ry">惊悚</Link></a>
                        <a><Link to="/love/hp">悬疑</Link></a>
                        <a><Link to="/love/sy">文艺</Link></a>
                        <a><Link to="/love/hp">战争</Link></a>
                        <a><Link to="/love/sy">伦理</Link></a>
                        <a><Link to="/love/hp">记录</Link></a>
                        <a><Link to="/love/ry">动画</Link></a>
                        </dd>
                        </dl>
                        </div>
                    <div className={loveCSS.dl2}>
                    <dl className={loveCSS.dl2}><dt className={loveCSS.dt2}>地区:</dt>
                    <dd className={loveCSS.dd2}>
                        <a><Link to="/act/hp">美国</Link></a>
                        <a><Link to="/comedy/hp">大陆</Link></a>
                        <a><Link to="/love/hp">香港</Link></a>
                        <a><Link to="/love/ry">韩国</Link></a>
                        <a><Link to="/love/hp">日本</Link></a>
                        <a><Link to="/love/sy">法国</Link></a>
                        <a><Link to="/love/hp">英国</Link></a>
                        <a><Link to="/love/sy">台湾</Link></a>
                        <a><Link to="/love/ry">泰国</Link></a>
                        <a><Link to="/love/hp">印度</Link></a>
                        <a><Link to="/love/sy">其他</Link></a>
                    </dd></dl></div>
                         </div>
                        <div className={loveCSS.movie}>
                            
                            <div className={loveCSS.ry}> <Link to="/love/ry">最近热映</Link></div>
                            <div className={loveCSS.sy}><Link to="/love/sy">最近上映</Link></div>
                            <div className={loveCSS.hp}><Link to="/love/hp">最受好评</Link></div>
                            
                            </div>
                            <div>
                <Route path="/love/hp" component={HpPage}></Route>
               <Route path="/love/ry" component={RyPage}></Route>
               <Route path="/love/sy" component={SyPage}></Route>
               </div>
            </div>
              
            </div>
        )
    }
}