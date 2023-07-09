import axios from "axios";
import { useEffect, useState } from "react";

const useDataFetcher = () => {
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);

  const fetchData = () => {
    axios
      .get(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.9984401&lng=77.0258391&page_type=DESKTOP_WEB_LISTING"
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, Loading };
};

export default useDataFetcher;
