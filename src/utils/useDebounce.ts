const useDebounce = (fn: VoidFunction, delay: number) => {
  let timer: number | undefined = undefined;
  const debounce = () => {
    timer && clearTimeout(timer);
    timer = window.setTimeout(() => {
      fn();
    }, delay || 200);
  };

  return debounce;
};
export default useDebounce;
