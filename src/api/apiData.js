import request from '@/utils/request';
import axios from "axios";
export function apiData (data,that) {
    return request({
        url:'',
        method:'post',
        data,
        cancelToken:new axios.CancelToken(function executor(cancel) {
            that.cancel = cancel
        })
    })
}
export default {apiData}