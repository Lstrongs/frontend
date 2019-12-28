import React from 'react'
import {Link,BrowserRouter,Route} from 'react-router-dom'
import { Menu, Dropdown, Icon, Button,message,Input } from 'antd';
import Movie from '../Movie/movie';
var playCSS= require('./play.css')
  
export default class PlayPage extends React.Component{
    getMovieList(){
        let datalist=[{
            id:1,
            poster:"",
            name:"艾尔艾尔",
            type:"发啊",
            director:"所发生",
            actor:"阿发阿发",
            describe:"啊发发发二个风格艾尔艾尔噶"
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