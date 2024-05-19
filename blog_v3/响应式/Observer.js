// 原始对象 -> Observer -> getter + setter

// Vue 通过 Vue.observable(object)


// 构建流程：  组件渲染时， 在created() 前完成数据代理
// 之后对data进行属性的添加和删除不会触发响应式


// 对象

// 数组 

// 对数据的常用方法进行封装   [].__proto__ = { // vue封装的方法对象 }.__proto__ = Array prototype 



