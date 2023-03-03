
const OK = 200;

export const fetchGet = async (url = ""): Promise<any> => {
  const response = await fetch(url, { cache: "no-cache" });
  if (response.status === OK) {
    const data = await response.json();
    return data;
  }

  throw new Error('fetch failed');
}
