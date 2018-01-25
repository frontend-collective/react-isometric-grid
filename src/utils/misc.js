// from: http://stackoverflow.com/a/21913575
export function getComputedTranslateY(obj) {
  if (!window.getComputedStyle) {
    return;
  }
  var style = getComputedStyle(obj),
    transform = style.transform || style.webkitTransform || style.mozTransform;
  var mat = transform.match(/^matrix3d\((.+)\)$/);
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
  for (var key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }
  return a;
}

export function getViewportH() {
  var client = window.document.documentElement['clientHeight'],
    inner = window['innerHeight'];

  if (client < inner) {
    return inner;
  } else {
    return client;
  }
}

function isValidColor(color) {
  if (color.charAt(0) === '#') {
    color = color.substring(1);
    return (
      [3, 4, 6, 8].indexOf(color.length) > -1 && !isNaN(parseInt(color, 16))
    );
  } else {
    return /^(rgb|hsl)a?\((\d+%?(deg|rad|grad|turn)?[,\s]+){2,3}[\s\/]*[\d\.]+%?\)$/i.test(
      color
    );
  }
}
