<template>
  <div id="menu">
    <Header/>

    <!-- ヒーローヘッダー部分 -->
    <section class="hero-header" v-bind:style="{'background-image': 'url(' + menuTopImage + ')'}"></section>

    <!-- menu部分 -->
    <section class="menu">
      <h2 class="menu--title">MENU</h2>
      <div class="menu--contents">
        <!-- メニューの左側 -->
        <div class="menu--left">
          <!-- menu:コーヒー -->
          <div class="menu--coffee">
            <h3 class="menu--type">Coffee</h3>
            <ul class="menu--lists">
              <li>ブラックコーヒー</li>
              <li>アメリカンコーヒー</li>
              <li>エスプレッソ</li>
              <li>カフェオレ</li>
              <li>ウィンナーコーヒー</li>
              <li>カフェラテ</li>
              <li>カフェモカ</li>
              <li>カプチーノ</li>
            </ul>
          </div>
          <!-- menu:ドリンク -->
          <div class="menu--drink">
            <h3 class="menu--type">Drink</h3>
            <ul class="menu--lists">
              <li>ジンジャーエール</li>
              <li>オレンジジュース</li>
              <li>アップルジュース</li>
              <li>ミルク</li>
            </ul>
          </div>
        </div>
        <!-- メニューの右側 -->
        <div class="menu--right">
          <!-- menu:フード -->
          <div class="menu--food">
            <h3 class="menu--type">Food</h3>
            <ul class="menu--lists">
              <li>Nothingバーガー</li>
              <li>サラダサンド</li>
              <li>フルーツサンド</li>
              <li>ピーナッツサンド</li>
              <li>くるみドーナッツ</li>
              <li>チョコレートドーナッツ</li>
              <li>ミルクドーナッツ</li>
              <li>ニューヨークチーズケーキ</li>
              <li>チョコレートケーキ</li>
              <li>宇治抹茶パンケーキ</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <Footer/>
  </div>
</template>

<script>
  // componentをimport
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  // 画像をimport
  import menuTopImage from '@/assets/images/menu_img/menu-img.jpg'
  
  export default {
    name: 'menu-list',
    components: {
      Header,
      Footer
    },
    data: function() {
      return {
        menuTopImage: menuTopImage
      }
    }
  }
</script>

<style lang="scss" scoped>
// メニュー画面のヒーローヘッダー
.hero-header {
  min-height: 100vh;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
}
.menu {
    border-bottom: solid 1px #fff;
    padding: 10vh;
  .menu--title {
    font-size: 2.4rem;
    margin-top: 7vh;
    margin-bottom: 3vh;
  }
  .menu--contents {
    display: flex;
    justify-content:center;
    .menu--left {
      padding: 5vh 5vw;
      .menu--coffee {
        margin-bottom: 1.5vh;
      }
      // TODO:本来はmenu--coffeeの子要素(menu--drinkにも影響するためこのような形に)
      .menu--type {
        font-size: 1.6rem;
        margin-bottom: 1.2vh;
      }
      .menu--lists {
      list-style: none;
      line-height: 1.6;
    }
    }
    .menu--right {
      padding: 5vh 5vw;
      .menu--type {
        font-size: 1.6rem;
        margin-bottom: 1.2vh;
      }
      .menu--lists {
      list-style: none;
      line-height: 1.6;
      }
    }
  }
}
</style>


