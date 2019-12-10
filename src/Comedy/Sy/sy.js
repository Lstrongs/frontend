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
                            <img src="https://p.ssl.qhimg.com/d/dy_5fcf328f230a1346ae6866f92688dbcd.jpg"></img>
                                </div>
                            <div className={SyCSS.detail1}>
                                <p className={SyCSS.name1}>
                                    <span className={SyCSS.n1}>死磕到底</span>
                                </p>
                                <p className={SyCSS.star1}>主演：常胜</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SyCSS.movie2}>
                            <Link to="/play">
                            <div className={SyCSS.movie1-2}>
                            <img src="https://p.ssl.qhimg.com/d/dy_46a8f73be48b902d466da2827a76cead.jpg"></img>
                                </div>
                            <div className={SyCSS.detail2}>
                                <p className={SyCSS.name2}>
                                    <span className={SyCSS.n2}>新乌龙院之笑闹江湖</span>
                                </p>
                                <p className={SyCSS.star2}>主演：吴孟达 郝劭文 叶全真 宋小宝 曾志伟</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SyCSS.movie3}>
                            <Link to="/play">
                            <div className={SyCSS.movie1-3}>
                            <img src="https://p.ssl.qhimg.com/d/dy_856c9a8e60c164df16d225cac1edc131.jpg"></img>
                                </div>
                            <div className={SyCSS.detail3}>
                                <p className={SyCSS.name3}>
                                    <span className={SyCSS.n3}>张三丰之末世凶兵</span>
                                </p>
                                <p className={SyCSS.star3}>主演：刘屹宸 张洋 喻亢</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SyCSS.movie4}>
                            <Link to="/play">
                            <div className={SyCSS.movie1-4}>
                            <img src="https://p.ssl.qhimg.com/d/dy_918957ceb079dd78a215e51b9f861eb9.jpg"></img>
                                </div>
                            <div className={SyCSS.detail4}>
                                <p className={SyCSS.name4}>
                                    <span className={SyCSS.n4}>飞檐走壁</span>
                                </p>
                                <p className={SyCSS.star4}>主演：小沈龙 陆海涛 句号 东方健 杨小曼</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SyCSS.movie5}>
                            <Link to="/play">
                            <div className={SyCSS.movie1-5}>
                            <img src="https://p.ssl.qhimg.com/d/dy_598f14cf4b819a48f4119811df47849a.jpg"></img>
                                </div>
                            <div className={SyCSS.detail5}>
                                <p className={SyCSS.name5}>
                                    <span className={SyCSS.n5}>灵妖鉴之盘丝小仙</span>
                                </p>
                                <p className={SyCSS.star5}>主演：黄小超 邵伟诗</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SyCSS.movie6}>
                            <Link to="/play">
                            <div className={SyCSS.movie1-6}>
                            <img src="https://p.ssl.qhimg.com/d/dy_19c2cb2c27d081af677cbc17f1ddb47d.jpg"></img>
                                </div>
                            <div className={SyCSS.detail6}>
                                <p className={SyCSS.name6}>
                                    <span className={SyCSS.n6}>青春学堂</span>
                                </p>
                                <p className={SyCSS.star6}>主演：李敏豪 裴涩琪 裴瑟琪 安勇俊 白奉基</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SyCSS.movie7}>
                            <Link to="/play">
                            <div className={SyCSS.movie1-7}>
                            <img src="https://p.ssl.qhimg.com/d/dy_772bf1afdeb6d59293d9d13070e36bc4.jpg"></img>
                                </div>
                            <div className={SyCSS.detail7}>
                                <p className={SyCSS.name7}>
                                    <span className={SyCSS.n7}>大唐狐妖传</span>
                                </p>
                                <p className={SyCSS.star7}>主演：李晓恬</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SyCSS.movie8}>
                            <Link to="/play">
                            <div className={SyCSS.movie1-8}>
                            <img src="https://p.ssl.qhimg.com/d/dy_c5549d4978de3df37b6153347262f81c.jpg"></img>
                                </div>
                            <div className={SyCSS.detail8}>
                                <p className={SyCSS.name8}>
                                    <span className={SyCSS.n8}>白夜侠</span>
                                </p>
                                <p className={SyCSS.star8}>主演：谢苗 南笙 黄一山 何文辉</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SyCSS.movie9}>
                            <Link to="/play">
                            <div className={SyCSS.movie1-9}>
                            <img src="https://p.ssl.qhimg.com/d/dy_02f8c9ba5e5614c6b3666b7e9e8a4f48.jpg"></img>
                                </div>
                            <div className={SyCSS.detail9}>
                                <p className={SyCSS.name9}>
                                    <span className={SyCSS.n9}>江湖有道</span>
                                </p>
                                <p className={SyCSS.star9}>主演：陈小春 谭咏麟 伍咏薇 戚美珍</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SyCSS.movie10}>
                        <Link to="/play">
                            <div className={SyCSS.movie1-10}>
                            <img src="https://p.ssl.qhimg.com/d/dy_954111e20b4cd5a8c939204812f36373.jpg"></img>
                                </div>
                            <div className={SyCSS.detail10}>
                                <p className={SyCSS.name10}>
                                    <span className={SyCSS.n10}>前任的诱惑</span>
                                </p>
                                <p className={SyCSS.star10}>主演：梁鑫</p>
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