import React,{ Component } from 'react'
import { connect } from 'react-redux'
import {
    WriterWrapper,
    Writertitle,
    WriterSwitch,
    WriterItem
} from '../style'

class Writer extends Component {
    render(){
        const {list} = this.props
        return(
            <WriterWrapper>
                <Writertitle>
                推荐作者
                <WriterSwitch>
                <i ref={(icon)=>{this.spinIcon = icon}} className='iconfont spin'>&#xe6f1;</i>
                换一批</WriterSwitch>
                </Writertitle>
                {
                    list.map((item)=>{
                        return(
                            <WriterItem key={item.get('id')}>
                                <img className='writer-img' alt='' src={item.get('imgUrl')}/>
                                <h3 className='title'>{item.get('title')}</h3>
                                <p className='desc'>{item.get('desc')}</p>
                                <a className='fork' href='/'><i className="iconfont">&#xe69f;</i>关注</a>
                            </WriterItem>
                            
                        )
                    })
                }
                
            </WriterWrapper>
        )
    }
}
const mapState = (state) =>({
    list:state.getIn(['home','writerlist'])
})
export default connect(mapState,null)(Writer);