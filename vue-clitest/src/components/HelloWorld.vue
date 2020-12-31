<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <selfChart :msg="msg"></selfChart>
  </div>
</template>

<script>
import selfChart from './selfChart.vue'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    selfChart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
