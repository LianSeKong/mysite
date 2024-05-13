/**
 * styles css module
 * 
 * 1. is a object
 * 2. contains key-value
 * 3. key is style class name
 * 4. value: The Result after packing
 * 
 */
import styles from './loading.module.css'

export default {
    // 指令与元素成功绑定时（一上来）
    bind(el, binding){
        let loading = el.querySelector("div[class$='loader']")
        if (binding.value) {
            if (!loading) {
                loading = document.createElement('div')
                loading.className = styles['loader']
                el.appendChild(loading)
            }
        } else {
            if (loading) {
                loading.remove()
            }
        }
    },
    update(el, binding){
        // 创建一个img元素, 放到el元素内部
        let loading = el.querySelector("div[class$='loader']")
        if (binding.value) {
            if (!loading) {
                loading = document.createElement('div')
                loading.className = styles['loader']
                el.appendChild(loading)               
            } 
        } else {
            if (loading) {
                loading.remove()
            }
        }
    },
}