<template>
  <div id="normal" :style="bgimage">
    <div :style="fontSize">
      <p :style="`color:${color};`">{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'normal',
  data() {
    return {
      
    }
  },
  props: {
    width: {},
    text: {},
    image: {},
    color: {}
  },
  computed: {
    bgimage() {
      return `background: ${this.image} no-repeat center/ cover;`
    },
    fontSize() {
      let val = parseInt(this.width.split('em')[0])
      return `font-size: ${val/15}em;`
    }
  }
}
</script>

<style scoped>
  @font-face {
    font-family: cool;
    src: url('../../public/font.ttf');
  }

  #normal {
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10%;
    box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.25);
  }

  #normal p {
    padding: 0 1em;
    font-weight: 400;
    font-family: cool;
    transition: all .3s ease;
  }
</style>