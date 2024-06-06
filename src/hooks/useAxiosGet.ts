import axios from "axios";
import { useEffect, useState } from "react";

export const useAxiosGet = <T>(url: string): T | undefined => {
  const [data, setData] = useState<T>();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get<T>(url);
        setData(response.data);
      } catch (e) {
        console.error("Can't retrieve data", e);
      }
    };

    getData();
  }, [url]);
  
  return data;
};
