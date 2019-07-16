<template>
  <div id="access">
    <Header/>
    <!-- ヒーローヘッダー部分 -->
    <section class="hero-header" :style="{'background-image': 'url(' + AccessTopImage + ')'}"></section>

    <section class="access">
      <h2 class="access--title">ACCESS</h2>
      <div class="access--contents">
        <div id="googleMap" class="access--map">
          <!-- googleMapAPI使用(main.jsで読み込み) -->
          <GmapMap :center="center" :zoom="zoom" style="width:100%; height:100%;">
            <GmapMarker v-for="(marker, index) in marker_items"
              :position="marker.position"
              :title="marker.title"
              :clickable="true" :draggable="false"
              :key="index">
            </GmapMarker>
          </GmapMap>
        </div>
        <div class="access--info">
          <dl class="access--lists">
            <dt class="access--tern">店名</dt>
            <dd class="access--description">NothingCafe（ノッシングカフェ）</dd>
            <dt class="access--tern">住所</dt>
            <dd class="access--description">〒171-0022 東京都豊島区南池袋3-17</dd>
            <dt class="access--tern">電話番号</dt>
            <dd class="access--description">03-1234-5678</dd>
            <dt class="access--tern">アクセス</dt>
            <dd class="access--description">池袋駅より徒歩5分</dd>
            <dt class="access--tern">営業時間</dt>
            <dd class="access--description">6:30~21:30（土日・祝日営業）</dd>
            <dt class="access--tern">定休日</dt>
            <dd class="access--description">水曜日</dd>
            <dt class="access--tern">環境</dt>
            <dd class="access--description">コンセント・Free Wi-Fi・一人席完備</dd>
          </dl>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
// ヒーローヘッダーの画像登録
import AccessTopImage from '@/assets/images/shop_img/shop-img.jpg'
export default {
    name: 'access',
    components: {
      Header,
      Footer
    },
    data: function() {
      return {
        // importした画像をdataに設定
        AccessTopImage: AccessTopImage,
        // >>>>>>> googleMapAPIの情報(data) >>>>>>>
        // 真ん中
        center: { lat:35.724610, lng:139.713325 },
        // 拡大率
        zoom: 17,
        // マーカー
        marker_items: [
          {position: { lat:35.724610, lng:139.713325 }, title: 'NothingCafe'}
        ]
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      }
    }
  }
</script>

<style lang="scss" scoped>
  .hero-header {
    height: 100vh;
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
  }
  .access {
    .access--title {
      font-size: 2.4rem;
      margin-top: 7vh;
      margin-bottom: 3vh;
    }
    .access--contents {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 8vw;
      .access--map {
        width: 60%;
        height: 70vh;
      }
      .access--info {
        width: 30%;
        margin: 0 auto;
        .access--lists {
          .access--tern {
            font-weight: bold;
            font-size: 1.1rem;
            padding-bottom: 1.5vh;
          }
          .access--description {
            margin-bottom: 3vh;
            padding-bottom: 1vh;
            border-bottom: 1px solid;
          }
          .access--description:last-child {
            margin-bottom: 0vh;
            padding-bottom: 0vh;
            border-bottom: none;
          }
        }
      }
    }
  }
</style>


