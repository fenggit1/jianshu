import React,{Component} from 'react';
import Header from './common/header';
import {GlobalStyle} from './style';
import {GlobalIcon} from './statics/iconfont/iconfont.js';
import store from './store/index'
import { Provider } from 'react-redux'

class App extends Component{
  render(){
    return (
      <Provider store={store}>
      <div>
        <GlobalIcon/>
        <GlobalStyle/>
        <Header/>
      </div>
      </Provider>
    );
  }
}


export default App;
