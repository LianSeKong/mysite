import styles from './loading.module.css'

type modify = {
  masked: boolean
}

function toggleLoader(el:HTMLElement, shouldShow: boolean, modifiers: modify): void {
  let loader  = el.querySelector(`.${styles.loader}`)
  if (shouldShow) {
    if (!loader) {
      loader = document.createElement('div')
      loader.className = styles.loader

      // 绑定元素没有定位
      if (!Object.entries(window.getComputedStyle(el)).some(entry => entry[0] === 'position' && ['absolute', 'fixed', 'relative', 'fixed'].indexOf(entry[1]) !== -1)) {
        el.classList.add('relative')
      }
      // 增加遮罩
      if (modifiers.masked) {
        const mask = document.createElement('div')
        mask.className = 'transition ease-in-out delay-250 absolute bottom-0 left-0 backdrop-blur-sm bg-blue-200/10 h-full w-full'
        mask.appendChild(loader)
        el.appendChild(mask)
      } else {
        el.appendChild(loader)
      }
    } else {
      if (loader.parentElement ) {
        if (loader.parentElement !== el) {
          loader.parentElement.removeAttribute('style')
        } else {
          loader.removeAttribute('style')
        }
      }
    }
  } else {
    if (loader) {
      // Hide loader instead of removing
      if (loader.parentElement) {
        if (loader.parentElement !== el) {
          loader.parentElement.setAttribute('style', "opacity: 0; z-index:-999;")
        } else {
          loader.setAttribute('style', "opacity: 0; z-index:-999;")
        }
      }
    }
  }
}


export default {
  mounted(el:HTMLElement, binding:any):void {
    toggleLoader(el, binding.value, binding.modifiers)
  },
  updated(el:HTMLElement, binding: any) {
    toggleLoader(el, binding.value, binding.modifiers)
  },
}
