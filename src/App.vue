<template>
  <div id="app">
    <!-- 選択されたリンク先を描写 (関連：router.js/App.vue) -->
    <router-view></router-view>
  </div>
</template>

<script>
// npmでインストールしたパッケージ「ress」を読み込み
// 参照 => https://qiita.com/hogesuke_1/items/b12c65e8485289da4146
import 'ress'

export default {
  
}
</script>


<style lang="scss" scoped>
#app {
  font-family: 'M PLUS Rounded 1c', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #000;
  color: #fff;
}
</style>
