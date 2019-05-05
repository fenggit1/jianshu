import { fromJS } from 'immutable'

const defaultState = fromJS({
    topicList:[{
        id:1,
        title:'社会热点',
        imgUrl:'//upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    }],
    articleList:[{
        id:1,
        title:'济南灭门自杀案:夫妻之间学会有效沟通才是家庭幸福的开始',
        desc:'文/坐看云起情深时 2019年1月18日晚，济南市天桥区一居民小区有一30多岁男人从六楼跳下死亡，同时，该六楼发生火灾，经过消防人员半个多小时的',
        imgUrl:'//upload-images.jianshu.io/upload_images/10279970-23def3526e4f1b2c.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id:2,
        title:'济南灭门自杀案:夫妻之间学会有效沟通才是家庭幸福的开始',
        desc:'文/坐看云起情深时 2019年1月18日晚，济南市天桥区一居民小区有一30多岁男人从六楼跳下死亡，同时，该六楼发生火灾，经过消防人员半个多小时的',
        imgUrl:'//upload-images.jianshu.io/upload_images/10279970-23def3526e4f1b2c.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id:3,
        title:'济南灭门自杀案:夫妻之间学会有效沟通才是家庭幸福的开始',
        desc:'文/坐看云起情深时 2019年1月18日晚，济南市天桥区一居民小区有一30多岁男人从六楼跳下死亡，同时，该六楼发生火灾，经过消防人员半个多小时的',
        imgUrl:'//upload-images.jianshu.io/upload_images/10279970-23def3526e4f1b2c.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }],
    recommendlist:[{
        id:1,
        imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
    },{
        id:2,
        imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },{
        id:3,
        imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },{
        id:4,
        imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    }],
    writerlist:[{
        id:1,
        title:'茶点故事',
        imgUrl:'//upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
        desc:'写了187.4k字 · 7.4k喜欢'
    },{
        id:2,
        title:'茶点故事',
        imgUrl:'//upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
        desc:'写了187.4k字 · 7.4k喜欢'
    },{
        id:3,
        title:'茶点故事',
        imgUrl:'//upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
        desc:'写了187.4k字 · 7.4k喜欢'
    }]
});

export default (state = defaultState, action) => {
    switch(action.type){
        
        default:
        return state;
    }
}