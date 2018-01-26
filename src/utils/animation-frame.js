/** ******************************************* */
/** https://gist.github.com/desandro/1866474 * */
/** ******************************************* */
const prefixes = 'webkit moz ms o'.split(' ');
let lastTime = 0;

export function getRequestAnimationFrame() {
  let { requestAnimationFrame } = window;
  let prefix;
  for (let i = 0; i < prefixes.length; i += 1) {
    if (requestAnimationFrame) {
      break;
    }
    prefix = prefixes[i];
    requestAnimationFrame =
      requestAnimationFrame || window[`${prefix}RequestAnimationFrame`];
  }
  // fallback to setTimeout and clearTimeout if either request/cancel is not supported
  if (!requestAnimationFrame) {
    requestAnimationFrame = () => callback => {
      const currTime = new Date().getTime();
      const timeToCall = Math.max(0, 16 - (currTime - lastTime));
      const id = window.setTimeout(() => {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }
  return requestAnimationFrame;
}

export function getCancelAnimationFrame() {
  let { cancelAnimationFrame } = window;
  let prefix;
  for (let i = 0; i < prefixes.length; i += 1) {
    if (cancelAnimationFrame) {
      break;
    }
    prefix = prefixes[i];
    cancelAnimationFrame =
      cancelAnimationFrame ||
      window[`${prefix}CancelAnimationFrame`] ||
      window[`${prefix}CancelRequestAnimationFrame`];
  }
  // fallback to setTimeout and clearTimeout if either request/cancel is not supported
  if (!requestAnimationFrame || !cancelAnimationFrame) {
    cancelAnimationFrame = id => {
      window.clearTimeout(id);
    };
  }
  return getCancelAnimationFrame;
}
