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
                                <img src="https://p.ssl.qhimg.com/t0183b24336187e73af.jpg"></img>
                                </div>
                            <div className={RyCSS.detail1}>
                                <p className={RyCSS.name1}>
                                    <span className={RyCSS.n1}>金三角大营救</span>
                                </p>
                                <p className={RyCSS.star1}>主演：彭禺厶 于心妍 李乔丹</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={RyCSS.movie2}>
                            <Link to="/play">
                            <div className={RyCSS.movie1-2}>
                            <img src="https://p.ssl.qhimg.com/d/dy_96f576b9cfe83a03619649a5a3c61494.jpg"></img>
                                </div>
                            <div className={RyCSS.detail2}>
                                <p className={RyCSS.name2}>
                                    <span className={RyCSS.n2}>霍家拳之威震山河</span>
                                </p>
                                <p className={RyCSS.star2}>主演：言杰 张蓝艺 李火火</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={RyCSS.movie3}>
                            <Link to="/play">
                            <div className={RyCSS.movie1-3}>
                            <img src="https://p.ssl.qhimg.com/d/dy_5046bc92e385dc3ad6e2606b2b72535e.jpg"></img>
                                </div>
                            <div className={RyCSS.detail3}>
                                <p className={RyCSS.name3}>
                                    <span className={RyCSS.n3}>荒野猎人 国语</span>
                                </p>
                                <p className={RyCSS.star3}>主演：莱昂纳多·迪卡普里奥 汤姆·哈迪 威尔·保尔特 多姆纳尔·格里森 保罗·安德森</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={RyCSS.movie4}>
                            <Link to="/play">
                            <div className={RyCSS.movie1-4}>
                            <img src="https://p.ssl.qhimg.com/d/dy_933186c4727b6616e89daa0b463a2041.jpg"></img>
                                </div>
                            <div className={RyCSS.detail4}>
                                <p className={RyCSS.name4}>
                                    <span className={RyCSS.n4}>格斗吧！</span>
                                </p>
                                <p className={RyCSS.star4}>主演：马志威 林耀声 葛文辉</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={RyCSS.movie5}>
                            <Link to="/play">
                            <div className={RyCSS.movie1-5}>
                            <img src="https://p.ssl.qhimg.com/d/dy_2bbcdda6cd5b4e6fb48fe4af83656ab5.jpg"></img>
                                </div>
                            <div className={RyCSS.detail5}>
                                <p className={RyCSS.name5}>
                                    <span className={RyCSS.n5}>无痛侠（原声）</span>
                                </p>
                                <p className={RyCSS.star5}>主演：里瓦·阿罗拉 阿布希曼努·达萨尼 古山·德瓦亚 萨蒂亚吉特·加努</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={RyCSS.movie6}>
                            <Link to="/play">
                            <div className={RyCSS.movie1-6}>
                            <img src="https://p.ssl.qhimg.com/d/dy_c36886cdea0eae42efff2bf83eeb54de.jpg"></img>
                                </div>
                            <div className={RyCSS.detail6}>
                                <p className={RyCSS.name6}>
                                    <span className={RyCSS.n6}>千局</span>
                                </p>
                                <p className={RyCSS.star6}>主演：张天文</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={RyCSS.movie7}>
                            <Link to="/play">
                            <div className={RyCSS.movie1-7}>
                            <img src="https://p.ssl.qhimg.com/d/dy_4f8828806a084642b4cc56371726faa6.jpg"></img>
                                </div>
                            <div className={RyCSS.detail7}>
                                <p className={RyCSS.name7}>
                                    <span className={RyCSS.n7}>虎胆追凶</span>
                                </p>
                                <p className={RyCSS.star7}>主演：布鲁斯·威利斯 伊丽莎白·苏 文森特·多诺费奥</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={RyCSS.movie8}>
                            <Link to="/play">
                            <div className={RyCSS.movie1-8}>
                            <img src="https://p.ssl.qhimg.com/d/dy_28f913c1f6e01f4cc7b3b8519d52a2f1.jpg"></img>
                                </div>
                            <div className={RyCSS.detail8}>
                                <p className={RyCSS.name8}>
                                    <span className={RyCSS.n8}>美猴王之真假孙悟空</span>
                                </p>
                                <p className={RyCSS.star8}>主演：欧阳靖</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={RyCSS.movie9}>
                            <Link to="/play">
                            <div className={RyCSS.movie1-9}>
                            <img src="https://p.ssl.qhimg.com/d/dy_950d0d7925e3d715f91c8c1494d7f37e.jpg"></img>
                                </div>
                            <div className={RyCSS.detail9}>
                                <p className={RyCSS.name9}>
                                    <span className={RyCSS.n9}>疾速特攻</span>
                                </p>
                                <p className={RyCSS.star9}>主演：基努·里维斯 伊恩·麦柯肖恩 Common 布丽姬·穆娜 鲁比·罗丝</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={RyCSS.movie10}>
                        <Link to="/play">
                            <div className={RyCSS.movie1-10}>
                            <img src="https://p.ssl.qhimg.com/d/dy_f4c88f66382014b0f65058264046467e.jpg"></img>
                                </div>
                            <div className={RyCSS.detail10}>
                                <p className={RyCSS.name10}>
                                    <span className={RyCSS.n10}>巅峰营救</span>
                                </p>
                                <p className={RyCSS.star10}>主演：张亚奇 费馨洁 刘秦杉 王子宸 海扬</p>
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