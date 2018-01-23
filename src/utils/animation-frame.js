/**********************************************/
/** https://gist.github.com/desandro/1866474 **/
/**********************************************/
var prefixes = 'webkit moz ms o'.split(' ');
var lastTime = 0;

export function getRequestAnimationFrame() {
  var requestAnimationFrame = window.requestAnimationFrame;
  var prefix;
  for (var i = 0; i < prefixes.length; i++) {
    if (requestAnimationFrame) {
      break;
    }
    prefix = prefixes[i];
    requestAnimationFrame =
      requestAnimationFrame || window[prefix + 'RequestAnimationFrame'];
  }
  // fallback to setTimeout and clearTimeout if either request/cancel is not supported
  if (!requestAnimationFrame) {
    requestAnimationFrame = function(callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }
  return requestAnimationFrame;
}

export function getCancelAnimationFrame() {
  var cancelAnimationFrame = window.cancelAnimationFrame;
  var prefix;
  for (var i = 0; i < prefixes.length; i++) {
    if (cancelAnimationFrame) {
      break;
    }
    prefix = prefixes[i];
    cancelAnimationFrame =
      cancelAnimationFrame ||
      window[prefix + 'CancelAnimationFrame'] ||
      window[prefix + 'CancelRequestAnimationFrame'];
  }
  // fallback to setTimeout and clearTimeout if either request/cancel is not supported
  if (!requestAnimationFrame || !cancelAnimationFrame) {
    cancelAnimationFrame = function(id) {
      window.clearTimeout(id);
    };
  }
  return getCancelAnimationFrame;
}
