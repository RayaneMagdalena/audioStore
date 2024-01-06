// Hooks
import { useState, useEffect } from "react";
// Type
import { Product } from "../types/productType";

export const useFetch = () => {
  const [data, setData] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const url = "https://run.mocky.io/v3/9b7a0ad2-865d-4ce6-8ecf-0b116eb1fdfb";
  // const url = "https://run.mocky.io/v3/04a1f277-e7d7-4bca-890c-b7ed007ccce5";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);
        const json = await res.json();

        if (Array.isArray(json)) {
          setData(json);
        } else {
          setData([]);
        }
      } catch (error) {
        console.log(error.message);
        setError("There was some error");
      }

      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

