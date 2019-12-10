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
                            <img src="https://p.ssl.qhimg.com/d/dy_28f913c1f6e01f4cc7b3b8519d52a2f1.jpg"></img>
                                </div>
                            <div className={RyCSS.detail1}>
                                <p className={RyCSS.name1}>
                                    <span className={RyCSS.n1}>美猴王之真假孙悟空</span>
                                </p>
                                <p className={RyCSS.star1}>主演：欧阳靖</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={RyCSS.movie2}>
                            <Link to="/play">
                            <div className={RyCSS.movie1-2}>
                            <img src="https://p.ssl.qhimg.com/d/dy_f799221ff193cbccb44d460b0c3139ae.jpg"></img>
                                </div>
                            <div className={RyCSS.detail2}>
                                <p className={RyCSS.name2}>
                                    <span className={RyCSS.n2}>荒野女人</span>
                                </p>
                                <p className={RyCSS.star2}>主演：郝铭雪 金子焰</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={RyCSS.movie3}>
                            <Link to="/play">
                            <div className={RyCSS.movie1-3}>
                            <img src="https://p.ssl.qhimg.com/d/dy_954111e20b4cd5a8c939204812f36373.jpg"></img>
                                </div>
                            <div className={RyCSS.detail3}>
                                <p className={RyCSS.name3}>
                                    <span className={RyCSS.n3}>前任的诱惑</span>
                                </p>
                                <p className={RyCSS.star3}>主演：梁鑫</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={RyCSS.movie4}>
                            <Link to="/play">
                            <div className={RyCSS.movie1-4}>
                            <img src="https://p.ssl.qhimg.com/d/dy_04af74456c64bc306342e1778fa8889d.jpg"></img>
                                </div>
                            <div className={RyCSS.detail4}>
                                <p className={RyCSS.name4}>
                                    <span className={RyCSS.n4}>绝色锦衣卫</span>
                                </p>
                                <p className={RyCSS.star4}>主演：徐子鹿</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={RyCSS.movie5}>
                            <Link to="/play">
                            <div className={RyCSS.movie1-5}>
                            <img src="https://p.ssl.qhimg.com/d/dy_a010125be1fd39b7ce6289dbc1993a17.jpg"></img>
                                </div>
                            <div className={RyCSS.detail5}>
                                <p className={RyCSS.name5}>
                                    <span className={RyCSS.n5}>黑战</span>
                                </p>
                                <p className={RyCSS.star5}>主演：张军</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={RyCSS.movie6}>
                            <Link to="/play">
                            <div className={RyCSS.movie1-6}>
                            <img src="https://p.ssl.qhimg.com/d/dy_aa779c319c9d0c042bcf962386dbadef.jpg"></img>
                                </div>
                            <div className={RyCSS.detail6}>
                                <p className={RyCSS.name6}>
                                    <span className={RyCSS.n6}>热血姐妹团</span>
                                </p>
                                <p className={RyCSS.star6}>主演：何佩瑜 郑欣宜 雨侨 连诗雅 陈嘉莉</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={RyCSS.movie7}>
                            <Link to="/play">
                            <div className={RyCSS.movie1-7}>
                            <img src="https://p.ssl.qhimg.com/d/dy_3bd197e2306d4a6760a3adfd0f353794.jpg"></img>
                                </div>
                            <div className={RyCSS.detail7}>
                                <p className={RyCSS.name7}>
                                    <span className={RyCSS.n7}>天生喜剧王</span>
                                </p>
                                <p className={RyCSS.star7}>主演：程琢 韩千雨 李祎玮</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={RyCSS.movie8}>
                            <Link to="/play">
                            <div className={RyCSS.movie1-8}>
                            <img src="https://p.ssl.qhimg.com/d/dy_5e4297fa09dcc731beb8a56fc1cfd8e6.jpg"></img>
                                </div>
                            <div className={RyCSS.detail8}>
                                <p className={RyCSS.name8}>
                                    <span className={RyCSS.n8}>夜店女王</span>
                                </p>
                                <p className={RyCSS.star8}>主演：叶思浵</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={RyCSS.movie9}>
                            <Link to="/play">
                            <div className={RyCSS.movie1-9}>
                            <img src="https://p.ssl.qhimg.com/d/dy_3242b879336acd89c9cdcbe93eef2d17.jpg"></img>
                                </div>
                            <div className={RyCSS.detail9}>
                                <p className={RyCSS.name9}>
                                    <span className={RyCSS.n9}>七年之痒2018</span>
                                </p>
                                <p className={RyCSS.star9}>主演：常玉虎</p>
                            </div>
                            </Link> 
                            </div>
                            <div className={RyCSS.movie10}>
                        <Link to="/play">
                            <div className={RyCSS.movie1-10}>
                            <img src="https://p.ssl.qhimg.com/d/dy_8b15418fcdf4e63acfa2420f27b44615.jpg"></img>
                                </div>
                            <div className={RyCSS.detail10}>
                                <p className={RyCSS.name10}>
                                    <span className={RyCSS.n10}>疯狂试爱2</span>
                                </p>
                                <p className={RyCSS.star10}>主演：花儿 孔燕黎 刘小乔 王强强 吴海波</p>
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