import { useEffect, useState } from "react";
import axios from "axios";

function useVideo() {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    axios
      .get("/api/videos")
      .then((data) => {
        setCardData(data.data.videos);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return {
    cardData,
  };
}

export { useVideo };
