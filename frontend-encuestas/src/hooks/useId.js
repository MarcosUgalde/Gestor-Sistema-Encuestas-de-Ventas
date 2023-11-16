export const useId = () => {
  const url = window.location.href;
  const id = url.substring(url.lastIndexOf("/") + 1);
  return id;
};
