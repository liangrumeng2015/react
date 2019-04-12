import React, {Component} from 'react';
class Home extends Component{
    constructor(){
        super();
        this.state={
            msg:"react"
        }
    }
    getMsg(str){
        this.setState({
        	msg:str
        })
    }
    render(){
       return(
           <div>
           		<h2>{this.state.msg}</h2>
                <button onClick={this.getMsg.bind(this,'我是传入的参数')}>点击获取消息---通过bind来改变this的指向的</button>
            </div> 
       )
    }
}
export default Home;