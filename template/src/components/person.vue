<template>
  <div id="three" :style="fontSize">
    <div class="image-card">
        <div class="image" :style="bgimage"></div>
    </div>
    <div class="textarea" >
      <h2 class="header" :style="`color:${color};`">{{header}}</h2>
      <p class="text" :style="`color:${color};`">{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'person',
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
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 0 3%;
  }
  .textarea {
    flex: 3;
  }
  .textarea .header {
    font-family: kai;
    font-weight: 300;
  }
  .textarea .text {
    font-family: pinru;
    font-size: 0.8em;
  }
  .image-card {
    flex: 1;
    text-align: center;
  }
  .image {
    width: 3em;
    height: 3em;
    border: 2px solid white;
    box-shadow: 0 2px 5px 0 #ccc;
    margin: 10% auto 0;
    border-radius: 50%;
  }
  h2, p {
    transition: all .3s ease;
  }
</style>