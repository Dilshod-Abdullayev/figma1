import React, { useEffect, useState } from "react";

const SetData = (url, loading) => {
  const [data, setData] = useState();
  useEffect(() => {
    setData(url, loading == true);
  }, []);
  return <div></div>;
};

export default SetData;
