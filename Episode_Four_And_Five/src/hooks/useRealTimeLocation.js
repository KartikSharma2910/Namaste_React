import axios from "axios";
import { useEffect, useState } from "react";

const useRealTimeLocation = () => {
  const [location, setLocation] = useState(null);

  const fetchPlace = (latitude, longitude) => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAwDHDGuHGhCzlwIOyqOrPFURvHDMWLG08`
      )
      .then((res) => setLocation(res.data.results[0].formatted_address))
      .catch((err) => console.log(err, "Error Found"));
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchPlace(latitude, longitude);
        },
        (error) => {
          console.log(error, "Error retrieving location");
        }
      );
    } else {
      console.log("Geolocation is not supported by your browser");
    }
  }, []);

  return location;
};

export default useRealTimeLocation;
