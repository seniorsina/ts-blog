import { url } from "inspector";
import { useEffect, useState } from "react";

interface ABlog {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const useFetch = (endPoint: string) => {
  const [data, SetData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(endPoint, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data ");
        }
        return res.json();
      })
      .then((data) => {
        console.log("data:" + data);
        let res: any = [];
        if (Array.isArray(data)) {
          res = data;
          console.log("array");
        } else {
          res.push(data);
        }
        SetData(res);
        setError(null);
      })
      .catch((err) => {
        if (err.name == "AbortError") {
        } else {
          setError(err.message);
          console.log(err.message);
          SetData([]);
        }
      });
  }, [endPoint]);

  return { data, error };
};

export default useFetch;
