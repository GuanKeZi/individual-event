/**
 * 动画函数
 * @param { object } element 要移动的元素
 * @param { number } target 移动到的目标位置
 */
function animate(element, target) {
  // 每次进行动画之前，先把上一个给清除了
  clearInterval(element.timerId);
  // 使用定时器让left属性，慢慢变小
  element.timerId = setInterval(function () {
    // 获取当前位置
    var current = element.offsetLeft;
    // 根据移动的方向，处理curent到底是+=还是-=
    // 从左向右，就是+=，从右向左就是-=
    // 如果当前的位置，距离目标位置要小 ，就是从左往右
    var step = 40;
    if (current <= target) {
      current += step;
    } else {
      current -= step;
    }
    element.style.left = current + 'px';
    // 判断停下
    // 只要当前位置和目标位置的距离小于10个像素，就可以停下了
    // 求目标和当前之间的距离  --- 距离是没有方向的，只有大小  绝对值  Math.abs()
    // 只要判断绝对值是否在10之间，就行，如果绝对值在10之间，就是距离小于10了
    if (Math.abs(target - current) <= step) {
      // 如果元素没有到达目标，强行设定元素到达目标位置
      element.style.left = target + 'px';
      clearInterval(element.timerId);
    }

  }, 20);
}