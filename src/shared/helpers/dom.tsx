export const scroolToTop = () => {
   document.documentElement.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
   });
};
