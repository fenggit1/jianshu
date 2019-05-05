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
        const { page,totalPage,handlechangepage } = this.props;
        const newList = this.props.list.toJS();//把immutable数据转换成普通数据
        const pageList=[];
        if(newList.length){
            
            for(let i = (page-1)*10;i < page*10;i++){
                pageList.push(
                        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                    )
                }
        }

        if(this.props.focused || this.props.mouseIn){
            return(
                <SearchInfo onMouseEnter={this.props.handleMouseEnter}
                onMouseLeave={this.props.handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handlechangepage(page,totalPage,this.spinIcon)}>
                        <i ref={(icon)=>{this.spinIcon = icon}} className='iconfont spin'>&#xe6f1;</i>
                        换一换</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        { pageList }
                    </div>
                </SearchInfo>
            )
        }else{
            return null
        }
    };
    render(){
        const { handleInpuFocus,list } = this.props;
        return(
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登陆</NavItem>
                    <NavItem className="right">
                    <i  className='iconfont'>&#xe600;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                        in={this.props.focused}
                        timeout={200}
                        classNames='slide'>
                        <NavSearch
                        className={this.props.focused ? 'focused':''}
                        onFocus={()=>handleInpuFocus(list)}
                        onBlur={this.props.handleInpuBlur}></NavSearch>
                        </CSSTransition>
                        <i className={this.props.focused ? 'focused iconfont zoom':'iconfont zoom'}>&#xe65a;</i>
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
        list: state.getIn(['header','list']),//两种写法是一样的
        page: state.getIn(['header','page']),
        mouseIn: state.getIn(['header','mouseIn']),
        totalPage:state.getIn(['header','totalPage']),
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        handleInpuFocus(list){
            if(list.size===0){
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
            
        },
        handleInpuBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handlechangepage(page,totalPage,spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle = parseInt(originAngle,10)
            }else{
                originAngle = 0
            }
            spin.style.transform = 'rotate('+(originAngle+360)+'deg)'
            if(page<totalPage){
                dispatch(actionCreators.changepage(page + 1));
            }else{
                dispatch(actionCreators.changepage(1));
            }
           
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);