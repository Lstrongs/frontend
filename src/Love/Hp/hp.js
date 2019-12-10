import React from 'react'
import { Pagination } from 'antd';
import {Link,BrowserRouter,Route} from 'react-router-dom'

var HpCSS= require('./hp.css')




export default class HpPage extends React.Component{
    
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
            
            <div className={HpCSS.ry}>
                <div className={HpCSS.movie1}>
                        <Link to="/play">
                            <div className={HpCSS.movie1-1}>
                            <img src="https://p.ssl.qhimg.com/d/dy_d92ac8b83cde9acae05230a134b86b40.jpg"></img>
                                </div>
                            <div className={HpCSS.detail1}>
                                <p className={HpCSS.name1}>
                                    <span className={HpCSS.n1}>十里寒路赢天下</span>
                                </p>
                                <p className={HpCSS.star1}>主演：秦晓飞 庄晓彤 郁仲</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HpCSS.movie2}>
                            <Link to="/play">
                            <div className={HpCSS.movie1-2}>
                            <img src="https://p.ssl.qhimg.com/d/dy_e9b18bce3db7d1651d6e1ee76b1b6648.jpg"></img>
                                </div>
                            <div className={HpCSS.detail2}>
                                <p className={HpCSS.name2}>
                                    <span className={HpCSS.n2}>花与将</span>
                                </p>
                                <p className={HpCSS.star2}>主演：史经宇 奚美丽 王歆霆 柏程俊</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HpCSS.movie3}>
                            <Link to="/play">
                            <div className={HpCSS.movie1-3}>
                            <img src="https://p.ssl.qhimg.com/d/dy_7760809c111675179082a61e49b89ddb.jpg"></img>
                                </div>
                            <div className={HpCSS.detail3}>
                                <p className={HpCSS.name3}>
                                    <span className={HpCSS.n3}>在切瑟尔海滩上</span>
                                </p>
                                <p className={HpCSS.star3}>主演：西尔莎·罗南 艾米丽·沃森 安-玛莉·杜芙</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HpCSS.movie4}>
                            <Link to="/play">
                            <div className={HpCSS.movie1-4}>
                            <img src="https://p.ssl.qhimg.com/d/dy_6b4f82206015b113b8243324530009b1.jpg"></img>
                                </div>
                            <div className={HpCSS.detail4}>
                                <p className={HpCSS.name4}>
                                    <span className={HpCSS.n4}>腐女的欲望</span>
                                </p>
                                <p className={HpCSS.star4}>主演：芦伟 逗号 肖文庭 霍金</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HpCSS.movie5}>
                            <Link to="/play">
                            <div className={HpCSS.movie1-5}>
                            <img src="https://p.ssl.qhimg.com/d/dy_0257a99b25102683eaff33c29b1a89af.jpg"></img>
                                </div>
                            <div className={HpCSS.detail5}>
                                <p className={HpCSS.name5}>
                                    <span className={HpCSS.n5}>乱世后宫：红发美人</span>
                                </p>
                                <p className={HpCSS.star5}>主演：郭勐</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HpCSS.movie6}>
                            <Link to="/play">
                            <div className={HpCSS.movie1-6}>
                            <img src="https://p.ssl.qhimg.com/d/dy_a5ddaf3a3be26f4d94d843d1386fb272.jpg"></img>
                                </div>
                            <div className={HpCSS.detail6}>
                                <p className={HpCSS.name6}>
                                    <span className={HpCSS.n6}>鬼子也疯狂</span>
                                </p>
                                <p className={HpCSS.star6}>主演：高子涵 张美娥</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HpCSS.movie7}>
                            <Link to="/play">
                            <div className={HpCSS.movie1-7}>
                            <img src="https://p.ssl.qhimg.com/d/dy_1e4942a24b89c2839e02c073277ec94b.jpg"></img>
                                </div>
                            <div className={HpCSS.detail7}>
                                <p className={HpCSS.name7}>
                                    <span className={HpCSS.n7}>铃魔传</span>
                                </p>
                                <p className={HpCSS.star7}>主演：王洋</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HpCSS.movie8}>
                            <Link to="/play">
                            <div className={HpCSS.movie1-8}>
                            <img src="https://p.ssl.qhimg.com/d/dy_99ffe5545bf29bafea20294be2b57289.jpg"></img>
                                </div>
                            <div className={HpCSS.detail8}>
                                <p className={HpCSS.name8}>
                                    <span className={HpCSS.n8}>天啊，我的太子殿下</span>
                                </p>
                                <p className={HpCSS.star8}>主演：冯芷墨 孙子航</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HpCSS.movie9}>
                            <Link to="/play">
                            <div className={HpCSS.movie1-9}>
                            <img src="https://p.ssl.qhimg.com/d/dy_dc137b79522f959c756b502dc87c4256.jpg"></img>
                                </div>
                            <div className={HpCSS.detail9}>
                                <p className={HpCSS.name9}>
                                    <span className={HpCSS.n9}>芊叶长笙伏魔篇</span>
                                </p>
                                <p className={HpCSS.star9}>主演：金玲</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HpCSS.movie10}>
                        <Link to="/play">
                            <div className={HpCSS.movie1-10}>
                            <img src="https://p.ssl.qhimg.com/d/dy_016326bf16ba03358f728086eeff9fd6.jpg"></img>
                                </div>
                            <div className={HpCSS.detail10}>
                                <p className={HpCSS.name10}>
                                    <span className={HpCSS.n10}>盖世英雄</span>
                                </p>
                                <p className={HpCSS.star10}>主演：何蓝逗 森竣</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HpCSS.page}>
                                 <Pagination current={this.state.current} onChange={this.onChange} total={50} />
                            </div>
            </div>
        )
    }
}