<template>
  <div id="footer">
    <div class="footer">
      <h2 class="footer--title">Nothing Cafe</h2>
      <p class="footer--info footer--tel">TEL：03-1234-5678</p>
      <p class="footer--info footer--adress">ADRESS：〒171-0022 東京都豊島区南池袋3-17</p>
      <p class="footer--info footer--time">BUSINESS HOUR：6:30~21:30(水曜日休み)</p>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
  .footer {
    // .footer--titleのことを指す
    &--title {
      margin: 6vh 0;
      font-size: 2rem;
    }
    &--info {
      padding-bottom: 2vh;
      font-size: 1.1rem;
    }
    &--info:last-child {
      padding-bottom: 6vh;
    }
    // footer--tel, --adress, --timeは今回不使用
  }
</style>

