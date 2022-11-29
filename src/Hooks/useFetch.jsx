import React, { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoadiang] = useState(false);
  const [error, setError] = useState(null);
  return {
    data,
    error,
    loading,
  };
};

export default useFetch;
