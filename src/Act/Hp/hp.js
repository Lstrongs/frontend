import React from 'react'
import { Pagination } from 'antd';
import {Link,BrowserRouter,Route} from 'react-router-dom'

var HpCSS= require('./hp.css')




export default class HpPage extends React.Component{
    
        constructor(props){
            super(props)
            this.state = {
                current: 3,
                movieData:[]
              };
        }      
      
        onChange = page => {
          console.log(page);
          this.setState({
            current: page
          });
        };
        componentWillMount(){
            
        }
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
                                    <span className={HpCSS.n1}>神龙法师变化</span>
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
                            <img src="https://p.ssl.qhimg.com/d/dy_5e8588976f604b9a54f0ffb57f07a8a7.jpg"></img>
                                </div>
                            <div className={HpCSS.detail3}>
                                <p className={HpCSS.name3}>
                                    <span className={HpCSS.n3}>荒野女囚</span>
                                </p>
                                <p className={HpCSS.star3}>主演：张薰元 吕沅轩 张妍 张美琪 安娜塔莉亚·萨迪科娃</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HpCSS.movie4}>
                            <Link to="/play">
                            <div className={HpCSS.movie1-4}>
                            <img src="https://p.ssl.qhimg.com/d/dy_eb8c471e30057d8dd747a4eb544ed659.jpg"></img>
                                </div>
                            <div className={HpCSS.detail4}>
                                <p className={HpCSS.name4}>
                                    <span className={HpCSS.n4}>特种保镖2</span>
                                </p>
                                <p className={HpCSS.star4}>主演：张小帅 徐本源</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HpCSS.movie5}>
                            <Link to="/play">
                            <div className={HpCSS.movie1-5}>
                            <img src="https://p.ssl.qhimg.com/d/dy_07daab98ef6198a62ca49e926cd93120.jpeg"></img>
                                </div>
                            <div className={HpCSS.detail5}>
                                <p className={HpCSS.name5}>
                                    <span className={HpCSS.n5}>沙漠之狐</span>
                                </p>
                                <p className={HpCSS.star5}>主演：詹姆斯·梅森 Cedric Hardwicke 卢瑟·艾德勒 塞德里克·哈德威克 杰西卡·坦迪</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HpCSS.movie6}>
                            <Link to="/play">
                            <div className={HpCSS.movie1-6}>
                            <img src="https://p.ssl.qhimg.com/d/dy_a010125be1fd39b7ce6289dbc1993a17.jpg"></img>
                                </div>
                            <div className={HpCSS.detail6}>
                                <p className={HpCSS.name6}>
                                    <span className={HpCSS.n6}>黑战</span>
                                </p>
                                <p className={HpCSS.star6}>主演：张军</p>
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
                            <img src="https://p.ssl.qhimg.com/d/dy_c3f36ab19490bb22888e85d7fc93c568.jpg"></img>
                                </div>
                            <div className={HpCSS.detail8}>
                                <p className={HpCSS.name8}>
                                    <span className={HpCSS.n8}>京武火龙</span>
                                </p>
                                <p className={HpCSS.star8}>主演：李乾铭</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HpCSS.movie9}>
                            <Link to="/play">
                            <div className={HpCSS.movie1-9}>
                            <img src="https://p.ssl.qhimg.com/d/dy_5e4297fa09dcc731beb8a56fc1cfd8e6.jpg"></img>
                                </div>
                            <div className={HpCSS.detail9}>
                                <p className={HpCSS.name9}>
                                    <span className={HpCSS.n9}>夜店女王</span>
                                </p>
                                <p className={HpCSS.star9}>主演：叶思浵</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={HpCSS.movie10}>
                        <Link to="/play">
                            <div className={HpCSS.movie1-10}>
                            <img src="https://p.ssl.qhimg.com/d/dy_2fc75a3660a056c2ae1a9891526063f8.jpg"></img>
                                </div>
                            <div className={HpCSS.detail10}>
                                <p className={HpCSS.name10}>
                                    <span className={HpCSS.n10}>暴风营救</span>
                                </p>
                                <p className={HpCSS.star10}>主演：吉娜·卡拉诺 凯姆·吉甘戴 丹尼·特乔 路易斯·古兹曼 史蒂芬·朗</p>
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