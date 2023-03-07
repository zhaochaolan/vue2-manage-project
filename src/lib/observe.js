import Vue from 'vue';
export let state = Vue.observable({
    name:'张三',
    age:'12'
})

export let mutation = {
    changeName(name) {
        state.name = name
    },
    setAge(age) {
        state.age = age
    }
}