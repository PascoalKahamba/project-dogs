import React, { useEffect, useState } from "react";

const LoginPasswordReset = () => {
  const [loading, setLoading] = useState("");
  const [key, steKey] = useState("");

  useEffect(() => {});
  return (
    <div>
      {key}
      {loading}
    </div>
  );
};

export default LoginPasswordReset;
