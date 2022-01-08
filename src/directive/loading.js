import loading from "@/assets/loading.gif";
import styles from "./loading.module.less"

function getImg(el) {
    return el.querySelector('img[data-role=loading')
}

function createImage() {
    const img = document.createElement('img');
    img.src = loading;
    img.dataset.role = "loading"; // 设置data属性
    img.className = styles.loading;
    return img;
}


export default function(el, binding) {
    const imgs = getImg(el);
    if (binding.value) {
        // 如果没有值就创建一个
        if (!imgs) {
            const img = createImage();
            el.appendChild(img);
        }
    } else {
        //  如果有那就删除
        if (imgs) {
            imgs.remove();
        }
    }
}

// {
//     bind(el, binding) {
//         // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
//          //('bind', el, binding);
//     },
//     inserted(el, binding) {
//         // 被绑定元素插入父节点时调用。
//          //('inserted', el, binding);
//     },
//     update(el, binding) {
//         // 所在组件的 VNode 更新时调用
//          //('update', el, binding);
//     }
// }