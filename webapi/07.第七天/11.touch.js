function tabEvent(element,fn,offset,span) {
    offset = offset || 10;
    span = span || 300
    var element = document.getElementById('box')
    // 三个要点 time触摸的时间 x,y范围
    var startTime, startX, startY;

    element.addEventListener('touchstart', function (e) {
        if (e.touches.length > 1) {
            return
        }
        startTime = Date.now();
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    })

    element.addEventListener('touchend', function (e) {
        // 5.1 判断是否是一个手指
        if (e.changedTouches.length > 1) {
            return;
        }
        // 5.2 判断是否产生太大的位移
        var endX = e.changedTouches[0].clientX;
        var endY = e.changedTouches[0].clientY;
        if (endX - startX > 10 || endY - startY > 10) {
            return;
        }
        // 5.3 判断时间是否太长
        var endTime = Date.now();
        if (endTime - startTime > 300) {
            return;
        }
        // 如果以上条件都不成立，就是一个移动端的点击事件
        console.log('这就是一个tap事件');
    })
    fn && fn()
}