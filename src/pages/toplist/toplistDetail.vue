<template>
   <div class="g-mn3">
     <div>
       <div class="g-wrap">
         <div class="m-info"><img src=""/></div>
         <div class="cnt">
           <div class="f-ff2">云音乐飙升榜</div>
           <div class="f-cb">
             <i class="icon iconfont icon-bofang"></i>
             最近更新：<span>05月14日</span>
             <span>（每天更新）</span>
           </div>
           <div class="btns">
             <button class="btn1"><i class="icon iconfont icon-bofang"></i>播放</button>
             <button class="btn1"><i class="icon iconfont icon-hao"></i></button>
             <button class="btn1 btn2"><i class="icon iconfont icon-tubiaozhizuomoban"></i>1111111111</button>
             <button class="btn1 btn2"><i class="icon iconfont icon-zhuanfa"></i>1111111111</button>
             <button class="btn1 btn2"><i class="icon iconfont icon-xiazai"></i>下载</button>
             <button class="btn1 btn2"><i class="icon iconfont icon-pinglun"></i>1111111</button>
           </div>
         </div>
       </div>
       <div class="g-wrap12">
         <div class="u-title">
           <span>
             <span class="f-ff2">歌曲列表</span>
             <span class="sub s-fc3">200首歌曲</span>
           </span>
           <span class="s-fc3">
              播放：<span class="s-fc6">222222222</span>次
           </span>
         </div>
         <ul>
           <li>
             <Table stripe :columns="columns1" :data="data1" :show-header="1==0"></Table>
           </li>
         </ul>
       </div>
     </div>
   </div>
</template>

<script>
export default {
  name: 'toplistDetail',
  data () {
    return {
      topList: [],
      columns1: [
        {
          title: 'Name',
          key: 'name',
          render: (h, params) => {
            return h('div', {class: 'item'}, [
              h('span', {class: 'itemIndex'}, params.index + 1),
              h('span', {class: 'itemcontent'}, params.row.name),
              h('span', {class: 'list-suspen'}, [
                h('i', {class: 'iconfont icon icon-bofang'}),
                h('i', {class: 'iconfont icon icon-hao'}),
                h('i', {class: 'iconfont icon icon-tubiaozhizuomoban'})
              ])
            ])
          }
        },
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  created () {
    this.Gettoplist()
  },
  methods: {
    Gettoplist () {
      var that = this
      that.$axios({
        methods: 'get',
        url: 'http://localhost:3000/toplist'
      }).then(response => {
        that.list = response.data.list
      })
    }
  }
}
</script>

<style scoped>

</style>
