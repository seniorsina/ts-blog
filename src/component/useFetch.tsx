import { url } from "inspector";
import { useEffect, useState } from "react";

const useFetch = (endPoint: string) => {
  const [data, SetData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(endPoint)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data ");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        SetData(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err.message);
        SetData([]);
      });
  }, [endPoint]);

  return { data, error };
};

export default useFetch;
