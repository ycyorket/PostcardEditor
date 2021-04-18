<template>
  <div id="app">
    <Sider id="sid" :siderDisplay="true" location="札幌, 北海道, 日本"/>
    <show id="show" :text="text" :header="header" :image="image"></show>
  </div>
</template>

<script>
import show from  '@/components/show.vue'
import Sider from '@/components/Sider.vue'

export default {
  name: 'App',
  components: {
    'show': show,
    'Sider': Sider
  },
  data() {
    return {
      header: "日本行 day1",
      text: "今天我们终于到了北海道！",
      currentDate: "2020/4/12",
      currentTime: "17:23",
      currentDay: "星期日",
      image: "inherit",
    }
  }
}
</script>

<style scoped>
  #app {
    height: 100%;
    display: flex;
    display: flex;
    background: url(assets/bg.jpeg) no-repeat;
    background-size: 100% 100%;
    border: 1px solid black;
    z-index: 1;
  }
  #sid {
    flex: 2;
  }
  #show {
    flex: 7;
  }
</style>
