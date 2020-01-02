import React from 'react'
import {Link,BrowserRouter,Route} from 'react-router-dom'
import { Tag, Input, Tooltip, Icon } from 'antd';
var MovielistCSS= require('./movielist.css')
export default class MovielistPage extends React.Component{

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
           
        }else if(result.state==1){
            
        }      
    }).catch(e=>{
        
    })
}

    state = {
        tags: ['确定', '热播榜', '动作榜'],
        inputVisible: false,
        inputValue: '',
      };
    
      handleClose = removedTag => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        console.log(tags);
        this.setState({ tags });
      };
    
      showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
      };
    
      handleInputChange = e => {
        this.setState({ inputValue: e.target.value });
      };
    
      handleInputConfirm = () => {
        const { inputValue } = this.state;
        let { tags } = this.state;
        if (inputValue && tags.indexOf(inputValue) === -1) {
          tags = [...tags, inputValue];
        }
        console.log(tags);
        this.setState({
          tags,
          inputVisible: false,
          inputValue: '',
        });
      };
    
      saveInputRef = input => (this.input = input);
    
    render(){ 
        const { tags, inputVisible, inputValue } = this.state;
        return(
            
            <div className={MovielistCSS.movielist}>
              
              <div className={MovielistCSS.addlist}>

                <div className={MovielistCSS.addlist1}>
                  <div className={MovielistCSS.addlist3}>

        {tags.map((tag, index) => {
          const isLongTag = tag.length > 20;
          const tagElem = (
            <Tag key={tag} closable={index !== 0} onClose={() => this.handleClose(tag)}>
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </Tag>
          );
          return isLongTag ? (
            <Tooltip title={tag} key={tag}>
              {tagElem}
            </Tooltip>
          ) : (
            tagElem
          );
        })}</div></div>

        <div className={MovielistCSS.addlist2}>

        {inputVisible && (
          <Input
            ref={this.saveInputRef}
            type="text"
            size="small"
            style={{ width: 78 }}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        </div>

        <div className={MovielistCSS.add}>
          <div className={MovielistCSS.add1}>
        {!inputVisible && (
          <Tag onClick={this.showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
            <Icon type="plus" /> 新建榜单
          </Tag>
        )}
        </div>
        </div>
      </div>
            </div>
        )
    }
}