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
                            <img src="https://p.ssl.qhimg.com/d/dy_f9e937e5ac752af434093f757ad1de3b.jpg"></img>
                                </div>
                            <div className={HpCSS.detail1}>
                                <p className={HpCSS.name1}>
                                    <span className={HpCSS.n1}>神龙法师</span>
                                </p>
                                <p className={HpCSS.star1}>主演：邱雨铄 魏笑 张欣琦 梁证嘉 侯乃森</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HpCSS.movie2}>
                            <Link to="/play">
                            <div className={HpCSS.movie1-2}>
                            <img src="https://p.ssl.qhimg.com/t01f1abddf5e0c5686d.jpg"></img>
                                </div>
                            <div className={HpCSS.detail2}>
                                <p className={HpCSS.name2}>
                                    <span className={HpCSS.n2}>狂龙伏妖</span>
                                </p>
                                <p className={HpCSS.star2}>主演：陈浩民 肖明玉 吴浩</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HpCSS.movie3}>
                            <Link to="/play">
                            <div className={HpCSS.movie1-3}>
                            <img src="https://p.ssl.qhimg.com/d/dy_a5ddaf3a3be26f4d94d843d1386fb272.jpg"></img>
                                </div>
                            <div className={HpCSS.detail3}>
                                <p className={HpCSS.name3}>
                                    <span className={HpCSS.n3}>鬼子也疯狂</span>
                                </p>
                                <p className={HpCSS.star3}>主演：高子涵 张美娥</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HpCSS.movie4}>
                            <Link to="/play">
                            <div className={HpCSS.movie1-4}>
                            <img src="https://p.ssl.qhimg.com/d/dy_7c8ffb4a08a2f594595d82511ac7da63.jpg"></img>
                                </div>
                            <div className={HpCSS.detail4}>
                                <p className={HpCSS.name4}>
                                    <span className={HpCSS.n4}>乱世豪杰</span>
                                </p>
                                <p className={HpCSS.star4}>主演：王凤杰 康金凯 苗立蒙</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HpCSS.movie5}>
                            <Link to="/play">
                            <div className={HpCSS.movie1-5}>
                            <img src="https://p.ssl.qhimg.com/d/dy_99ffe5545bf29bafea20294be2b57289.jpg"></img>
                                </div>
                            <div className={HpCSS.detail5}>
                                <p className={HpCSS.name5}>
                                    <span className={HpCSS.n5}>天啊，我的太子殿下</span>
                                </p>
                                <p className={HpCSS.star5}>主演：冯芷墨 孙子航</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HpCSS.movie6}>
                            <Link to="/play">
                            <div className={HpCSS.movie1-6}>
                            <img src="https://p.ssl.qhimg.com/d/dy_df603c4bf4443d39977191d4e4ff475a.jpg"></img>
                                </div>
                            <div className={HpCSS.detail6}>
                                <p className={HpCSS.name6}>
                                    <span className={HpCSS.n6}>贴身女保镖</span>
                                </p>
                                <p className={HpCSS.star6}>主演：孔庆冰 于泽文 裴子添</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HpCSS.movie7}>
                            <Link to="/play">
                            <div className={HpCSS.movie1-7}>
                            <img src="https://p.ssl.qhimg.com/d/dy_1cf77963d1f43426ed9e8e6c3e0b7197.jpg"></img>
                                </div>
                            <div className={HpCSS.detail7}>
                                <p className={HpCSS.name7}>
                                    <span className={HpCSS.n7}>降龙神掌苏乞儿</span>
                                </p>
                                <p className={HpCSS.star7}>主演：谢昀杉 丁柳雁</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HpCSS.movie8}>
                            <Link to="/play">
                            <div className={HpCSS.movie1-8}>
                            <img src="https://p.ssl.qhimg.com/d/dy_f7f625f9da81f724b341306de788370a.jpg"></img>
                                </div>
                            <div className={HpCSS.detail8}>
                                <p className={HpCSS.name8}>
                                    <span className={HpCSS.n8}>超级老爸</span>
                                </p>
                                <p className={HpCSS.star8}>主演：石强</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HpCSS.movie9}>
                            <Link to="/play">
                            <div className={HpCSS.movie1-9}>
                            <img src="https://p.ssl.qhimg.com/d/dy_256fb1b5bf545208f680e1c2b936cbe0.jpg"></img>
                                </div>
                            <div className={HpCSS.detail9}>
                                <p className={HpCSS.name9}>
                                    <span className={HpCSS.n9}>怪物少女</span>
                                </p>
                                <p className={HpCSS.star9}>主演：建泽正</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HpCSS.movie10}>
                        <Link to="/play">
                            <div className={HpCSS.movie1-10}>
                            <img src="https://p.ssl.qhimg.com/d/dy_6be4ec35287b53979649e3d168db82c5.jpg"></img>
                                </div>
                            <div className={HpCSS.detail10}>
                                <p className={HpCSS.name10}>
                                    <span className={HpCSS.n10}>宝塔镇河妖之绝世妖龙</span>
                                </p>
                                <p className={HpCSS.star10}>主演：彭禺厶 何其炜 戴安娜</p>
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