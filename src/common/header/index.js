import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';//动画组件
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchWrapper,
} from './style';

class Header extends Component{
    getListArea(){
        if(this.props.focused){
            return(
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>换一换</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        {
                            this.props.list.map((item)=>{
                                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })
                        }
                    </div>
                </SearchInfo>
            )
        }else{
            return null
        }
    };


    render(){
        return(
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登陆</NavItem>
                    <NavItem className="right">
                    <i className='iconfont'>&#xe600;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                        in={this.props.focused}
                        timeout={200}
                        classNames='slide'>
                        <NavSearch
                        className={this.props.focused ? 'focused':''}
                        onFocus={this.props.handleInpuFocus}
                        onBlur={this.props.handleInpuBlur}></NavSearch>
                        </CSSTransition>
                        <i className={this.props.focused ? 'focused iconfont':'iconfont'}>&#xe65a;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'>
                    <i className='iconfont'>&#xe62e;</i>
                    
                    写文章</Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}




const mapStateToProps = (state)=>{
    return{
        focused: state.get('header').get('focused'),
        list: state.getIn(['header','list'])//两种写法是一样的
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        handleInpuFocus(){
            dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus());
            
        },
        handleInpuBlur(){
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);