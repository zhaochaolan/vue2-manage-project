<template>
  <div>
    <p>姓名：{{name}}</p>
    <p>年龄：{{age}}</p>
  </div>
</template>
<script>
import {state} from "@/lib/observe";
export default {
  computed:{
    name(){
      return state.name
    },
    age() {
      return state.age
    }
  }
}
</script>