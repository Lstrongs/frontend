import React from 'react'
import {Link,BrowserRouter,Route} from 'react-router-dom'
import { Menu, Dropdown, Icon, Button,message,Input } from 'antd';
var typeCSS= require('./type.css')

export default class type extends React.Component{

    render(){
        
        return(
            <div className={typeCSS.type}>
            <div>
                    <dl className={typeCSS.dl1}><dt className={typeCSS.dt1}>类型:</dt>
                    <dd className={typeCSS.dd1}>
                        <a><Link to="/act/ry">{this.props.type.type1}</Link></a>
                        <a><Link to="/comedy/ry">{this.props.type.type2}</Link></a>
                        <a><Link to="/love/ry">{this.props.type.type3}</Link></a>
                        <a><Link to="/act/ry">恐怖</Link></a>
                        <a><Link to="/act/sy">科幻</Link></a>
                        <a><Link to="/act/hp">剧情</Link></a>
                        <a><Link to="/love/ry">犯罪</Link></a>
                        <a><Link to="/love/sy">惊悚</Link></a>
                        <a><Link to="/love/hp">悬疑</Link></a>
                        <a><Link to="/comedy/ry">文艺</Link></a>
                        <a><Link to="/comedy/sy">战争</Link></a>
                        <a><Link to="/comedt/hp">伦理</Link></a>
                        </dd>
                        </dl>
                        </div>
                        <div>
                    <dl className={typeCSS.dl2}><dt className={typeCSS.dt2}>地区:</dt>
                    <dd className={typeCSS.dd2}>
                        <a><Link to="/act/hp">美国</Link></a>
                        <a><Link to="/comedy/hp">大陆</Link></a>
                        <a><Link to="/love/hp">香港</Link></a>
                        <a><Link to="/act/ry">韩国</Link></a>
                        <a><Link to="/act/sy">日本</Link></a>
                        <a><Link to="/act/hp">法国</Link></a>
                        <a><Link to="/love/ry">英国</Link></a>
                        <a><Link to="/love/sy">台湾</Link></a>
                        <a><Link to="/comedy/hp">泰国</Link></a>
                        <a><Link to="/comedy/sy">印度</Link></a>
                        <a><Link to="/comedy/ry">其他</Link></a>
                    </dd></dl></div>
                    </div>
        )
    }
}