<template>
  <div id="home">
    <!-- 3. exportで登録した外部コンポーネントを使用 -->
    <Header/>

    <!-- ヒーローヘッダー部分 -->
    <!-- ※v-bindの場合は、キャメルケース(ex.textAlign)(今回は不使用) -->
    <section class="hero-header" v-bind:style="{'background-image': 'url(' + heroHeader + ')'}">
    </section>

    <!-- commitment部分 -->
    <section class="commitment">
      <h2 class="commitment--title">commitment</h2>
      <div class="commitment--contents">
        <div>
          <p class="commitment--text">当店ではコーヒー豆はもちろん、水やカップ、そして空間など全てにこだわり無の空間にしました。</p>
          <p class="commitment--text">イスやテーブルはもちろん、コーヒー自体を用意していないという大胆なお店です。</p>
          <p class="commitment--text">お客様からはクレームの嵐ですが、怖いもの見たさで観光客の方が訪れるおかげで創業100年目を迎えることができました。</p>
          <p class="commitment--text">ぜひ一度訪れて何も無い『nothing』を体験してみて下さい。</p>
        </div>
      </div>
    </section>

    <!-- menu部分 -->
    <section class="menu">
      <h2 class="menu--title">menu</h2>
      <!-- menuのコンテンツ部分(画像部分＋テキスト部分に分類) -->
      <div class="menu--contents">
        <!-- menuの画像部分 -->
        <div class="menu--img-frame">
          <img class="menu--img" src="@/assets/images/home_img/menu1.jpg">
        </div>
        <!-- menuのテキスト部分 -->
        <div class="menu--text">
          <div class="menu--sentence">
            <p>コーヒーにこだわったし、食べ物にもこだわったよ！</p>
            <p>みんな美味しいて言ってるし、絶対に美味しいはず！はず！</p>
            <p>毎月10日は0%OFF！！！！</p>
            <p>全部美味しいから食べにきてね！！</p>
          </div>
          <!-- /menuへと飛ばすボタン(飛ばす先はrouter.jsで設定) -->
          <router-link class="menu--link" to="/menu">メニューを見る</router-link>
        </div>
      </div>
    </section>

    <!-- 3. exportで登録した外部コンポーネントを使用 -->
    <Footer/>
  </div>
</template>

<script>
// === import部分 ===
// @ is an alias to /src
// 1. 外部コンポーネントを読み込み(exportで使用)
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
// 画像ファイル読み込み
// 参考=>https://qiita.com/skmtko/items/a83f836b48f24309916d
// TODO:importが多すぎると読み込みが遅くなるのでは？(splittingを使ってみる)
import topImage1 from "@/assets/images/home_img/top-img1.jpg"
import topImage2 from "@/assets/images/home_img/top-img2.jpg"
import topImage3 from "@/assets/images/home_img/top-img3.jpg"
import topImage4 from "@/assets/images/home_img/top-img4.jpg"
import topImage5 from "@/assets/images/home_img/top-img5.jpg"

// === 画像データをオブジェクト{}の配列[]で準備する部分(dataで使用) ===
const heroHeaders = [
  {
    id: 0,
    image: topImage1 // importした画像を読み込み
  },
  {
    id: 1,
    image: topImage2
  },
  {
    id: 2,
    image: topImage3
  },
  {
    id: 3,
    image: topImage4
  },
  {
    id: 4,
    image: topImage5
  }
]

// === export部分 ===
// コンポーネントをexport
export default {
  name: 'home',
  // 2. 外部コンポーネントを使用
  components: {
    Header,
    Footer
  },
  data: function() {
    return {
      // data:画像データの配列を表すkeyID
      keyId: 0,
      // data:表示するヒーローヘッダー全て(定数heroHeaders使用)
      heroHeaders: heroHeaders,
      heroHeader: null,
      // data:その他の画像
    }
  },
  methods: {
    // keyIdを変化させるメソッド
    // keyIdChange: function() {
    //   if ( this.keyId >= this.heroHeaders.length ) {
    //     this.keyId = 0;
    //   }
    //   this.heroHeader = heroHeaders[this.keyId].image;
    //   ++this.keyId;
    // }
  },
  created: function() {
    this.heroHeader = this.heroHeaders[this.keyId].image
  }
}
</script>

<style lang="scss" scoped>
.hero-header {
  min-height: 100vh;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
}
.commitment {
  border-bottom:solid 1px#fff;
  padding: 10vh;
  &--title {
    font-size: 2.5rem;
  }
  &--contents {
    // 縦書き用CSS設定
    writing-mode: vertical-rl; // 縦書き
    -ms-writing-mode: tb-rl; // EI用
    font-size: 1.02rem; // 文字サイズ
    width: 50%; // 横幅
    margin: 0 auto; // 要素中央揃え
    padding: 4vh 3vw;
    box-sizing: border-box;
    text-align: justify;
    height: 60vh; // 高さ
    display: flex; // 子要素中央揃え
    align-items: center; // 子要素中央揃え
  }
  &--text {
    box-sizing: border-box;
    padding: 0 1vw 0;
    line-height: 5vh;
  }
}
.menu {
  border-bottom:solid 1px#fff;
    padding: 10vh;
  &--title {
        font-size: 2.5rem;
  }
  &--contents {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: 10vh auto;
    .menu--img-frame {
      width: 35vw;
      .menu--img {
        width: 100%;
        vertical-align: bottom;
      }
    }
    .menu--text {
      margin: 0 auto;
      .menu--sentence {
        line-height: 6vh;
        margin-bottom: 5vh;
      }
      .menu--link {
        color: #fff;
        background: #13450c;
        display: inline-block;
        font-size: 1.3rem;
        font-weight: bold;
        text-decoration: none;
        padding: 3vh;
        width: 100%;
      }
    }
  }
}
</style>

