export const uzeReplace = (query: string, value: string | number) => {
   let url = new URL(window.location.href);
   url.searchParams.set(query, value);
   if (!value && value !== 0) {
      url.searchParams.delete(query);
   }
   return url.search;
};
