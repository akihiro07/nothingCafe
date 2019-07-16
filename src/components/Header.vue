<template>
  <div id="header">
    <div class="header--title">
      <h1 class="title--text">Nothing Cafe</h1>
      <i class="fas fa-mug-hot title--icon"></i>
    </div>
    <div class="header--nav">
      <!-- routerのリンク先を『router.js』で設定 (関連：router.js/App.vue) -->
      <router-link class="nav--link nav--home" to="/">HOME</router-link> |
      <router-link class="nav--link nav--menu" to="/menu">MENU</router-link> |
      <router-link class="nav--link nav--shop" to="/access">SHOP</router-link> |
      <router-link class="nav--link nav--access" to="/access">ACCESS</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #header {
    // headerを最上部に固定
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3.5vh 5vw;
    // headerのtitle部分
    .header--title {
      color: #fff;
      .title--text {
        display: inline-block;
      }
      .title--icon {
        font-size: 1.7rem;
        margin-left: 0.3vw;
      }
    }
    // headerのnav部分
    .header--nav {
      .nav--link {
        transition: font-size 0.3s;
        text-decoration: none;
        font-size: 1.2rem;
        color: #fff;
        padding: 5px;
      }
      // nav部分hover時
      .nav--link:hover {
        transition: font-size 0.3s;
        font-size: 1.4rem;
        text-decoration: underline;
      }
    }
  }
</style>
