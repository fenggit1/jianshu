import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden;
`;
export const HomeLeft = styled.div`
    margin-left:15px;
    padding-top:30px;
    width:625px;
    float:left;
    .banner-img{
        width:625px;
        height:270px;
    }
`;
export const HomeRight = styled.div`
    width:280px;
    float:right;
   
`;
export const TopicWrapper = styled.div`
    padding:20px 0 10px 0 ;
    overflow:hidden;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
    float:left;
    height:32px;
    line-height:32px;
    margin-left:18px;
    margin-bottom:18px;
    padding-right:10px;
    background:#f7f7f7;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    .topic-pic{
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
    }
`;

export const ListItem = styled.div`
    overflow:hidden;
    padding:20px 0 ;
    border-bottom:1px solid #dcdcdc;
    .pic{
        display:block;
        width:125px;
        height:100px;
        float:right;
        border-radius:10px;
    }
`;
export const ListInfo = styled.div`
    width:500px;
    float:right;
    .title{
        font-size:18px;
        line-height:27px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        font-size:13px;
        line-height:24px;
        color:#999;
    }
`;
export const RecommendWrapper = styled.div`
    margin:30px 0 ;
    width:280px;

`;
export const RecommendItem = styled.div`
    height:50px;
    width:280px;
    background:url(${(props)=>props.imgUrl});
    background-size:contain;
`;
export const WriterWrapper = styled.div`
    width:280px;
    margin:30px 0;
`;
export const Writertitle = styled.div`
    width:280px;
    font-size:14px;
    margin:2px 0;

`;
export const WriterSwitch = styled.div`
    display:inline-block;
    font-size:13px;
    float:right;
    .spin{
        font-size:13px;
    }
`;
export const WriterItem = styled.div`
    position:relative;
    margin-top:20px;
    width:280px;
    height:47px;
    .writer-img{
        display:block;
        float:left;
        width:47px;
        height:47px;
        margin-right:10px;
    }
    .title{
        line-height:25px;
        height:25px;
        font-size:14px;
    }
    .desc{
        line-height:20px;
        height:20px;
        color:#969696;
        font-size:12px;
    }
    .fork{
        position:absolute;
        top:2px;
        right:4px;
        font-size:13px;
        color:#42c02e;
    }

`;