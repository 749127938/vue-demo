import eventBus from "@/eventBus" // 导入事件总线方法
import debounce from "@/utils/debounce.js";
import defaultgif from "@/assets/load.gif"
// 这是IMG元素集合
let imgs = [];
// 调用该函数处理图片
function setImage(img) {
    // 直接全部设置为静态的加载中的图片
    img.dom.src = defaultgif;
    const rect = img.dom.getBoundingClientRect();
    // 获取视口的高度
    const clientHeight = document.documentElement.clientHeight;
    const height = rect.height || 100; // 由于图片还没加载出来可能会没有高度
    // 当rect.top小于clientHeight 是在视口
    if (rect.top <= clientHeight && rect.top >= -height) {
        img.dom.src = img.src;
        imgs = imgs.filter(t => img !== t)
    }
}

// 希望调用该函数 就可以设置那些合适的图片
function setImages() {
    for (const img of imgs) {
        setImage(img);
    }
}

function handleScroll() {
    setImages();
}

eventBus.$on("mainscroll", debounce(handleScroll, 50));
export default {
    // 与元素绑定
    inserted(el, binding) {
        const img = {
            dom: el,
            src: binding.value,
        };
        imgs.push(img);
        setImage(img); // 立即处理
    },
    // 元素消失之后执行
    unbind(el, binding) {
        // 判断dom是不是等于当前元素
        imgs = imgs.filter((img) => img.dom !== el)
    }
}