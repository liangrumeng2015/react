import React from 'react';
class News extends React.Component{
	constructor(){
		super()
		this.state = {
			userinfo:'梁如梦'
		}
	}

	/*
	constructor(props){
		super(props)         // 父子组件传值
	}
	*/
	render(){
		return(
			<div>
				<ul>
					<li>这个是一个列表</li>
					<li>这个是一个列表{this.state.userinfo}</li>
				</ul>
				
			</div>
		);
	}
}
export default News;


{/*import React, {Component} from 'react';
class Home extends Component{
	constructor(){
		super();

		//定义数据
		this.state = {
			name:'张三',
			age:'30',
			useinfo:{
				username:'baidu'
			},
			userName:'李四',
			msg:'react'
		}
	}
	getName=()=>{
		alert(this.state.userName);
	}
	setData=()=>{
		this.setState({
			msg:'你好'
		})
	}
	render(){
		return(
			 <div>
			 	<h2>{this.state.msg}</h2>
			 	<p>姓名=====  {this.state.name}</p>
			 	<p>年龄=====  {this.state.age}</p>
			 	<p>年龄=====  {this.state.useinfo.username}</p>
			 	<div className="red">花啦啦啦啦啦</div>
			 	<label htmlFor="abc">你好</label>
			 	<input type="text" id="abc" />
			 	<button onClick={this.getName}>点击获取姓名</button>
			 	<button onClick={this.setData}>点击设置msg</button>
			 </div>
		);
	}
}


export default Home;
*/}
