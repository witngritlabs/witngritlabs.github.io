import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "70c2cd53a964486db5584ee92c77b837",
  },
});
