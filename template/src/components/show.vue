<template>
  <div id="show">
    <div class="control">
      <button @click="exportImg">导出为图片</button>
      <button @click="color='#3498db'" style="background-color: #3498db;">字体颜色</button>
      <button @click="color='#2ecc71'" style="background-color: #2ecc71;">字体颜色</button>
      <button @click="color='#e74c3c'" style="background-color: #e74c3c;">字体颜色</button>
      <button @click="color='#ecf0f1'" style="background-color: #ecf0f1; color: black;">字体颜色</button>
      <button @click="color='#000'" style="background-color: #000;">字体颜色</button>   
    </div>
    <div class="content">
      <div class="arrow-box">
        <button class="arrow" @click="select(selectIndex > 0 ? selectIndex-1 : selectIndex)">&lt;</button>
      </div>
      <div class="card-box">
        <div class="card">
          <transition name="slide" mode="out-in">
            <components :is="list[selectIndex]" width="40em" :header="header" :text="text" :image="image" :color="color" ref="sharePic"></components>
          </transition>
        </div>
      </div>
      <div class="arrow-box" style="text-align: right;">
        <button class="arrow" @click="select(selectIndex < list.length - 1 ? selectIndex+1 : selectIndex)">></button>
      </div>
    </div>
    <div class="switch">
      <ul class="template-list">
        <li v-for="(item, index) in list" 
            :key="item" 
            @click="select(index)" 
            :class="{'selected': selectIndex==index}">
            <components :is="list[index]" width="8em" :header="header" :text="text" :image="image" :color="color"></components>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import normal from "@/components/normal.vue"
import aero from '@/components/aero.vue'
import threeD from '@/components/threeD.vue'
import card from '@/components/card.vue'
import person from '@/components/person.vue'

import html2canvas from 'html2canvas'
import canvas2image from 'canvas2image'

export default {
  name: 'show',
  components: {
    'normal': normal,
    'aero': aero,
    'threeD': threeD,
    'card': card,
    'person': person
  },
  data() {
    return {
      selectIndex: 0,
      color: '',
      list: ['normal', 'aero', 'threeD', 'card', 'person']
    }
  },
  props: {
    image: {},
    text: {},
    header: {},
  },
  methods: {
    select(index) {
      this.selectIndex = index;
    },
    exportImg() {
      let dom = this.$refs.sharePic.$el;
      html2canvas(dom, {
        allowTaint: false,
        traitTest: true,
        useCORS: true,
        background: null
      }).then(canvas => {
        var str = canvas2image.canvas2image.saveAsPNG(canvas, canvas.width, canvas.height)
        let link = document.createElement('a');
        link.setAttribute("href", str);
        link.setAttribute("download", `image.png`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      
    }
  }
}
</script>

<style scoped>
  #show {
    display: flex;
    flex-direction: column;
    height: 100%;
    z-index: 2;
    background: inherit;
    box-sizing: border-box;
  }
  .control {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0 1em;
  }
  .control button {
    background-color: #3498db;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1em;
    margin: 0 1em;
    transition: all 0.4s ease;
    outline: none;
  }
  .control button:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }
  .control button:active {
    transform: translateY(3px);
  }
  .content {
    display: flex;
    align-items: center;
    flex: 7;
  }
  .content .arrow-box {
    /*flex: 1;*/
    margin: 1em;
  }
  .content .arrow-box .arrow {
    width: 2em;
    height: 2em;
    outline: none;
    border: 1px solid #3498db;
    background: #3498db;
    color: white;
    font-size: 1.5em;
    border-radius: 50%;
    transition: all .3s ease;
  }
  .content .arrow-box .arrow:hover {
    background: #1abc9c;
    border-color: #1abc9c;
  }
  .content .arrow-box .arrow:active {
    transform: translateY(4px);
  }
  .content .card-box {
    flex: 6;
  }
  .content .card-box .card {
    width: 40em;
    height: 30em;
    margin: 0 auto;
  }
  .switch {
    flex: 2;
    display: flex;
    align-items: center;
  }
  .switch .template-list {
    list-style: none;
    margin-block-start: 0;
    margin-block-end: 0;
    display: flex;
    align-items: center;
  }
  .switch .template-list li {
    display: inline-block;
    width: 8em;
    height: 5em;
    margin: 1em;
    transition: all .3s ease;
  }
  .switch .template-list li.selected {
    transform: scale(1.2);
  }

  .slide-enter-active, .slide-leave-active {
    transition: all .3s ease;
  }
  .slide-enter {
    transform: translateY(-10px);
    opacity: 0;
  }
  .slide-leave-to {
    transform: translateY(10px);
    opacity: 0;
  }
  #show::before{
		position: absolute;
		display: block;
		width: 100%;
		height: 100%;
		content: "";
		background: inherit;
		filter: blur(12px);
		z-index: -1;
	}
</style>