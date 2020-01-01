import React from 'react'
import {Link,BrowserRouter,Route} from 'react-router-dom'
import { Menu, Dropdown, Icon, Button,message,Input } from 'antd';
import Movie from '../Movie/movie';
var playCSS= require('./play.css')
  
export default class PlayPage extends React.Component{

    constructor(props){
        super(props);
        this.state={}
    }
    changeValue=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    upload =()=>{
        var data={
            "poster":this.state.poster,
            "name":this.state.name,
            "type1":this.state.type1,
            "type2":this.state.type2,
            "type3":this.state.type3,
            "year":this.state.year,
            "area":this.state.area,
            "score":this.state.score,
            "direction":this.state.direction,
            "actor":this.state.actor,
            "describe":this.state.describe,
        }
        fetch("",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }).then(response=>response.json())
        .then(result=>{
            if(result.state==2){
                message.info("")
            }else if(result.state==1){
                message.info("")
            }      
        }).catch(e=>{
            message.error(e);
        })
    }

    getMovieList(){
        let datalist=[{
            id:1,
            poster:"",
            name:"金三角大营救",
            type1:"动作",
            type2:"剧情",
            type3:"犯罪",
            year:"2018",
            area:"大陆",
            score:"5.9分",
            direction:"张涛",
            actor:" 彭禺厶 / 于心妍 / 李乔丹 ",
            describe:"影片主要讲述了身世显赫的女主林歌阑，为了自己的记者梦，深入虎穴拍照调查，结果目睹毒贩团伙的杀人罪行，被毒枭绑架利用，甚至被注射新型毒品，其父为了爱女派出身份神秘，各怀绝技的五人小组前来营救的故事。而电影的最终聚焦点，则是在于守护正义，或者说是这场关于消灭毒品的战争上。"
        }]
        return datalist;
}
    render(){
        let dataList =this.getMovieList();
        return(
dataList.map((item,i)=>(
    <Movie Movie={item}></Movie>
     ))
        )               
    }
}