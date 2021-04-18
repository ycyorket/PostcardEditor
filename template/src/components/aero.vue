<template>
  <div id="aero" :style="bgimage">
    <main :style="fontSize">
      <p :style="`color:${color};`">
        {{text}}
      </p>
      <div class="blur" :style="bgimage"></div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'aero',
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
    font-family: fang;
    src: url('../../public/Fang.ttf');
  }
  #aero {
    width: 100%;
    height: 100%;
    border-radius: 5%;
    position: relative;
  }
  #aero main {
    background: rgba(255, 255, 255, .3);
    position: relative;
    left: 1em;
    top: 1em;
    height: calc(100% - 2em);
    width: calc(100% - 2em);
    overflow: hidden;
    padding: 1em;
    box-sizing: border-box;
    box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, .3);
    z-index: 1;
  }
  #aero main .blur {
    position: absolute;
    left: 0; right: 0; top: 0; bottom: 0;
    filter: blur(3px);
    margin: -30px;
    z-index: 1;
  }
  #aero main p {
    position: relative;
    z-index: 2;
    font-family: fang;
    font-size: .8em;
    transition: all .3s ease;
  }
</style>