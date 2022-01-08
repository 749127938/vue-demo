var routeTitle = "";
var title = "";


function setTing() {
    if (!routeTitle && !title) {
        document.title = "loading...";
    } else if (routeTitle && !title) {
        document.title = routeTitle;
    } else if (!routeTitle && title) {
        document.title = title;
    } else {
        document.title = `${routeTitle}-${title}`;
    }
}

export default {
    // 设置路由标题
    setRouterTitle(title) {
        routeTitle = title;
        setTing();
    },
    // 设置页面标题
    setDomTitle(titles) {
        title = titles;
        setTing();

    }
}