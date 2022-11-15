const debounce = (fn, delay, debounceRunning) => {
  let timer = null;
  debounceRunning.current = true;

  const debouncedFn = (...args) => {
    if (timer) {
      window.clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn(...args);
      debounceRunning.current = false;
    }, delay);
  };

  return debouncedFn;
};
export default debounce;
