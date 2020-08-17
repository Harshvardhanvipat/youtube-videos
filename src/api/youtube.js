import axios from "axios";

const KEY = "AIzaSyDIz8T2y34TzV6iQD5FvhttPQNHS3HnvCk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
