import axios from "axios";

async function GetVideo() {
  return axios.get("/api/videos");
}

export { GetVideo };
