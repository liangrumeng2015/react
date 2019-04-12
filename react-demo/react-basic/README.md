(一)
react、vue
熟悉后端语言nodejs、
熟悉react-native、微信小程序

（6-10）html、css、js、jq、pc、端移动端
（8-13）三大只会一个、微信小程序
（13+）vue、react、angular、微信小程序
（15+）混合app开发：ionic、ReactNative、Cordova+vue   Cordova+React   Weex 
（15-20）Nodejs、express/koa
跨平台桌面软件开发

（1）安装nodejs稳定版本  node -v查看nodejs版本	   npm -v查看npm的版本
安装yarn   npm install -g yarn
（2）react环境搭建 （1） 
（2-1）npm install -g create-react-app   /  cnpm install -g create-react-app
（2-2）create-react-app reactdemo
（2-3）cd 
（3）
（4）
（5）



(四)react：事件、方法


//（获取state里面的值）  改变this的指向：   
（1）在调用的时候通过bind(this)来指定
（2）在构造函数里面指定
（3）使用es6里面的箭头函数

// (改变state里面的值)  
（1）setData=()=>{
		this.setState({
			msg:'我是改吧后的'
		})
	}

// 执行方法传值
setData(str){
	this.setState({
		msg:str
	})
}

constructor(props){
	super(prpos);
	this.state = {
		msg:'我是react里面的方法',
		message:"我是一个message",
		userName:'你好'
	}
	this.getMessage = this.getMessage.bind(this)    // 方法2
}
run(){
	alert('我是一个run方法')
}
getData(){
	alert(this.state.msg)        
}
getMessage(){
	alert(this.state.message) 
}
getName=()=>{
	alert(this.state.userName)
}
setData=()=>{
	this.setState({
		msg:'我是改变后的msg'
	})
}	
render(){
	return(
		<div></div>
		<button onClick={this.run}>执行方法</button>
		<button onClick={this.getData.bind(this)}>获取state里面的值-------方法1</button>
		<button onClick={this.getMessage}>获取state里面的值-------方法2</button>
		<button onClick={this.userName}>获取state里面的值-------方法3</button>
		<button onClick={this.setData}>改变state里面的值-------</button>
		<button onClick={this.setData}>执行方法传值-------</button>
	)
};


(五)