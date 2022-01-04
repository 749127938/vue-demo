// const listeners = {}; // 把事件集合成一个对象
// // 事件总线
// export default {
//     /**
//      * 监听某一个事件
//      * @param {*} eventName 事件的名字
//      * @param {*} handler 事件的处理函数
//      */
//     $on(eventName, handler) {
//         if (!listeners[eventName]) {
//             // 如果没有eventName就初始化一下
//             listeners[eventName] = new Set();
//         }
//         // 把处理函数加到这个数组里面
//         listeners[eventName].add(handler);
//     },
//     /**
//      * 取消监听某一个事件
//      * @param {*} eventName 事件的名字
//      * @param {*} handler 事件的处理函数
//      */
//     $off(eventName, handler) {
//         if (!listeners[eventName]) {
//             // 如果没有eventName就直接结束
//             return;
//         }
//         // 如果有的话就删除这个处理函数
//         listeners[eventName].delete(handler);
//     },
//     /**
//      * 触发事件
//      * @param {*} eventName 事件的名字
//      * @param {*} args 执行处理函数时要处理的数据
//      */
//     $emit(eventName, ...args) {
//         if (!listeners[eventName]) {
//             // 如果没有eventName就直接结束
//             return;
//         }
//         for (const handler of listeners[eventName]) {
//             handler(...args);
//         }
//     }
// }



/**
 * 事件名：mainscroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：-滚动的DOM元素 如果是undefined表示元素不存在了
 * 
 * 事件名：setMainScroll
 * 含义：设置主区域滚动条位置时触发
 * 参数：-滚动高度
 */


import Vue from "vue";
const app = new Vue({});
Vue.prototype.$bus = app

export default app;