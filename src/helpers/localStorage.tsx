const getItem = (key: string) => {
  console.log("desde el getItem", key);
  console.log(JSON.parse(localStorage.getItem(`${key}`) as any));
  return JSON.parse(localStorage.getItem(`${key}`) as any);
};

const setItem = (key: string, data: any) => {
  return localStorage.setItem(`${key}`, JSON.stringify(data) as any);
};

export { getItem, setItem };
