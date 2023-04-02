export const uzeReplace = (query: string, value: string) => {
   let url = new URL(window.location.href);
   url.searchParams.set(query, value);
   if (!value) {
      url.searchParams.delete(query);
   }
   return url.search;
};
