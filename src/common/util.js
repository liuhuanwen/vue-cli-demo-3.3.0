export function getScrollTop() {
  // 考虑到浏览器版本兼容性问题，解析方式可能会不一样
  return document.documentElement.scrollTop || document.body.scrollTop;
}

export function getWinHeight() {
  // 浏览器可见内容高度 || 浏览器所有内容高度(考虑到浏览器版本兼容性问题，解析方式可能会不一样)
  return document.documentElement.clientHeight || document.body.clientHeight;
}

export function getScrollHeight() {
  let bodyScrollHeight = 0;
  let documentScrollHeight = 0;
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight
  }
  // 当页面内容超出浏览器可视窗口大小时，Html的高度包含body高度+margin+padding+border所以html高度可能会大于body高度
  return (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight
}

export function isReachBottom () {
  const scrollTop = getScrollTop(); // 获取滚动条的高度
  const winHeight = getWinHeight(); // 一屏的高度
  const scrollHeight = getScrollHeight(); // 获取文档总高度
  return scrollTop >= parseInt(scrollHeight) - winHeight
}

/**
 * 获取图片的全名称，包括后缀名
 * */
export function getFullImageName(imageName) {
  if (imageName) {
    if (imageName.endsWith('png')) {
      return imageName + '.png';
    }
    if (imageName.endsWith('jpeg')) {
      return imageName + '.jpeg';
    }
  } else {
    return '';
  }
}

/**
 * 格式化距离，km m
 * */
export function formatDistance(distance) {
  if (distance < 0) {
    return '0m';
  }
  if (distance < 1000) {
    return distance + 'm';
  }
  return (distance / 1000).toFixed(2) + 'km';
}