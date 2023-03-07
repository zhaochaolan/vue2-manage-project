//防止表单重复提交
export default {
    install(Vue) {
        Vue.directive('throttle',{
            bind:(el,binding) => {
                let throttleTime = binding.value; //节流时间
                if(!throttleTime) {
                    throttleTime = 2000;
                }
                let cbFun;
                el.addEventListener('click',event => {
                    console.log(cbFun)
                    if(!cbFun) { //第一次执行
                        cbFun = setTimeout(() => {
                            cbFun = null;
                        },throttleTime)
                    } else {
                        event & event.stopImmediatePropagation();
                    }
                },true)
            }
        })
    }
}