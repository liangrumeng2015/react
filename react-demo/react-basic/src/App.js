import React, { Component } from 'react';
import './assets/css/App.css';

// 引入组件
import Home from './components/Home'


class App extends Component {
  // render里面是存放着模板
  render() {
    return (
      // 所有节点都要被根节点包含
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default App;
