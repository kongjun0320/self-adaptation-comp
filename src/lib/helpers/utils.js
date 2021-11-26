export const debounce = (fn, delay) => {
  let timer = null;

  return (...arg) => {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn.apply(this, arg), delay);
  };
};
