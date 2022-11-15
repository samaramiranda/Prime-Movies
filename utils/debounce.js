const debounce = (fn, delay, setDebounceRunning) => {
  let timer = null;
  setDebounceRunning(true);

  const debouncedFn = (...args) => {
    if (timer) {
      window.clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn(...args);
      setDebounceRunning(false);
    }, delay);
  };

  return debouncedFn;
};
export default debounce;
