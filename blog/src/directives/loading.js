import styles from './loading.module.css'

function toggleLoader(el, shouldShow) {
    let loader = el.querySelector(`.${styles.loader}`)
    if (shouldShow) {
        if (!loader) {
            loader = document.createElement('div')
            loader.className = styles.loader
            el.appendChild(loader)
        } else {
            loader.removeAttribute('style')
        }
    } else {
        if (loader) {
            // Hide loader instead of removing
            loader.style.display = 'none'
        }
    }
}

export default {
    bind(el, binding) {
        toggleLoader(el, binding.value)
    },
    update(el, binding) {
        toggleLoader(el, binding.value)
    },
}
