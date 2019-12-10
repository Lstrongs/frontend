import React from 'react'
import { Pagination } from 'antd';
import {Link,BrowserRouter,Route} from 'react-router-dom'

var SyCSS= require('./sy.css')




export default class SyPage extends React.Component{
    
        state = {
          current: 3,
        };
      
        onChange = page => {
          console.log(page);
          this.setState({
            current: page,
          });
        };
    render(){
        return(
            
            <div className={SyCSS.ry}>
                <div className={SyCSS.movie1}>
                        <Link to="/play">
                            <div className={SyCSS.movie1-1}>
                            <img src="https://p.ssl.qhimg.com/d/dy_5221740b19ead165aa7ffb1a8a4d8f67.jpg"></img>
                                </div>
                            <div className={SyCSS.detail1}>
                                <p className={SyCSS.name1}>
                                    <span className={SyCSS.n1}>我的邻居是美女</span>
                                </p>
                                <p className={SyCSS.star1}>主演：王永健</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SyCSS.movie2}>
                            <Link to="/play">
                            <div className={SyCSS.movie1-2}>
                            <img src="https://p.ssl.qhimg.com/d/dy_19c2cb2c27d081af677cbc17f1ddb47d.jpg"></img>
                                </div>
                            <div className={SyCSS.detail2}>
                                <p className={SyCSS.name2}>
                                    <span className={SyCSS.n2}>青春学堂</span>
                                </p>
                                <p className={SyCSS.star2}>主演：李敏豪 裴涩琪 裴瑟琪 安勇俊 白奉基</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SyCSS.movie3}>
                            <Link to="/play">
                            <div className={SyCSS.movie1-3}>
                            <img src="https://p.ssl.qhimg.com/d/dy_116dcac6a8269cc67319cd943f3d6988.jpg"></img>
                                </div>
                            <div className={SyCSS.detail3}>
                                <p className={SyCSS.name3}>
                                    <span className={SyCSS.n3}>拳霸英雄</span>
                                </p>
                                <p className={SyCSS.star3}>主演：杨冰</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SyCSS.movie4}>
                            <Link to="/play">
                            <div className={SyCSS.movie1-4}>
                            <img src="https://p.ssl.qhimg.com/d/dy_176df761c3f9176d7ee162680ace4c07.jpg"></img>
                                </div>
                            <div className={SyCSS.detail4}>
                                <p className={SyCSS.name4}>
                                    <span className={SyCSS.n4}>无处安放</span>
                                </p>
                                <p className={SyCSS.star4}>主演：田川 格伊 刘恩尚 鲍丹 刘畅</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SyCSS.movie5}>
                            <Link to="/play">
                            <div className={SyCSS.movie1-5}>
                            <img src="https://p.ssl.qhimg.com/d/dy_7ef0380d8d4325e7036efa943ff08067.jpg"></img>
                                </div>
                            <div className={SyCSS.detail5}>
                                <p className={SyCSS.name5}>
                                    <span className={SyCSS.n5}>如意天书</span>
                                </p>
                                <p className={SyCSS.star5}>主演：陈信喆 姜萌轩 李菁 崔可</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SyCSS.movie6}>
                            <Link to="/play">
                            <div className={SyCSS.movie1-6}>
                            <img src="https://p.ssl.qhimg.com/d/dy_968753ea01dca1e91e9ff44c551590a8.jpg"></img>
                                </div>
                            <div className={SyCSS.detail6}>
                                <p className={SyCSS.name6}>
                                    <span className={SyCSS.n6}>情欲陷阱</span>
                                </p>
                                <p className={SyCSS.star6}>主演：Annett Renneberg Simon Boer Tomek Piotrowski Sophia Littkopf 安妮特·雷恩伯格</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SyCSS.movie7}>
                            <Link to="/play">
                            <div className={SyCSS.movie1-7}>
                            <img src="https://p.ssl.qhimg.com/d/dy_3ed19008102c727937f755b99c820f91.jpg"></img>
                                </div>
                            <div className={SyCSS.detail7}>
                                <p className={SyCSS.name7}>
                                    <span className={SyCSS.n7}>偷情画室</span>
                                </p>
                                <p className={SyCSS.star7}>主演：金泰佑 尹日峰 郑云姬 金丽珍 金丽妮</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SyCSS.movie8}>
                            <Link to="/play">
                            <div className={SyCSS.movie1-8}>
                            <img src="https://p.ssl.qhimg.com/d/dy_772bf1afdeb6d59293d9d13070e36bc4.jpg"></img>
                                </div>
                            <div className={SyCSS.detail8}>
                                <p className={SyCSS.name8}>
                                    <span className={SyCSS.n8}>大唐狐妖传</span>
                                </p>
                                <p className={SyCSS.star8}>主演：李晓恬</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SyCSS.movie9}>
                            <Link to="/play">
                            <div className={SyCSS.movie1-9}>
                            <img src="https://p.ssl.qhimg.com/d/dy_598f14cf4b819a48f4119811df47849a.jpg"></img>
                                </div>
                            <div className={SyCSS.detail9}>
                                <p className={SyCSS.name9}>
                                    <span className={SyCSS.n9}>灵妖鉴之盘丝小仙</span>
                                </p>
                                <p className={SyCSS.star9}>主演：黄小超 邵伟诗</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SyCSS.movie10}>
                        <Link to="/play">
                            <div className={SyCSS.movie1-10}>
                            <img src="https://p.ssl.qhimg.com/d/dy_c5549d4978de3df37b6153347262f81c.jpg"></img>
                                </div>
                            <div className={SyCSS.detail10}>
                                <p className={SyCSS.name10}>
                                    <span className={SyCSS.n10}>白夜侠</span>
                                </p>
                                <p className={SyCSS.star10}>主演：谢苗 南笙 黄一山 何文辉</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SyCSS.page}>
                                 <Pagination current={this.state.current} onChange={this.onChange} total={50} />
                            </div>
            </div>
        )
    }
}