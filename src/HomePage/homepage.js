import React from 'react'
import DefaultHeader from './../Header/header'
import HistoryPage from './History/history';
import {Link,BrowserRouter,Route} from 'react-router-dom'
import SalePage from './Sale/sale';
import { Button } from 'antd';
import { Menu, Dropdown, Icon } from 'antd';
var HomePageCSS= require('./homepage.css')



export default class HomePage extends React.Component{
     
    render(){
     
        return(
            <div className={HomePageCSS.homePage}>
            <DefaultHeader/>
            <div className={HomePageCSS.type}>
            <div>
                    <dl className={HomePageCSS.dl1}><dt className={HomePageCSS.dt1}>类型:</dt>
                    <dd className={HomePageCSS.dd1}>
                        <a><Link to="/act/ry">动作</Link></a>
                        <a><Link to="/comedy/ry">喜剧</Link></a>
                        <a><Link to="/love/ry">爱情</Link></a>
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
                    <dl className={HomePageCSS.dl2}><dt className={HomePageCSS.dt2}>地区:</dt>
                    <dd className={HomePageCSS.dd2}>
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
                {/* <BrowserRouter basename="homepage"> */}
                <div className={HomePageCSS.list}>
                    电影排行榜
                <div className={HomePageCSS.list1}>
                <Link to="/act/ry"><Button shape="round" className={HomePageCSS.l1}>热播榜</Button></Link>
                </div></div>
                <div className={HomePageCSS.ry}>
               <div className={HomePageCSS.movie1}>
                        <Link to="/play">
                            <div className={HomePageCSS.movie1-1}>
                                <img src="https://p.ssl.qhimg.com/t0183b24336187e73af.jpg"></img>
                                </div>
                            <div className={HomePageCSS.detail1}>
                                <p className={HomePageCSS.name1}>
                                    <span className={HomePageCSS.n1}>金三角大营救</span>
                                </p>
                                <p className={HomePageCSS.star1}>主演：彭禺厶 于心妍 李乔丹</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HomePageCSS.movie2}>
                            <Link to="/play">
                            <div className={HomePageCSS.movie1-2}>
                            <img src="https://p.ssl.qhimg.com/d/dy_96f576b9cfe83a03619649a5a3c61494.jpg"></img>
                                </div>
                            <div className={HomePageCSS.detail2}>
                                <p className={HomePageCSS.name2}>
                                    <span className={HomePageCSS.n2}>霍家拳之威震山河</span>
                                </p>
                                <p className={HomePageCSS.star2}>主演：言杰 张蓝艺 李火火</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HomePageCSS.movie3}>
                            <Link to="/play">
                            <div className={HomePageCSS.movie1-3}>
                            <img src="https://p.ssl.qhimg.com/d/dy_5046bc92e385dc3ad6e2606b2b72535e.jpg"></img>
                                </div>
                            <div className={HomePageCSS.detail3}>
                                <p className={HomePageCSS.name3}>
                                    <span className={HomePageCSS.n3}>荒野猎人 国语</span>
                                </p>
                                <p className={HomePageCSS.star3}>主演：莱昂纳多·迪卡普里奥 汤姆·哈迪 威尔·保尔特 多姆纳尔·格里森 保罗·安德森</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HomePageCSS.movie4}>
                            <Link to="/play">
                            <div className={HomePageCSS.movie1-4}>
                            <img src="https://p.ssl.qhimg.com/d/dy_933186c4727b6616e89daa0b463a2041.jpg"></img>
                                </div>
                            <div className={HomePageCSS.detail4}>
                                <p className={HomePageCSS.name4}>
                                    <span className={HomePageCSS.n4}>格斗吧！</span>
                                </p>
                                <p className={HomePageCSS.star4}>主演：马志威 林耀声 葛文辉</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HomePageCSS.movie5}>
                            <Link to="/play">
                            <div className={HomePageCSS.movie1-5}>
                            <img src="https://p.ssl.qhimg.com/d/dy_2bbcdda6cd5b4e6fb48fe4af83656ab5.jpg"></img>
                                </div>
                            <div className={HomePageCSS.detail5}>
                                <p className={HomePageCSS.name5}>
                                    <span className={HomePageCSS.n5}>无痛侠（原声）</span>
                                </p>
                                <p className={HomePageCSS.star5}>主演：里瓦·阿罗拉 阿布希曼努·达萨尼 古山·德瓦亚 萨蒂亚吉特·加努</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HomePageCSS.movie6}>
                            <Link to="/play">
                            <div className={HomePageCSS.movie1-6}>
                            <img src="https://p.ssl.qhimg.com/d/dy_c36886cdea0eae42efff2bf83eeb54de.jpg"></img>
                                </div>
                            <div className={HomePageCSS.detail6}>
                                <p className={HomePageCSS.name6}>
                                    <span className={HomePageCSS.n6}>千局</span>
                                </p>
                                <p className={HomePageCSS.star6}>主演：张天文</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HomePageCSS.movie7}>
                            <Link to="/play">
                            <div className={HomePageCSS.movie1-7}>
                            <img src="https://p.ssl.qhimg.com/d/dy_4f8828806a084642b4cc56371726faa6.jpg"></img>
                                </div>
                            <div className={HomePageCSS.detail7}>
                                <p className={HomePageCSS.name7}>
                                    <span className={HomePageCSS.n7}>虎胆追凶</span>
                                </p>
                                <p className={HomePageCSS.star7}>主演：布鲁斯·威利斯 伊丽莎白·苏 文森特·多诺费奥</p>
                            </div>
                            </Link> 
                            </div>
            </div>
            <div>
            <Link to="/act/ry"><Button shape="round" className={HomePageCSS.dzb}>动作榜</Button></Link>
            </div>
            <div className={HomePageCSS.ry1}>
                <div className={HomePageCSS.movie1}>
                        <Link to="/play">
                            <div className={HomePageCSS.movie1-1}>
                            <img src="https://p.ssl.qhimg.com/d/dy_f9e937e5ac752af434093f757ad1de3b.jpg"></img>
                                </div>
                            <div className={HomePageCSS.detail1}>
                                <p className={HomePageCSS.name1}>
                                    <span className={HomePageCSS.n1}>神龙法师</span>
                                </p>
                                <p className={HomePageCSS.star1}>主演：邱雨铄 魏笑 张欣琦 梁证嘉 侯乃森</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HomePageCSS.movie2}>
                            <Link to="/play">
                            <div className={HomePageCSS.movie1-2}>
                            <img src="https://p.ssl.qhimg.com/t01f1abddf5e0c5686d.jpg"></img>
                                </div>
                            <div className={HomePageCSS.detail2}>
                                <p className={HomePageCSS.name2}>
                                    <span className={HomePageCSS.n2}>狂龙伏妖</span>
                                </p>
                                <p className={HomePageCSS.star2}>主演：陈浩民 肖明玉 吴浩</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HomePageCSS.movie3}>
                            <Link to="/play">
                            <div className={HomePageCSS.movie1-3}>
                            <img src="https://p.ssl.qhimg.com/d/dy_5e8588976f604b9a54f0ffb57f07a8a7.jpg"></img>
                                </div>
                            <div className={HomePageCSS.detail3}>
                                <p className={HomePageCSS.name3}>
                                    <span className={HomePageCSS.n3}>荒野女囚</span>
                                </p>
                                <p className={HomePageCSS.star3}>主演：张薰元 吕沅轩 张妍 张美琪 安娜塔莉亚·萨迪科娃</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HomePageCSS.movie4}>
                            <Link to="/play">
                            <div className={HomePageCSS.movie1-4}>
                            <img src="https://p.ssl.qhimg.com/d/dy_eb8c471e30057d8dd747a4eb544ed659.jpg"></img>
                                </div>
                            <div className={HomePageCSS.detail4}>
                                <p className={HomePageCSS.name4}>
                                    <span className={HomePageCSS.n4}>特种保镖2</span>
                                </p>
                                <p className={HomePageCSS.star4}>主演：张小帅 徐本源</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HomePageCSS.movie5}>
                            <Link to="/play">
                            <div className={HomePageCSS.movie1-5}>
                            <img src="https://p.ssl.qhimg.com/d/dy_07daab98ef6198a62ca49e926cd93120.jpeg"></img>
                                </div>
                            <div className={HomePageCSS.detail5}>
                                <p className={HomePageCSS.name5}>
                                    <span className={HomePageCSS.n5}>沙漠之狐</span>
                                </p>
                                <p className={HomePageCSS.star5}>主演：詹姆斯·梅森 Cedric Hardwicke 卢瑟·艾德勒 塞德里克·哈德威克 杰西卡·坦迪</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HomePageCSS.movie6}>
                            <Link to="/play">
                            <div className={HomePageCSS.movie1-6}>
                            <img src="https://p.ssl.qhimg.com/d/dy_a010125be1fd39b7ce6289dbc1993a17.jpg"></img>
                                </div>
                            <div className={HomePageCSS.detail6}>
                                <p className={HomePageCSS.name6}>
                                    <span className={HomePageCSS.n6}>黑战</span>
                                </p>
                                <p className={HomePageCSS.star6}>主演：张军</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HomePageCSS.movie7}>
                            <Link to="/play">
                            <div className={HomePageCSS.movie1-7}>
                            <img src="https://p.ssl.qhimg.com/d/dy_1cf77963d1f43426ed9e8e6c3e0b7197.jpg"></img>
                                </div>
                            <div className={HomePageCSS.detail7}>
                                <p className={HomePageCSS.name7}>
                                    <span className={HomePageCSS.n7}>降龙神掌苏乞儿</span>
                                </p>
                                <p className={HomePageCSS.star7}>主演：谢昀杉 丁柳雁</p>
                            </div>
                            </Link> 
                            </div>     
            </div>
            <div>
           
            </div>

               <div>
               <Route path="/homepage/history" component={HistoryPage}></Route>
                <Route path="/homepage/sale" component={SalePage}></Route>
               </div>
                {/* </BrowserRouter> */}
            </div>
        )
    }
}