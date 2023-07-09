import axios from "axios";
import { useEffect, useState } from "react";

const useRandomImageGenerator = () => {
  const [foodImage, setFoodImage] = useState(null);

  useEffect(() => {
    const fetchFoodImage = () => {
      axios
        .get(
          `https://api.unsplash.com/photos/random?query=food&client_id=8ihNhf7wn233JQ33xp9QJzerv-MfBCcql5TgJaF5NJY`
        )
        .then((res) => setFoodImage(res.data.urls.regular))
        .catch((err) => console.log(err, "Error Found"));
    };

    fetchFoodImage();
  }, []);

  return foodImage;
};

export default useRandomImageGenerator;
