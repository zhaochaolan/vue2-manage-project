//按钮权限指令
export default {
    install(Vue) {
        Vue.directive('permission',{
            bind:(el,binding,vnode) => {
                //获取页面按钮权限
                let btnPermissionArr = [];
                if(binding.value) {
                    //如果有指令传值，获取指令参数，根据指令参数和当前登录人按钮权限做比较
                    btnPermissionArr = Array.of(binding.value);
                }else {
                    //否则获取路由中的参数
                    btnPermissionArr = vnode.context.$route.meta.btnPermissions;
                }
                if(!Vue.prototype.$_has(btnPermissionArr)) {
                    el.parentNode.removeChild(el);
                }
            }
        })
        Vue.prototype.$_has = function (value) {
            let isExist = false;
            let btnPermissionStr = sessionStorage.getItem('btnPermissions');
            if(btnPermissionStr == undefined || btnPermissionStr == null) {
                return false;
            }
            if(value.indexOf(btnPermissionStr) > -1) {
                isExist = true;
            }
            return isExist;
        }
    }
}