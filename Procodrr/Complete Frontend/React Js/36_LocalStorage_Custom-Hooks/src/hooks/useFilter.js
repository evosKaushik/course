import { useLocalStorage } from "./useLocalStorage";

export const useFilter = (dataList, callback) => {
  const [query, setQuery] = useLocalStorage("filter", "");

  const filteredData = dataList.filter((data) =>
    callback(data).toLowerCase().includes(query)
  );
  
  return [filteredData, setQuery];
};
