import { useCallback, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const request = useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  }, []);
  return {
    data,
    error,
    loading,
    request,
  };
};

export default useFetch;
