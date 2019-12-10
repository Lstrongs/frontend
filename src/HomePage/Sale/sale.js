import React from 'react'
import {Link,BrowserRouter,Route} from 'react-router-dom'
var SaleCSS= require('./sale.css')
export default class SalePage extends React.Component{
    
    render(){
        return(
            
            <div className={SaleCSS.ry}>
                <div className={SaleCSS.movie1}>
                        <Link to="/found">
                            <div className={SaleCSS.movie1-1}>
                            <img src="https://p.ssl.qhimg.com/d/dy_f9e937e5ac752af434093f757ad1de3b.jpg"></img>
                                </div>
                            <div className={SaleCSS.detail1}>
                                <p className={SaleCSS.name1}>
                                    <span className={SaleCSS.n1}>神龙法师</span>
                                </p>
                                <p className={SaleCSS.star1}>主演：邱雨铄 魏笑 张欣琦 梁证嘉 侯乃森</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SaleCSS.movie2}>
                            <Link to="/found">
                            <div className={SaleCSS.movie1-2}>
                            <img src="https://p.ssl.qhimg.com/t01f1abddf5e0c5686d.jpg"></img>
                                </div>
                            <div className={SaleCSS.detail2}>
                                <p className={SaleCSS.name2}>
                                    <span className={SaleCSS.n2}>狂龙伏妖</span>
                                </p>
                                <p className={SaleCSS.star2}>主演：陈浩民 肖明玉 吴浩</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SaleCSS.movie3}>
                            <Link to="/found">
                            <div className={SaleCSS.movie1-3}>
                            <img src="https://p.ssl.qhimg.com/d/dy_5e8588976f604b9a54f0ffb57f07a8a7.jpg"></img>
                                </div>
                            <div className={SaleCSS.detail3}>
                                <p className={SaleCSS.name3}>
                                    <span className={SaleCSS.n3}>荒野女囚</span>
                                </p>
                                <p className={SaleCSS.star3}>主演：张薰元 吕沅轩 张妍 张美琪 安娜塔莉亚·萨迪科娃</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SaleCSS.movie4}>
                            <Link to="/found">
                            <div className={SaleCSS.movie1-4}>
                            <img src="https://p.ssl.qhimg.com/d/dy_eb8c471e30057d8dd747a4eb544ed659.jpg"></img>
                                </div>
                            <div className={SaleCSS.detail4}>
                                <p className={SaleCSS.name4}>
                                    <span className={SaleCSS.n4}>特种保镖2</span>
                                </p>
                                <p className={SaleCSS.star4}>主演：张小帅 徐本源</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SaleCSS.movie5}>
                            <Link to="/found">
                            <div className={SaleCSS.movie1-5}>
                            <img src="https://p.ssl.qhimg.com/d/dy_07daab98ef6198a62ca49e926cd93120.jpeg"></img>
                                </div>
                            <div className={SaleCSS.detail5}>
                                <p className={SaleCSS.name5}>
                                    <span className={SaleCSS.n5}>沙漠之狐</span>
                                </p>
                                <p className={SaleCSS.star5}>主演：詹姆斯·梅森 Cedric Hardwicke 卢瑟·艾德勒 塞德里克·哈德威克 杰西卡·坦迪</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SaleCSS.movie6}>
                            <Link to="/found">
                            <div className={SaleCSS.movie1-6}>
                            <img src="https://p.ssl.qhimg.com/d/dy_a010125be1fd39b7ce6289dbc1993a17.jpg"></img>
                                </div>
                            <div className={SaleCSS.detail6}>
                                <p className={SaleCSS.name6}>
                                    <span className={SaleCSS.n6}>黑战</span>
                                </p>
                                <p className={SaleCSS.star6}>主演：张军</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={SaleCSS.movie7}>
                            <Link to="/found">
                            <div className={SaleCSS.movie1-7}>
                            <img src="https://p.ssl.qhimg.com/d/dy_1cf77963d1f43426ed9e8e6c3e0b7197.jpg"></img>
                                </div>
                            <div className={SaleCSS.detail7}>
                                <p className={SaleCSS.name7}>
                                    <span className={SaleCSS.n7}>降龙神掌苏乞儿</span>
                                </p>
                                <p className={SaleCSS.star7}>主演：谢昀杉 丁柳雁</p>
                            </div>
                            </Link> 
                            </div>
                            
            </div>
        )
    }
}