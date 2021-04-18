<template>
  <div id="three">
    <div class="textarea" :style="fontSize">
      <h2 class="header" :style="`color:${color};`">{{header}}</h2>
      <p class="text" :style="`color:${color};`">{{text}}</p>
    </div>
    <div class="image" :style="bgimage"></div>
  </div>
</template>

<script>
export default {
  name: 'threeD',
  props: {
    width: {},
    text: {},
    image: {},
    color: {},
    header: {}
  },
  computed: {
    bgimage() {
      return `background: ${this.image} no-repeat center/ cover;`
    },
    fontSize() {
      let val = parseInt(this.width.split('em')[0])
      return `font-size: ${val/20}em;`
    }
  }
}
</script>

<style scoped>
  @font-face {
    font-family: kai;
    src: url('../../public/kai.ttf');
  }
  @font-face {
    font-family: pinru;
    src: url('../../public/pinru.ttf');
  }
  #three {
    height: 100%;
    border-bottom: 1px solid #cccccc;
    background-color: #fff;
    display: flex;
    padding: 0 3%;
  }
  .textarea {
    flex: 1;
    width: 100%;
  }
  .textarea .header {
    font-family: kai;
    font-weight: 300;
  }
  .textarea .text {
    font-family: pinru;
    font-size: 0.8em;
    overflow: hidden;
  }
  .image {
    flex: 1;
    border: 2px solid white;
    box-shadow: 0 2px 5px 0 #ccc;
    margin: 5%;
    transform: scale(0.9) rotateX(30deg) rotateY(-30deg) rotateZ(30deg) translateY(30px);
  }
  h2, p {
    transition: all .3s ease;
  }
</style>