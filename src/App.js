import React,{Component} from 'react';
import Header from './common/header';
import {GlobalStyle} from './style';
import {GlobalIcon} from './statics/iconfont/iconfont.js';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store/index';
import { Provider } from 'react-redux';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component{
  render(){
    return (
      <Provider store={store}>
      <div>
        <GlobalIcon/>
        <GlobalStyle/>
        <Header/>
        <BrowserRouter>
          <div>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </div>
      </Provider>
    );
  }
}


export default App;
