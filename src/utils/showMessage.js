import styles from './showMessage.module.less'; // 导入message的less
import Icon from '@/components/Icon'; // 导入图标组件
import getComponentRootDom from './getComponentRootDom'; // 导入获取组件元素方法
/**
 * 默认为一个空对象
 * @param {Object} options 
 */
export default function showMessage(options = {}) {
    const content = options.content || "";
    const type = options.type || "info";
    const container = options.container || document.body;
    const duration = options.duration || 2000;
    // 获取到图标组件元素
    const iconDom = getComponentRootDom(Icon, { type }).outerHTML;
    // 创建弹窗元素
    const div = document.createElement("div");
    // 设置弹窗的类样式
    div.className = `${styles.message} ${styles['message-' + type]}`;
    //(getComputedStyle(container).position);
    // 判断弹窗的容器的position是否是静态的
    if (getComputedStyle(container).position == 'static') {
        // 如果是静态的再判断是否是body如果是body就不设置
        if (container !== document.body) container.style.position = 'relative';
    }
    // 设置弹窗的内容
    div.innerHTML = `<span class="${styles.icon}">${iconDom}</span><div>${content}</div>`;
    // 把弹窗元素插入到容器中
    container.appendChild(div);
    // 由于浏览器是异步的 不进行强行渲染是看不出过渡效果的 
    div.clientHeight; // 导致reflow
    // 把弹窗设置为可见样式
    div.style.opacity = 1;
    div.style.transform = `translate(-50%, -50%)`;
    // 元素将在几秒后消失 取决于duration
    setTimeout(() => {
        // 把弹窗恢复至原来样式
        div.style.opacity = 0;
        div.style.transform = `translate(-50%, -50%) translateY(-25px)`;
        div.addEventListener("transitionend", () => {
            // 将元素删除掉
            div.remove();
            if (options.callback) options.callback();
            // once表示只执行一次
        }, { once: true });

    }, duration)
}