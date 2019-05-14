<template>
  <div>
    <header>
      <div class="head">
        <ul class="head-left">
          <li>
            <router-link to="to" class="router-list">发现音乐</router-link>
          </li>
          <li>
            <router-link to="to" class="router-list">我的音乐</router-link>
          </li>
          <li>
            <router-link to="to" class="router-list">朋友</router-link>
          </li>
          <li>
            <router-link to="to" class="router-list">商城</router-link>
          </li>
          <li>
            <router-link to="to" class="router-list">音乐人</router-link>
          </li>
          <li>
            <router-link to="to" class="router-list">下载客户端</router-link>
          </li>
        </ul>
        <div class="head-right">
          <div>
            <select>
              <option>qqq</option>
              <option>qqq</option>
              <option>qqq</option>
            </select>
          </div>
          <div class="creators">创作者中心</div>
          <div>
            <input type="text" placeholder="音乐/视频/电台/用户" class="search"/>
          </div>
        </div>
      </div>
    </header>
    <nav>
      <div class="nav">
        <ul>
          <li>
            <router-link to="to" class="router-list selected">推荐</router-link>
          </li>
          <li>
            <router-link to="to" class="router-list">排行榜</router-link>
          </li>
          <li>
            <router-link to="to" class="router-list">歌单</router-link>
          </li>
          <li>
            <router-link to="to" class="router-list">主播电台</router-link>
          </li>
          <li>
            <router-link to="to" class="router-list">歌手</router-link>
          </li>
          <li>
            <router-link to="to" class="router-list">新碟上架</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="swiper">
      <Carousel autoplay v-model="swiperValue" loop>
        <CarouselItem v-for="item in bannerImg" :key="item.id">
          <div class="demo-carousel">
            <img :src="item.imageUrl"/>
          </div>
        </CarouselItem>
      </Carousel>
    </div>
    <section>
      <aside>
        <div class="content-popular">
          <div class="title">
            <span class="rings"></span><span class="thickening">热门推荐</span>
            <span class="classify">
              华语<span>|</span>流行<span>|</span>摇滚<span>|</span>民谣<span>|</span>电子
            </span>
            <div class="more">更多<i class="iconfont icon icon-youjiantou"></i></div>
          </div>
          <div class="modular">
            <div class="modular-child" v-for="item in hotlist" :key="item.id">
              <img :src="item.coverImgUrl"/>
              <div class="shade">
                <i class="iconfont icon icon-erji"></i>
                <span class="shade-count">{{item.trackCount}}</span>
                <i class="iconfont icon icon-bofang"></i>
              </div>
              <div class="modular-intr">{{item.creator.nickname}}</div>
            </div>
          </div>
        </div>
        <div class="content-grounding">
          <div class="title">
            <span class="rings"></span><span class="thickening">新碟上架</span>
            <div class="more">更多<i class="iconfont icon icon-youjiantou"></i></div>
          </div>
          <div class="ground-list">
            <Carousel v-model="groundValue" loop :arrow="setting.arrow" :dots="setting.dots">
              <CarouselItem v-for="items in groundInfos" :key="items.index">
                <div class="demo-carousel">
                  <ul class="groung-swiper">
                    <li v-for="item in items" :key="item.id">
                      <div class="ground-img"><img :src="item.blurPicUrl" :title="item.name"/></div>
                      <div class="ground-tit">{{item.name}}</div>
                      <div class="ground-user">{{item.artist.name}}</div>
                    </li>
                  </ul>
                </div>
              </CarouselItem>
            </Carousel>
          </div>
        </div>
        <div class="content-lists">
          <div class="title">
            <span class="rings"></span><span class="thickening">榜单</span>
            <div class="more">更多<i class="iconfont icon icon-youjiantou"></i></div>
          </div>
          <div v-for="item in topDetail" :key="item.id">
            <div class="topDetail">
              <div class="lists-img"><img :src="item.coverImgUrl" /></div>
              <div class="lists-title">
                <div class="toplist-name">{{item.name}}</div>
                <div class="toplist-icon">
                  <i class="iconfont icon icon-bofang"></i>
                  <i class="iconfont icon icon-tubiaozhizuomoban"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="content-list">
            <ul class="lists-top">
              <li>
                <Table stripe :columns="columns1" :data="data1" :show-header="1==0"></Table>
              </li>
              <li>
                <div class="viewAll">查看全部></div>
              </li>
            </ul>
            <ul class="lists-top">
              <li>
                <Table stripe :columns="columns2" :data="data2" :show-header="1==0"></Table>
              </li>
              <li>
                <div class="viewAll">查看全部></div>
              </li>
            </ul>
            <ul class="lists-top">
              <li>
                <Table stripe :columns="columns3" :data="data3" :show-header="1==0"></Table>
              </li>
              <li>
                <div class="viewAll">查看全部></div>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <article>
        <div class="artic-right">
          <div class="artic-title">
            <span class="artic-title-left">入住歌手</span>
            <span class="artic-title-right">查看全部></span>
          </div>
          <div>
            <div class="liveSinger" v-for="item in artist" :key="item.id">
              <div class="singer-img"><img :src="item.img1v1Url"/></div>
              <div class="singer-info">
                <div class="singer-name">{{item.name}}</div>
                <div class="singer-intr">{{item.img1v1Id}}</div>
              </div>
            </div>
          </div>
          <button class="articBtn">申请成为网易音乐人</button>
        </div>
        <div>
          <div class="artic-title">
            <span class="artic-title-left">热门主播</span>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      swiperValue: 0,
      bannerImg: [],
      groundValue: 0,
      groundInfos: [],
      setting: {
        arrow: 'always',
        dots: 'none'
      },
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
        }
      ],
      columns2: [
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
        }
      ],
      columns3: [
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
        }
      ]
    }
  },
  created () {
    this.GetListImg()
    this.groundInfo()
    this.Gettoplist1()
    this.Gettoplist2()
    this.Gettoplist3()
    this.GettopDetails()
    this.hotPlaylist()
    this.artists()
  },
  methods: {
    GetListImg () {
      var that = this
      that.$axios({
        methods: 'get',
        url: 'http://192.168.3.119:3000/banner'
      }).then(response => {
        that.bannerImg = response.data.banners
      })
    },
    groundInfo () {
      var that = this
      that.$axios({
        methods: 'get',
        url: 'http://192.168.3.119:3000/album/newest'
      }).then(response => {
        const albums = response.data.albums
        let index = 0
        let temp = []
        for (let i = 0; i < albums.length; i++) {
          index++
          temp.push(albums[i])
          if (index === 5 || i === albums.length - 1) {
            index = 0
            this.groundInfos.push(temp)
            temp = []
          }
        }
      })
    },
    Gettoplist1 () {
      var that = this
      that.$axios({
        methods: 'get',
        url: 'http://192.168.3.119:3000/top/list?idx=0'
      }).then(response => {
        that.data1 = response.data.playlist.tracks.slice(0, 10)
      })
    },
    Gettoplist2 () {
      var that = this
      that.$axios({
        methods: 'get',
        url: 'http://192.168.3.119:3000/top/list?idx=1'
      }).then(response => {
        that.data2 = response.data.playlist.tracks.slice(0, 10)
      })
    },
    Gettoplist3 () {
      var that = this
      that.$axios({
        methods: 'get',
        url: 'http://192.168.3.119:3000/top/list?idx=2'
      }).then(response => {
        that.data3 = response.data.playlist.tracks.slice(0, 10)
      })
    },
    GettopDetails () {
      var that = this
      that.$axios({
        methods: 'get',
        url: 'http://192.168.3.119:3000/toplist'
      }).then(response => {
        that.topDetail = response.data.list.slice(0, 3)
      })
    },
    hotPlaylist () {
      var that = this
      that.$axios({
        methods: 'get',
        url: 'http://localhost:3000/top/playlist?limit=10&order=new'
      }).then(response => {
        that.hotlist = response.data.playlists.slice(0, 8)
      })
    },
    artists () {
      var that = this
      that.$axios({
        methods: 'get',
        url: 'http://localhost:3000/artist/list?cat=5001'
      }).then(response => {
        that.artist = response.data.artists.slice(0, 5)
      })
    }
  }
}
</script>
