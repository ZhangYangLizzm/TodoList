import { useLayoutEffect } from 'react';
const useScrollToElement = (selector:string) => {
  useLayoutEffect(() => {
    const element = document.querySelector(selector);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  }, [selector]);
};
export default useScrollToElement;