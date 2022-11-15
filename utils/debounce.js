export default function debounce(fn, delay, timer, setTimer) {
  const debouncedFn = (...args) => {
    if (timer) {
      window.clearTimeout(timer);
      setTimer(null);
      return;
    }

    setTimer(
      setTimeout(() => {
        fn(...args);
        setTimer(null);
      }, delay)
    );
  };

  return debouncedFn;
}
