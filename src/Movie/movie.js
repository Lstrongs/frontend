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
      <Menu.Item key="1"><Link to="/play">一个母亲的复仇</Link></Menu.Item>
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

            <div className={movieCSS.body1}>
                <div className={movieCSS.bf}>
                <Link to="/video"><img src="https://p.ssl.qhimg.com/t0183b24336187e73af.jpg"></img>
                <p>{this.props.Movie.poster}</p></Link>
                </div>
            <div className={movieCSS.name}>
            <p>{this.props.Movie.name}</p>
            </div>
            <div className={movieCSS.scroe}>
              <p> {this.props.Movie.score}</p>
            </div>
            <div  className={movieCSS.type}>
                类型 :      
                    <Link to="/act/ry"><Button shape="round"  type="ghost" className={movieCSS.type1}><span>{this.props.Movie.type1}</span></Button></Link>
                    <Link to="/act/ry"><Button shape="round"  type="ghost" className={movieCSS.type2}><span>{this.props.Movie.type2}</span></Button></Link>
                    <Link to="/act/ry"><Button shape="round"  type="ghost" className={movieCSS.type3}><span>{this.props.Movie.type3}</span></Button></Link>
            <p className={movieCSS.year}>年代: {this.props.Movie.year}</p>
            <p className={movieCSS.place}>地区: {this.props.Movie.area}</p>
            <p className={movieCSS.director}>导演: {this.props.Movie.direction}</p>
            <p className={movieCSS.actor}>演员: {this.props.Movie.actor}</p>
            
            </div>
            <div className={movieCSS.ljbf}>
                <Link to="/video"><Button shape="round" type="ghost" className={movieCSS.ljbf1}>立即播放</Button></Link>
            </div>
            <div className={movieCSS.intro}>
            <p>{this.props.Movie.describe}</p>
           </div>
            </div>
                </div>
        )
    }
}