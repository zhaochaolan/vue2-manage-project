<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="changeName()" v-throttle>改变姓名</button>
  </div>
</template>
<script>
import {mutation} from "@/lib/observe";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    changeName() {
      mutation.changeName('李四');
      // console.log(12)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
