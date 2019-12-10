import React from 'react'
import { Pagination } from 'antd';
import {Link,BrowserRouter,Route} from 'react-router-dom'

var RyCSS= require('./ry.css')




export default class RyPage extends React.Component{
    
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
            
            <div className={RyCSS.ry}>
                <div className={RyCSS.movie1}>
                        <Link to="/play">
                            <div className={RyCSS.movie1-1}>
                            <img src="https://p.ssl.qhimg.com/d/dy_7a72582b11cccd29a4d1d21ef7355200.jpg"></img>
                                </div>
                            <div className={RyCSS.detail1}>
                                <p className={RyCSS.name1}>
                                    <span className={RyCSS.n1}>陈翔六点半之铁头无敌</span>
                                </p>
                                <p className={RyCSS.star1}>主演：陈翔 妹大爷 毛台 蘑菇头 闰土</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={RyCSS.movie2}>
                            <Link to="/play">
                            <div className={RyCSS.movie1-2}>
                            <img src="https://p.ssl.qhimg.com/d/dy_3bd197e2306d4a6760a3adfd0f353794.jpg"></img>
                                </div>
                            <div className={RyCSS.detail2}>
                                <p className={RyCSS.name2}>
                                    <span className={RyCSS.n2}>天生喜剧王</span>
                                </p>
                                <p className={RyCSS.star2}>主演：程琢 韩千雨 李祎玮</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={RyCSS.movie3}>
                            <Link to="/play">
                            <div className={RyCSS.movie1-3}>
                            <img src="https://p.ssl.qhimg.com/d/dy_351a8c5c46e0ea1b0e0d25ade98de001.jpg"></img>
                                </div>
                            <div className={RyCSS.detail3}>
                                <p className={RyCSS.name3}>
                                    <span className={RyCSS.n3}>逃学威龙3</span>
                                </p>
                                <p className={RyCSS.star3}>主演：周星驰 梅艳芳 梁家仁 陈百祥 黄秋生</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={RyCSS.movie4}>
                            <Link to="/play">
                            <div className={RyCSS.movie1-4}>
                            <img src="https://p.ssl.qhimg.com/d/dy_63433fd1fa044147eb252a92268ccf00.jpg"></img>
                                </div>
                            <div className={RyCSS.detail4}>
                                <p className={RyCSS.name4}>
                                    <span className={RyCSS.n4}>乱世豪情</span>
                                </p>
                                <p className={RyCSS.star4}>主演：张浩 晋松 张厦 浩哥</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={RyCSS.movie5}>
                            <Link to="/play">
                            <div className={RyCSS.movie1-5}>
                            <img src="https://p.ssl.qhimg.com/d/dy_3242b879336acd89c9cdcbe93eef2d17.jpg"></img>
                                </div>
                            <div className={RyCSS.detail5}>
                                <p className={RyCSS.name5}>
                                    <span className={RyCSS.n5}>七年之痒2018</span>
                                </p>
                                <p className={RyCSS.star5}>主演：常玉虎</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={RyCSS.movie6}>
                            <Link to="/play">
                            <div className={RyCSS.movie1-6}>
                            <img src="https://p.ssl.qhimg.com/d/dy_8b15418fcdf4e63acfa2420f27b44615.jpg"></img>
                                </div>
                            <div className={RyCSS.detail6}>
                                <p className={RyCSS.name6}>
                                    <span className={RyCSS.n6}>疯狂试爱2</span>
                                </p>
                                <p className={RyCSS.star6}>主演：花儿 孔燕黎 刘小乔 王强强 吴海波</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={RyCSS.movie7}>
                            <Link to="/play">
                            <div className={RyCSS.movie1-7}>
                            <img src="https://p.ssl.qhimg.com/d/dy_6346701f8459d5df8f114de18f01779c.jpg"></img>
                                </div>
                            <div className={RyCSS.detail7}>
                                <p className={RyCSS.name7}>
                                    <span className={RyCSS.n7}>皇上命我来选妃</span>
                                </p>
                                <p className={RyCSS.star7}>主演：崔金迪</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={RyCSS.movie8}>
                            <Link to="/play">
                            <div className={RyCSS.movie1-8}>
                            <img src="https://p.ssl.qhimg.com/d/dy_cbd7a2277831ccfb0bca259cf5bd7e5e.jpg"></img>
                                </div>
                            <div className={RyCSS.detail8}>
                                <p className={RyCSS.name8}>
                                    <span className={RyCSS.n8}>杀出恶人谷</span>
                                </p>
                                <p className={RyCSS.star8}>主演：圣伊龙 刘月涛</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={RyCSS.movie9}>
                            <Link to="/play">
                            <div className={RyCSS.movie1-9}>
                            <img src="https://p.ssl.qhimg.com/d/dy_7e2e70c4de62c5b0ef5631b21fac8417.jpg"></img>
                                </div>
                            <div className={RyCSS.detail9}>
                                <p className={RyCSS.name9}>
                                    <span className={RyCSS.n9}>阿凡提之奇缘历险记</span>
                                </p>
                                <p className={RyCSS.star9}>主演：胡谦 李晔 蒋可 李扬 游军</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={RyCSS.movie10}>
                        <Link to="/play">
                            <div className={RyCSS.movie1-10}>
                            <img src="https://p.ssl.qhimg.com/d/dy_a822fff07500c9e67de190f3b3d5c622.jpg"></img>
                                </div>
                            <div className={RyCSS.detail10}>
                                <p className={RyCSS.name10}>
                                    <span className={RyCSS.n10}>捉妖道长联盟之护国宝藏</span>
                                </p>
                                <p className={RyCSS.star10}>主演：高帆 王依彤 熊芮拉拉 熊怡 张劲超</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={RyCSS.page}>
                                 <Pagination current={this.state.current} onChange={this.onChange} total={50} />
                            </div>
            </div>
        )
    }
}