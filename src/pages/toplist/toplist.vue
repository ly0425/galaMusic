<template>
  <div class="toplist">
    <div class="g-sd3">
      <div class="g-sd3-title">云音乐特色榜</div>
      <div class="n-minelst" v-for="item in topList.special" :key="item.id">
        <div class="n-minelst-left"><img :src="item.coverImgUrl"/></div>
        <div class="n-minelst-right">
          <div class="n-minelst-name">{{item.name}}</div>
          <div class="s-fc4">{{item.updateFrequency}}</div>
        </div>
      </div>
      <div class="g-sd3-title">全球媒体榜</div>
      <div class="n-minelst" v-for="item in topList.global" :key="item.id">
        <div class="n-minelst-left"><img :src="item.coverImgUrl"/></div>
        <div class="n-minelst-right">
          <div class="n-minelst-name">{{item.name}}</div>
          <div class="s-fc4">{{item.updateFrequency}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toplist',
  data () {
    return {
      topList: {
        special: [],
        global: []
      }
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
        const list = response.data.list
        that.topList.special = list.slice(0, 4)
        that.topList.global = list.slice(4)
      })
    }
  }
}
</script>
