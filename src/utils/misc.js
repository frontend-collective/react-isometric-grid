// from: http://stackoverflow.com/a/21913575
export function getComputedTranslateY(obj) {
  if (!window.getComputedStyle) {
    return 0;
  }
  const style = getComputedStyle(obj);
  const transform =
    style.transform || style.webkitTransform || style.mozTransform;
  let mat = transform.match(/^matrix3d\((.+)\)$/);
  if (mat) {
    return parseFloat(mat[1].split(', ')[13]);
  }
  mat = transform.match(/^matrix\((.+)\)$/);
  return mat ? parseFloat(mat[1].split(', ')[5]) : 0;
}

// some helper functions
export function scrollY() {
  return window.pageYOffset || window.document.documentElement.scrollTop;
}

export function extend(a, b) {
  return Object.assign(a, b);
}

export function getViewportH() {
  const client = window.document.documentElement.clientHeight;
  const inner = window.innerHeight;

  if (client < inner) {
    return inner;
  }
  return client;
}

export function isValidColor(color) {
  if (color.charAt(0) === '#') {
    const hexValue = color.substring(1);
    return [3, 4, 6, 8].indexOf(hexValue.length) > -1 && parseInt(hexValue, 16);
  }
  return /^(rgb|hsl)a?\((\d+%?(deg|rad|grad|turn)?[,\s]+){2,3}[\s]*[\d]+%?\)$/i.test(
    color
  );
}
