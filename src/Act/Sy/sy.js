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
                            <img src="https://p.ssl.qhimg.com/d/dy_331b0e81a3f6488b0385a37e7a8b5176.jpg"></img>
                                </div>
                            <div className={SyCSS.detail1}>
                                <p className={SyCSS.name1}>
                                    <span className={SyCSS.n1}>生化危机4：来生</span>
                                </p>
                                <p className={SyCSS.star1}>主演：米拉·乔沃维奇 艾丽·拉特 文特沃斯·米勒 金·寇兹 肖恩·罗伯茨</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SyCSS.movie2}>
                            <Link to="/play">
                            <div className={SyCSS.movie1-2}>
                            <img src="https://p.ssl.qhimg.com/d/dy_2fe4e058a6ca0b57c5dc11423071b98d.jpg"></img>
                                </div>
                            <div className={SyCSS.detail2}>
                                <p className={SyCSS.name2}>
                                    <span className={SyCSS.n2}>火烧少林寺</span>
                                </p>
                                <p className={SyCSS.star2}>主演：嘉凌 黄家达 张翼 卫子云 易原</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SyCSS.movie3}>
                            <Link to="/play">
                            <div className={SyCSS.movie1-3}>
                            <img src="https://p.ssl.qhimg.com/d/dy_cbd7a2277831ccfb0bca259cf5bd7e5e.jpg"></img>
                                </div>
                            <div className={SyCSS.detail3}>
                                <p className={SyCSS.name3}>
                                    <span className={SyCSS.n3}>杀出恶人谷</span>
                                </p>
                                <p className={SyCSS.star3}>主演：圣伊龙 刘月涛</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SyCSS.movie4}>
                            <Link to="/play">
                            <div className={SyCSS.movie1-4}>
                            <img src="https://p.ssl.qhimg.com/d/dy_a822fff07500c9e67de190f3b3d5c622.jpg"></img>
                                </div>
                            <div className={SyCSS.detail4}>
                                <p className={SyCSS.name4}>
                                    <span className={SyCSS.n4}>捉妖道长联盟之护国宝藏</span>
                                </p>
                                <p className={SyCSS.star4}>主演：高帆 王依彤 熊芮拉拉 熊怡 张劲超</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SyCSS.movie5}>
                            <Link to="/play">
                            <div className={SyCSS.movie1-5}>
                            <img src="https://p.ssl.qhimg.com/d/dy_6346701f8459d5df8f114de18f01779c.jpg"></img>
                                </div>
                            <div className={SyCSS.detail5}>
                                <p className={SyCSS.name5}>
                                    <span className={SyCSS.n5}>皇上命我来选妃</span>
                                </p>
                                <p className={SyCSS.star5}>主演：崔金迪</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SyCSS.movie6}>
                            <Link to="/play">
                            <div className={SyCSS.movie1-6}>
                            <img src="https://p.ssl.qhimg.com/d/dy_2fe4e058a6ca0b57c5dc11423071b98d.jpg"></img>
                                </div>
                            <div className={SyCSS.detail6}>
                                <p className={SyCSS.name6}>
                                    <span className={SyCSS.n6}>火烧少林寺</span>
                                </p>
                                <p className={SyCSS.star6}>主演：嘉凌 黄家达 张翼 卫子云 易原</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SyCSS.movie7}>
                            <Link to="/play">
                            <div className={SyCSS.movie1-7}>
                            <img src="https://p.ssl.qhimg.com/d/dy_c9216f5a6bdb26365e90c1271b0832d3.jpg"></img>
                                </div>
                            <div className={SyCSS.detail7}>
                                <p className={SyCSS.name7}>
                                    <span className={SyCSS.n7}>狄仁杰之西域妖姬</span>
                                </p>
                                <p className={SyCSS.star7}>主演：程启蒙 杨琪芳 姜震昊 李竹君</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SyCSS.movie8}>
                            <Link to="/play">
                            <div className={SyCSS.movie1-8}>
                            <img src="https://p.ssl.qhimg.com/d/dy_8ce8a30add595a906e0628815c43a33b.jpg"></img>
                                </div>
                            <div className={SyCSS.detail8}>
                                <p className={SyCSS.name8}>
                                    <span className={SyCSS.n8}>绝命特工</span>
                                </p>
                                <p className={SyCSS.star8}>主演：Vyacheslav Krikunov Aleksandr Samoylenko Artyom Tkachenko 阿尔乔姆·特卡琴科</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SyCSS.movie9}>
                            <Link to="/play">
                            <div className={SyCSS.movie1-9}>
                            <img src="https://p.ssl.qhimg.com/d/dy_efa38f21e2a8be318ef7605a5d766411.jpg"></img>
                                </div>
                            <div className={SyCSS.detail9}>
                                <p className={SyCSS.name9}>
                                    <span className={SyCSS.n9}>狄仁杰之蚩尤血藤</span>
                                </p>
                                <p className={SyCSS.star9}>主演：杜奕衡 文卓 花钰杰 舒杨</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SyCSS.movie10}>
                        <Link to="/play">
                            <div className={SyCSS.movie1-10}>
                            <img src="https://p.ssl.qhimg.com/d/dy_e723c9b60eda353a6dd118f82b7765a0.jpg"></img>
                                </div>
                            <div className={SyCSS.detail10}>
                                <p className={SyCSS.name10}>
                                    <span className={SyCSS.n10}>魅影特工</span>
                                </p>
                                <p className={SyCSS.star10}>主演：刘小乔</p>
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