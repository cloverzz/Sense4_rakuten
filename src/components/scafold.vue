<template>
  <div>
    <top></top>
    <sidebar class="sidebar-area"></sidebar>
    <div class="scafold-wrapper text-center">
    <h1 id = "aaa">aaa</h1>
    <h1 id = "bbb">bbb</h1>
      <router-view/>
    </div>
    <h1 id = "ccc">ccc</h1>
    <h1 id = "ddd">ddd</h1>
  </div>
</template>

<script>
import Sidebar from './sidebar.vue' // サイドバー
export default {
  components: {
    Sidebar
  },watch: {
    '$route': function (n, o) {
      if (n.hash.match(/^#/)) {
        document.getElementById(n.hash.replace(/^#/, '')).scrollIntoView()
      }
      console.log('new, old', [n.hash, o.hash])
    }
  },
  mounted () {
    if (this.$route.hash.match(/^#/)) {
      document.getElementById(this.$route.hash.replace(/^#/, '')).scrollIntoView()
    }
  }
}
</script>

<style scoped>
.sidebar-area {
  /* 左側に固定 */
  float: left;
}


.scafold-wrapper {
  /* display: flex; 要素を横並びにする */
  flex-direction: column; /* 要素の並び順の主軸を指定 上 => 下 */
  min-height: 100vh; /* 要素の高さの最小値を指定 vhはviewport(表示領域) heightの略 */

  /* サイドバーのwidth分だけ範囲を削除 */
  width: calc(100% - 200px);

  /* サイドバーで隠れるので右に寄せる */
  margin: 0 0 0 180px;
}
</style>
